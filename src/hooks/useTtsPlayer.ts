import { useState, useEffect, useRef } from 'react';
import { useAppStore } from '../store/useAppStore';

export interface TtsSpeakableItem {
  bookId: string;
  chapter: number;
  verseNum: number;
  textZh: string;
  textEn: string;
}

export const useTtsPlayer = (items: TtsSpeakableItem[]) => {
  const {
    selectedBookId,
    selectedChapter,
    selectedVerseStart,
    isTtsPlaying,
    isTtsPaused,
    ttsActiveVerse,
    ttsLanguage,
    ttsRate,
    ttsVoiceURI,
    setTtsPlaying,
    setTtsPaused,
    setTtsActiveVerse,
    setTtsLanguage,
    setTtsRate,
    setTtsVoiceURI,
    stopTts
  } = useAppStore();

  const [allVoices, setAllVoices] = useState<SpeechSynthesisVoice[]>([]);
  const currentVerseIndexRef = useRef<number>(-1);

  // Load and update voices list
  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    const updateVoices = () => {
      const systemVoices = window.speechSynthesis.getVoices();
      setAllVoices(systemVoices);
    };

    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  // Filter voices for current language choice
  const filteredVoices = allVoices.filter((voice) => {
    if (ttsLanguage === 'zh') {
      // Match typical Chinese locales: zh-CN (Mandarin), zh-TW (Taiwan), zh-HK (Hong Kong)
      return voice.lang.startsWith('zh-') || voice.lang.includes('chinese') || voice.lang.startsWith('zho');
    } else {
      // Match English locales
      return voice.lang.startsWith('en-') || voice.lang.includes('english') || voice.lang.startsWith('eng');
    }
  });

  // Automatically update active voice if current voice selection is not in filtered list
  useEffect(() => {
    if (filteredVoices.length > 0 && ttsVoiceURI) {
      const isStillAvailable = filteredVoices.some((v) => v.voiceURI === ttsVoiceURI);
      if (!isStillAvailable) {
        // Pick default matching voice
        const defaultVoice = filteredVoices.find((v) => v.default) || filteredVoices[0];
        setTtsVoiceURI(defaultVoice.voiceURI);
      }
    }
  }, [ttsLanguage, filteredVoices]);

  // Clean up speech when chapter or book navigation occurs
  useEffect(() => {
    stopPlayback();
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [selectedBookId, selectedChapter]);

  // Speak a specific verse by index
  const speakVerse = (index: number) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    if (!items || items.length === 0 || index < 0 || index >= items.length) {
      stopPlayback();
      return;
    }

    // Cancel ongoing speech to clear queue
    window.speechSynthesis.cancel();

    const item = items[index];
    const textToSpeak = ttsLanguage === 'zh' ? item.textZh : item.textEn;
    
    // Clean text (remove brackets or other formatting if present)
    const cleanText = textToSpeak.replace(/\[|\]/g, '').trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = ttsLanguage === 'zh' ? 'zh-CN' : 'en-US';
    utterance.rate = ttsRate;

    // Apply selected voice
    if (ttsVoiceURI) {
      const selectedVoice = allVoices.find((v) => v.voiceURI === ttsVoiceURI);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
    } else {
      // Find a suitable default voice if none set
      const defaultVoice = filteredVoices.find((v) => v.default) || filteredVoices[0];
      if (defaultVoice) {
        utterance.voice = defaultVoice;
        setTtsVoiceURI(defaultVoice.voiceURI);
      }
    }

    // Update state using full book/chapter/verse path
    setTtsActiveVerse({
      bookId: item.bookId,
      chapter: item.chapter,
      verseNum: item.verseNum
    });
    currentVerseIndexRef.current = index;

    utterance.onend = () => {
      // Verify index hasn't changed (due to user skipping or stopping)
      if (currentVerseIndexRef.current === index) {
        const nextIndex = index + 1;
        if (nextIndex < items.length) {
          speakVerse(nextIndex);
        } else {
          stopPlayback();
        }
      }
    };

    utterance.onerror = (e) => {
      if (e.error !== 'interrupted') {
        console.error('SpeechSynthesis error:', e);
        stopPlayback();
      }
    };

    window.speechSynthesis.speak(utterance);
  };

  const startPlayback = (startIndex?: number) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    setTtsPlaying(true);
    setTtsPaused(false);

    // Determine starting index
    let startIdx = 0;
    if (startIndex !== undefined) {
      startIdx = startIndex;
    } else if (ttsActiveVerse !== null) {
      const activeIdx = items.findIndex(
        (item) =>
          item.bookId === ttsActiveVerse.bookId &&
          item.chapter === ttsActiveVerse.chapter &&
          item.verseNum === ttsActiveVerse.verseNum
      );
      startIdx = activeIdx !== -1 ? activeIdx : 0;
    } else {
      // Fall back to current selected verse if present in our items
      const selectedIdx = items.findIndex(
        (item) =>
          item.bookId === selectedBookId &&
          item.chapter === selectedChapter &&
          item.verseNum === selectedVerseStart
      );
      startIdx = selectedIdx !== -1 ? selectedIdx : 0;
    }

    speakVerse(startIdx);
  };

  const pausePlayback = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.pause();
    setTtsPaused(true);
  };

  const resumePlayback = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.resume();
    setTtsPaused(false);
  };

  const stopPlayback = () => {
    currentVerseIndexRef.current = -1;
    stopTts();
  };

  const skipForward = () => {
    if (currentVerseIndexRef.current !== -1 && currentVerseIndexRef.current + 1 < items.length) {
      speakVerse(currentVerseIndexRef.current + 1);
    }
  };

  const skipBackward = () => {
    if (currentVerseIndexRef.current > 0) {
      speakVerse(currentVerseIndexRef.current - 1);
    }
  };

  return {
    isTtsPlaying,
    isTtsPaused,
    ttsActiveVerse,
    ttsLanguage,
    ttsRate,
    ttsVoiceURI,
    filteredVoices,
    setTtsLanguage,
    setTtsRate,
    setTtsVoiceURI,
    startPlayback,
    pausePlayback,
    resumePlayback,
    stopPlayback,
    skipForward,
    skipBackward,
    speakVerse
  };
};
