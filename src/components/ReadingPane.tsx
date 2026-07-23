import React, { useEffect, useState, useRef } from 'react';
import { useAppStore, FontSize } from '../store/useAppStore';
import { BIBLE_VERSES, BOOKS, TOPICS, getSearchResults } from '../data/bibleData';
import { 
  Sparkles, HelpCircle, ChevronLeft, ChevronRight, Columns,
  Volume2, Play, Pause, Square, SkipForward, SkipBack,
  Search, Book
} from 'lucide-react';
import { useTtsPlayer } from '../hooks/useTtsPlayer';

export const ReadingPane: React.FC = () => {
  const {
    layout,
    fontSize,
    selectedBookId,
    selectedChapter,
    selectedVerseStart,
    selectedVerseEnd,
    setScripture,
    selectedTopicId,
    setSelectedTopicId,
    setSelectedStrongWordId,
    isLoading,
    apiChapters,
    fetchError,
    fetchChapter,
    multiPassages,
    setMultiPassages,
    activeSearchQuery,
    setActiveSearchQuery
  } = useAppStore();

  const activeBook = BOOKS.find(b => b.id === selectedBookId);
  const versesKey = `${selectedBookId}:${selectedChapter}`;

  const [showTtsPanel, setShowTtsPanel] = useState(false);
  const [filterToTopicVerses, setFilterToTopicVerses] = useState(true);

  // Find current topic if in topical mode
  const currentTopic = TOPICS.find(t => t.id === selectedTopicId);
  const topicRef = currentTopic
    ? currentTopic.references.find(ref => ref.bookId === selectedBookId && ref.chapter === selectedChapter)
    : undefined;

  // A chapter is local if we have it in BIBLE_VERSES and we want to view the study verses (filterToTopicVerses is true).
  // If the user chooses to view the "Full Chapter", filterToTopicVerses will be false, so isLocal will be false
  // and we will load the complete chapter from the API.
  const isLocal = !!BIBLE_VERSES[versesKey] && filterToTopicVerses;

  const verses = isLocal ? BIBLE_VERSES[versesKey] : (apiChapters[versesKey] || []);

  // Reset to true whenever topic, book, or chapter changes
  useEffect(() => {
    setFilterToTopicVerses(true);
  }, [selectedTopicId, selectedBookId, selectedChapter]);

  // Compute filtered verses for standard view
  const filteredStandardVerses = React.useMemo(() => {
    if (!verses) return [];
    if (currentTopic && topicRef && filterToTopicVerses) {
      return verses.filter(v => {
        if (topicRef.verseEnd !== null) {
          return v.number >= topicRef.verseStart && v.number <= topicRef.verseEnd;
        }
        return v.number === topicRef.verseStart;
      });
    }
    return verses;
  }, [verses, currentTopic, topicRef, filterToTopicVerses]);

  // Construct list of speakable items for TTS (supports standard and comparison layouts)
  const speakableItems = React.useMemo(() => {
    if (multiPassages) {
      const items: any[] = [];
      multiPassages.forEach(passage => {
        const passageVerses = getVersesForScripture(
          passage.bookId, 
          passage.chapter, 
          passage.verseStart, 
          passage.verseEnd
        );
        const filtered = passageVerses.filter(v => {
          if (passage.verseEnd !== null) {
            return v.number >= passage.verseStart && v.number <= passage.verseEnd;
          }
          return v.number === passage.verseStart;
        });
        filtered.forEach(v => {
          items.push({
            bookId: passage.bookId,
            chapter: passage.chapter,
            verseNum: v.number,
            textZh: v.textZh,
            textEn: v.textEn
          });
        });
      });
      return items;
    } else {
      return filteredStandardVerses.map(v => ({
        bookId: selectedBookId,
        chapter: selectedChapter,
        verseNum: v.number,
        textZh: v.textZh,
        textEn: v.textEn
      }));
    }
  }, [multiPassages, filteredStandardVerses, selectedBookId, selectedChapter, apiChapters]);

  const {
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
  } = useTtsPlayer(speakableItems);

  const ttsStatusText = React.useMemo(() => {
    if (!ttsActiveVerse) return '';
    const bookName = BOOKS.find(b => b.id === ttsActiveVerse.bookId)?.nameZh || ttsActiveVerse.bookId;
    return `${bookName} ${ttsActiveVerse.chapter}:${ttsActiveVerse.verseNum}`;
  }, [ttsActiveVerse]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll active verse into view during TTS playback
  useEffect(() => {
    if (isTtsPlaying && ttsActiveVerse) {
      const key = `${ttsActiveVerse.bookId}:${ttsActiveVerse.chapter}:${ttsActiveVerse.verseNum}`;
      const activeEl = scrollContainerRef.current?.querySelector(`[data-verse-key="${key}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }
  }, [ttsActiveVerse, isTtsPlaying]);

  // Sync panel visibility with TTS play state
  useEffect(() => {
    if (isTtsPlaying) {
      setShowTtsPanel(true);
    }
  }, [isTtsPlaying]);


  // Helper to fetch or read verses for multiple scriptures
  const getVersesForScripture = (bookId: string, chapter: number, verseStart: number, verseEnd: number | null): Verse[] => {
    const key = `${bookId}:${chapter}`;
    const hasLocal = !!BIBLE_VERSES[key] && BIBLE_VERSES[key].some(
      v => v.number >= verseStart && (verseEnd === null || v.number <= verseEnd)
    );
    if (hasLocal) return BIBLE_VERSES[key];
    return apiChapters[key] || [];
  };

  // Auto-fetch chapters for multiple passages if not local and not cached
  useEffect(() => {
    if (multiPassages) {
      multiPassages.forEach(passage => {
        const key = `${passage.bookId}:${passage.chapter}`;
        const hasLocal = !!BIBLE_VERSES[key] && BIBLE_VERSES[key].some(
          v => v.number >= passage.verseStart && (passage.verseEnd === null || v.number <= passage.verseEnd)
        );
        const hasCached = !!apiChapters[key];
        if (!hasLocal && !hasCached && !isLoading) {
          fetchChapter(passage.bookId, passage.chapter);
        }
      });
    }
  }, [multiPassages, apiChapters, isLoading]);

  // Auto-fetch if not local and not yet fetched
  useEffect(() => {
    if (!isLocal && !isLoading && !apiChapters[versesKey] && !fetchError) {
      fetchChapter(selectedBookId, selectedChapter);
    }
  }, [selectedBookId, selectedChapter, isLocal, apiChapters, versesKey]);

  // If in topical mode, synchronize the active scripture with the first reference initially (if not already set)
  useEffect(() => {
    if (currentTopic && currentTopic.references.length > 0) {
      // Check if current book is in the topic references
      const isBookInTopic = currentTopic.references.some(
        ref => ref.bookId === selectedBookId && ref.chapter === selectedChapter
      );
      if (!isBookInTopic) {
        // Automatically load the first reference in the topic list
        const firstRef = currentTopic.references[0];
        setScripture(firstRef.bookId, firstRef.chapter, firstRef.verseStart, firstRef.verseEnd);
      }
    }
  }, [selectedTopicId]);

  // Translate font sizes to Tailwind classes
  const getFontSizeClass = (sz: FontSize) => {
    switch (sz) {
      case 'sm': return 'text-sm leading-relaxed';
      case 'md': return 'text-base sm:text-lg leading-relaxed';
      case 'lg': return 'text-lg sm:text-xl leading-loose';
      case 'xl': return 'text-xl sm:text-2xl leading-loose font-serif';
    }
  };

  const getVerseNumberClass = (sz: FontSize) => {
    switch (sz) {
      case 'sm': return 'text-[9px] mr-1.5';
      case 'md': return 'text-xs mr-2';
      case 'lg': return 'text-sm mr-2.5';
      case 'xl': return 'text-base mr-3';
    }
  };

  // Helper to check if a verse is currently selected/highlighted
  const isVerseHighlighted = (verseNum: number) => {
    if (selectedVerseEnd !== null) {
      return verseNum >= selectedVerseStart && verseNum <= selectedVerseEnd;
    }
    return verseNum === selectedVerseStart;
  };

  // Render text containing clickable Strong's concordance words
  const renderWords = (
    words: { text: string; strongId?: string }[], 
    isChinese: boolean
  ) => {
    return words.map((w, idx) => {
      if (w.strongId) {
        return (
          <span
            key={idx}
            onClick={() => setSelectedStrongWordId(w.strongId!)}
            className="word-highlight border-b border-dashed border-indigo-400 dark:border-indigo-500 font-medium"
            title={`Strong's: ${w.strongId}`}
          >
            {w.text}
          </span>
        );
      }
      return <span key={idx}>{w.text}</span>;
    });
  };

  const handlePrevChapter = () => {
    const bookIndex = BOOKS.findIndex(b => b.id === selectedBookId);
    if (selectedChapter > 1) {
      setScripture(selectedBookId, selectedChapter - 1);
    } else if (bookIndex > 0) {
      const prevBook = BOOKS[bookIndex - 1];
      setScripture(prevBook.id, prevBook.chaptersCount);
    }
  };

  const handleNextChapter = () => {
    const bookIndex = BOOKS.findIndex(b => b.id === selectedBookId);
    if (bookIndex === -1) return;
    const activeBookObj = BOOKS[bookIndex];
    if (selectedChapter < activeBookObj.chaptersCount) {
      setScripture(selectedBookId, selectedChapter + 1);
    } else if (bookIndex < BOOKS.length - 1) {
      const nextBook = BOOKS[bookIndex + 1];
      setScripture(nextBook.id, 1);
    }
  };

  const searchResults = React.useMemo(() => {
    return activeSearchQuery ? getSearchResults(activeSearchQuery, apiChapters) : { topics: [], concepts: [], verses: [] };
  }, [activeSearchQuery, apiChapters]);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 sepia-mode:bg-amber-50 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 sepia-mode:border-card overflow-hidden">
      
      {/* Topical Study Header (If active) */}
      {currentTopic && (
        <div className="p-4 bg-indigo-50/50 dark:bg-indigo-950/20 border-b border-slate-100 dark:border-slate-800 sepia-mode:border-card animate-slide-up">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2">
              <span className="p-1 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                <Sparkles size={16} />
              </span>
              <div>
                <h3 className="font-bold text-sm text-indigo-950 dark:text-indigo-200">
                  Topic | 主題研讀：{currentTopic.titleZh}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                  {currentTopic.titleEn}
                </p>
              </div>
            </div>
            <button 
              onClick={() => setSelectedTopicId(null)}
              className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Exit Topic Mode | 退出主題
            </button>
          </div>
          
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            {currentTopic.descriptionZh}
            <span className="block mt-1 font-sans text-slate-500 dark:text-slate-500 italic">
              {currentTopic.descriptionEn}
            </span>
          </p>

          {/* Gospel Comparison Harmony Tabs */}
          <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 sepia-mode:border-card">
            {currentTopic.references.map((ref, idx) => {
              const bookName = BOOKS.find(b => b.id === ref.bookId);
              const isActive = selectedBookId === ref.bookId && selectedChapter === ref.chapter;
              const labelEn = `${bookName?.nameEn} ${ref.chapter}:${ref.verseStart}-${ref.verseEnd}`;
              const labelZh = `${bookName?.nameZh} ${ref.chapter}:${ref.verseStart}-${ref.verseEnd}`;

              return (
                <button
                  key={idx}
                  onClick={() => setScripture(ref.bookId, ref.chapter, ref.verseStart, ref.verseEnd)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/10'
                      : 'bg-white dark:bg-slate-800 sepia-mode:bg-card border border-slate-200/50 dark:border-slate-700/30 sepia-mode:border-card hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className="block text-[10px] sm:text-xs">{labelZh}</span>
                  <span className={`block text-[8px] font-sans ${isActive ? 'text-indigo-200' : 'text-slate-400'}`}>
                    {labelEn}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Multi-Passage Comparison Header (If active) */}
      {multiPassages && (
        <div className="p-4 bg-violet-50/50 dark:bg-violet-950/20 border-b border-slate-100 dark:border-slate-800 sepia-mode:border-card animate-slide-up">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2">
              <span className="p-1 rounded-md bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400">
                <Columns size={16} />
              </span>
              <div>
                <h3 className="font-bold text-sm text-violet-950 dark:text-violet-200 flex flex-wrap items-center gap-2">
                  <span>Scripture Comparison | 經文對照閱讀</span>
                  <button
                    onClick={() => setShowTtsPanel(!showTtsPanel)}
                    className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border transition-all duration-200 ${
                      showTtsPanel || isTtsPlaying
                        ? 'bg-violet-100 border-violet-200 dark:bg-violet-900/40 dark:border-violet-800/80 text-violet-700 dark:text-violet-300 shadow-sm'
                        : 'bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    <Volume2 size={10} className={isTtsPlaying && !isTtsPaused ? "animate-bounce" : ""} />
                    <span>{isTtsPlaying ? "Listening | 正在朗讀" : "Listen | 語音朗讀"}</span>
                  </button>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                  Displaying {multiPassages.length} passages together
                </p>
              </div>
            </div>
            <button 
              onClick={() => setMultiPassages(null)}
              className="text-[10px] font-bold text-violet-600 dark:text-violet-400 hover:underline"
            >
              Exit Comparison | 退出對照
            </button>
          </div>
        </div>
      )}

      {/* Pinned TTS Player Panel */}
      {showTtsPanel && !isLoading && (
        <div className="p-4 bg-slate-50/95 dark:bg-slate-900/90 border-b border-slate-200/60 dark:border-slate-800/60 space-y-3 animate-slide-up sticky top-16 z-30 shadow-sm sepia-mode:bg-amber-100/50 sepia-mode:border-card">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Playback Control Group */}
            <div className="flex items-center space-x-2">
              <button
                onClick={skipBackward}
                disabled={!isTtsPlaying}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                title="Previous Verse | 上一節"
              >
                <SkipBack size={16} />
              </button>
              
              {isTtsPlaying && !isTtsPaused ? (
                <button
                  onClick={pausePlayback}
                  className="p-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 shadow-md shadow-indigo-500/20 transition-all flex items-center justify-center"
                  title="Pause | 暫停"
                >
                  <Pause size={18} fill="white" />
                </button>
              ) : (
                <button
                  onClick={() => startPlayback()}
                  className="p-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 shadow-md shadow-indigo-500/20 transition-all flex items-center justify-center"
                  title="Play | 播放"
                >
                  <Play size={18} fill="white" />
                </button>
              )}

              <button
                onClick={stopPlayback}
                disabled={!isTtsPlaying}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                title="Stop | 停止"
              >
                <Square size={16} fill={isTtsPlaying ? "currentColor" : "none"} />
              </button>

              <button
                onClick={skipForward}
                disabled={!isTtsPlaying}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                title="Next Verse | 下一節"
              >
                <SkipForward size={16} />
              </button>
            </div>

            {/* Language and Voice Selection */}
            <div className="flex-1 flex flex-wrap items-center gap-3">
              {/* Language Switch */}
              <div className="flex rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 p-0.5 bg-white dark:bg-slate-950">
                <button
                  onClick={() => {
                    setTtsLanguage('zh');
                    // If playing, restart in Chinese
                    if (isTtsPlaying) {
                      setTimeout(() => startPlayback(undefined), 100);
                    }
                  }}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                    ttsLanguage === 'zh'
                      ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-extrabold'
                      : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'
                  }`}
                >
                  中文
                </button>
                <button
                  onClick={() => {
                    setTtsLanguage('en');
                    // If playing, restart in English
                    if (isTtsPlaying) {
                      setTimeout(() => startPlayback(undefined), 100);
                    }
                  }}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                    ttsLanguage === 'en'
                      ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-extrabold'
                      : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 font-sans'
                  }`}
                >
                  English
                </button>
              </div>

              {/* Voice Dropdown */}
              <div className="flex-1 min-w-[150px]">
                <select
                  value={ttsVoiceURI || ''}
                  onChange={(e) => setTtsVoiceURI(e.target.value || null)}
                  className="w-full text-xs bg-white dark:bg-slate-950 border border-slate-200/85 dark:border-slate-800/85 rounded-lg p-2 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  {filteredVoices.length === 0 ? (
                    <option value="">No voices available / 無可用語音</option>
                  ) : (
                    filteredVoices.map((voice) => (
                      <option key={voice.voiceURI} value={voice.voiceURI}>
                        {voice.name} ({voice.lang})
                      </option>
                    ))
                  )}
                </select>
              </div>
            </div>

            {/* Speed Controls and Close */}
            <div className="flex items-center space-x-3">
              {/* Speed Selector */}
              <div className="flex items-center space-x-1">
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">SPEED:</span>
                <select
                  value={ttsRate}
                  onChange={(e) => setTtsRate(parseFloat(e.target.value))}
                  className="text-xs bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-1 text-slate-700 dark:text-slate-300 focus:outline-none"
                >
                  <option value="0.75">0.75x</option>
                  <option value="1.0">1.0x</option>
                  <option value="1.25">1.25x</option>
                  <option value="1.5">1.5x</option>
                  <option value="1.75">1.75x</option>
                  <option value="2.0">2.0x</option>
                </select>
              </div>

              {/* Close Panel Button */}
              <button
                onClick={() => {
                  stopPlayback();
                  setShowTtsPanel(false);
                }}
                className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                title="Close Player | 關閉播放器"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Waveform / Status indicator */}
          {isTtsPlaying && (
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px]">
              <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-medium">
                <span className="flex space-x-0.5 items-center h-3">
                  <span className={`w-0.5 bg-indigo-500 rounded-full ${!isTtsPaused ? 'animate-bounce h-2' : 'h-1'}`} style={{ animationDelay: '0.1s' }}></span>
                  <span className={`w-0.5 bg-indigo-500 rounded-full ${!isTtsPaused ? 'animate-bounce h-3' : 'h-1.5'}`} style={{ animationDelay: '0.3s' }}></span>
                  <span className={`w-0.5 bg-indigo-500 rounded-full ${!isTtsPaused ? 'animate-bounce h-1.5' : 'h-1'}`} style={{ animationDelay: '0.5s' }}></span>
                </span>
                <span>
                  {isTtsPaused
                    ? `Paused at ${ttsStatusText || 'Scripture'} | 暫停`
                    : `Reading ${ttsStatusText || 'Scripture'}... | 正在朗讀`}
                </span>
              </div>
              <button
                onClick={() => {
                  const idx = speakableItems.findIndex(
                    item => item.bookId === ttsActiveVerse?.bookId && 
                           item.chapter === ttsActiveVerse?.chapter && 
                           item.verseNum === ttsActiveVerse?.verseNum
                  );
                  if (idx !== -1) speakVerse(idx);
                }}
                className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-bold transition-colors"
              >
                Replay Verse | 重讀此節
              </button>
            </div>
          )}
        </div>
      )}

      {/* Main Scripture Display Area */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 relative"
      >
        {activeSearchQuery ? (
          /* Search Results Rendering Mode */
          <div className="space-y-6 animate-fade-in pb-12">
            <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <h2 className="text-xl font-bold font-serif text-slate-800 dark:text-slate-100 flex items-center space-x-2">
                  <Search className="text-indigo-500" size={20} />
                  <span>Search Results | 搜尋結果</span>
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Showing results for "{activeSearchQuery}" in study topics and verses
                  <span className="mx-1">•</span> 顯示「{activeSearchQuery}」在主題及經文中的匹配項
                </p>
              </div>
              <button
                onClick={() => setActiveSearchQuery(null)}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
              >
                Exit Search | 退出搜尋
              </button>
            </div>

            {searchResults.topics.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1">
                  <Sparkles size={12} className="text-amber-500" />
                  <span>Matched Study Topics | 匹配的研讀主題 ({searchResults.topics.length})</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {searchResults.topics.map((topic) => (
                    <div 
                      key={topic.id}
                      onClick={() => {
                        setSelectedTopicId(topic.id);
                        setActiveSearchQuery(null);
                      }}
                      className="p-4 rounded-xl border border-slate-200/60 dark:border-slate-800 sepia-mode:border-card bg-slate-50/50 dark:bg-slate-900/30 hover:bg-indigo-50/10 dark:hover:bg-indigo-950/10 cursor-pointer transition-all border-l-4 border-l-indigo-500 shadow-sm"
                    >
                      <div className="font-bold text-slate-800 dark:text-slate-200 text-sm">{topic.titleZh}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{topic.titleEn}</div>
                      <div className="text-[11px] text-slate-400 dark:text-slate-500 mt-2 line-clamp-2">
                        {topic.descriptionZh || topic.descriptionEn}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {searchResults.concepts && searchResults.concepts.length > 0 && (
              <div className="space-y-3 animate-fade-in">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1">
                  <Sparkles size={12} className="text-amber-500" />
                  <span>Key Passages | 關鍵研讀經文 ({searchResults.concepts.length})</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {searchResults.concepts.map((concept, index) => (
                    <div 
                      key={index}
                      onClick={() => {
                        setScripture(concept.bookId, concept.chapter, concept.verseStart, concept.verseEnd);
                        setActiveSearchQuery(null);
                      }}
                      className="p-4 rounded-xl border border-slate-200/60 dark:border-slate-800 sepia-mode:border-card bg-slate-50/50 dark:bg-slate-900/30 hover:bg-amber-50/10 dark:hover:bg-amber-950/10 cursor-pointer transition-all border-l-4 border-l-amber-500 shadow-sm"
                    >
                      <div className="font-bold text-slate-800 dark:text-slate-200 text-sm">{concept.nameZh}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{concept.nameEn}</div>
                      <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-2">
                        <span className="font-semibold text-slate-500 dark:text-slate-400">Keywords:</span> {concept.keywords.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {searchResults.verses.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1">
                  <Book size={12} className="text-indigo-500" />
                  <span>Matched Scripture Verses | 匹配的聖經經文 ({searchResults.verses.length})</span>
                </h3>
                <div className="space-y-3">
                  {searchResults.verses.map((verse, index) => {
                    const highlightText = (text: string, search: string) => {
                      if (!text || !search) return text;
                      const parts = text.split(new RegExp(`(${search})`, 'gi'));
                      return parts.map((part, i) => 
                        part.toLowerCase() === search.toLowerCase() 
                          ? <mark key={i} className="bg-amber-100 dark:bg-amber-950/60 text-slate-900 dark:text-amber-200 px-0.5 rounded font-bold">{part}</mark>
                          : part
                      );
                    };

                    return (
                      <div 
                        key={index}
                        onClick={() => {
                          setScripture(verse.bookId, verse.chapter, verse.verseNum, null);
                          setActiveSearchQuery(null);
                        }}
                        className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/65 bg-white dark:bg-slate-900/10 hover:border-indigo-500/40 dark:hover:border-indigo-500/30 cursor-pointer transition-all shadow-sm group relative"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-serif font-bold text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm">
                            {verse.bookNameZh} / {verse.bookNameEn} {verse.chapter}:{verse.verseNum}
                          </span>
                          <span className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            Go to verse | 前往此節 →
                          </span>
                        </div>
                        <div className="mt-2.5 space-y-1.5 text-xs sm:text-sm leading-relaxed">
                          {(layout === 'parallel' || layout === 'chinese') && (
                            <p className="text-slate-800 dark:text-slate-200 font-serif">
                              {highlightText(verse.textZh, activeSearchQuery)}
                            </p>
                          )}
                          {(layout === 'parallel' || layout === 'english') && (
                            <p className="text-slate-500 dark:text-slate-400">
                              {highlightText(verse.textEn, activeSearchQuery)}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {searchResults.topics.length === 0 && (!searchResults.concepts || searchResults.concepts.length === 0) && searchResults.verses.length === 0 && (
              <div className="text-center py-16 space-y-4">
                <div className="flex justify-center text-slate-300 dark:text-slate-700">
                  <Search size={48} />
                </div>
                <div className="space-y-1 text-slate-500 dark:text-slate-400">
                  <p className="font-bold text-sm">No results found for "{activeSearchQuery}"</p>
                  <p className="text-xs">找不到與「{activeSearchQuery}」相符的主題或經文</p>
                </div>
                <p className="text-[11px] text-slate-400 max-w-sm mx-auto leading-relaxed">
                  Tip: Try searching for keywords like "love", "faith", "痲瘋", "癱子", or specific book references like "約翰福音 3" or "Gen 1:1".
                </p>
              </div>
            )}
          </div>
        ) : multiPassages ? (
          /* Multi-Passage Comparison Render Mode */
          <div className="space-y-6">
            {multiPassages.map((passage, pIdx) => {
              const book = BOOKS.find(b => b.id === passage.bookId);
              if (!book) return null;
              
              const passageVerses = getVersesForScripture(
                passage.bookId, 
                passage.chapter, 
                passage.verseStart, 
                passage.verseEnd
              );
              
              // Filter verses based on verseStart / verseEnd
              const filteredVerses = passageVerses.filter(v => {
                if (passage.verseEnd !== null) {
                  return v.number >= passage.verseStart && v.number <= passage.verseEnd;
                }
                return v.number === passage.verseStart;
              });

              return (
                <div key={pIdx} className="border border-slate-200/60 dark:border-slate-800 sepia-mode:border-card rounded-2xl overflow-hidden bg-slate-50/10 dark:bg-slate-900/10 shadow-sm animate-fade-in">
                  {/* Passage Card Title Header */}
                  <div className="px-4 py-3 bg-slate-100/50 dark:bg-slate-950/40 sepia-mode:bg-card border-b border-slate-100 dark:border-slate-800/80 sepia-mode:border-card flex justify-between items-center">
                    <span className="font-serif font-bold text-slate-800 dark:text-slate-200 text-sm sm:text-base">
                      {layout === 'chinese' 
                        ? `${book.nameZh} ${passage.chapter}:${passage.verseStart}${passage.verseEnd ? `-${passage.verseEnd}` : ''}` 
                        : layout === 'english'
                          ? `${book.nameEn} ${passage.chapter}:${passage.verseStart}${passage.verseEnd ? `-${passage.verseEnd}` : ''}`
                          : `${book.nameZh} / ${book.nameEn} ${passage.chapter}:${passage.verseStart}${passage.verseEnd ? `-${passage.verseEnd}` : ''}`}
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-slate-200/50 dark:bg-slate-800/60 px-2 py-0.5 rounded">
                      Passage {pIdx + 1}
                    </span>
                  </div>
                  
                  {/* Passage Card Content */}
                  <div className="p-4 space-y-4">
                    {filteredVerses.length === 0 ? (
                      <div className="text-center py-8 text-xs text-slate-400 dark:text-slate-500 animate-pulse">
                        {isLoading ? 'Loading translation...' : 'Scripture not found.'}
                      </div>
                    ) : (
                      filteredVerses.map((verse) => {
                        const isTtsActiveVerse = isTtsPlaying && 
                          ttsActiveVerse?.bookId === passage.bookId &&
                          ttsActiveVerse?.chapter === passage.chapter &&
                          ttsActiveVerse?.verseNum === verse.number;
                        
                        return (
                          <div 
                            key={verse.number}
                            data-verse-key={`${passage.bookId}:${passage.chapter}:${verse.number}`}
                            className={`p-3 rounded-xl border transition-all duration-300 flex flex-col space-y-2 cursor-pointer ${
                              isTtsActiveVerse 
                                ? 'border-emerald-500 bg-emerald-50/10 dark:bg-emerald-950/10 shadow-sm ring-1 ring-emerald-500/20' 
                                : 'border-slate-100 dark:border-slate-800/40 hover:bg-slate-50/20 dark:hover:bg-slate-800/10'
                            }`}
                            onClick={() => {
                              const idx = speakableItems.findIndex(
                                item => item.bookId === passage.bookId && 
                                       item.chapter === passage.chapter && 
                                       item.verseNum === verse.number
                              );
                              if (idx !== -1) {
                                if (isTtsPlaying) {
                                  speakVerse(idx);
                                } else {
                                  startPlayback(idx);
                                }
                              }
                            }}
                          >
                            {/* Verse Label */}
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded w-fit flex items-center gap-1 ${
                              isTtsActiveVerse 
                                ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-extrabold' 
                                : 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-500 dark:text-indigo-400'
                            }`}>
                              {isTtsActiveVerse && <Volume2 size={10} className="animate-pulse" />}
                              <span>Verse {verse.number}</span>
                            </span>
                            
                            {/* Parallel Columns */}
                            {layout === 'parallel' && (
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-start">
                                <p className={`${getFontSizeClass(fontSize)} font-sans text-slate-800 dark:text-slate-200 sepia-mode:text-amber-950`}>
                                  {verse.wordsZh ? renderWords(verse.wordsZh, true) : verse.textZh}
                                </p>
                                <p className={`${getFontSizeClass(fontSize)} font-serif text-slate-700 dark:text-slate-300 sepia-mode:text-amber-900 lg:border-l lg:border-slate-100 lg:dark:border-slate-800/40 lg:sepia-mode:border-card lg:pl-6`}>
                                  {verse.wordsEn ? renderWords(verse.wordsEn, false) : verse.textEn}
                                </p>
                              </div>
                            )}

                            {layout === 'chinese' && (
                              <p className={`${getFontSizeClass(fontSize)} font-sans text-slate-800 dark:text-slate-200 sepia-mode:text-amber-950`}>
                                {verse.wordsZh ? renderWords(verse.wordsZh, true) : verse.textZh}
                              </p>
                            )}

                            {layout === 'english' && (
                              <p className={`${getFontSizeClass(fontSize)} font-serif text-slate-700 dark:text-slate-300 sepia-mode:text-amber-900`}>
                                {verse.wordsEn ? renderWords(verse.wordsEn, false) : verse.textEn}
                              </p>
                            )}
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Standard Single Chapter Reader Mode */
          <>
            {/* Book & Chapter Title Banner */}
            {activeBook && !isLoading && (
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 sepia-mode:border-card pb-5 mb-8">
                <button
                  onClick={handlePrevChapter}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 sepia-mode:hover:bg-amber-100/50 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shrink-0"
                  title={layout === 'chinese' ? '上一章' : 'Previous Chapter'}
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="text-center space-y-1 flex flex-col items-center">
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-slate-50 sepia-mode:text-amber-950">
                    {layout === 'chinese' 
                      ? `${activeBook.nameZh} 第 ${selectedChapter} 章` 
                      : layout === 'english' 
                        ? `${activeBook.nameEn} ${selectedChapter}` 
                        : `${activeBook.nameZh} ${selectedChapter}`}
                  </h1>
                  {layout === 'parallel' && (
                    <p className="text-xs sm:text-sm font-sans tracking-wide text-slate-400 dark:text-slate-500 sepia-mode:text-muted uppercase">
                      {activeBook.nameEn} Chapter {selectedChapter}
                    </p>
                  )}
                  <button
                    onClick={() => setShowTtsPanel(!showTtsPanel)}
                    className={`mt-2.5 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-200 ${
                      showTtsPanel || isTtsPlaying
                        ? 'bg-indigo-50 border-indigo-200 dark:bg-indigo-950/40 dark:border-indigo-800/80 text-indigo-600 dark:text-indigo-400 shadow-sm'
                        : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    <Volume2 size={13} className={isTtsPlaying && !isTtsPaused ? "animate-bounce" : ""} />
                    <span>{isTtsPlaying ? "Listening | 正在朗讀" : "Listen | 語音朗讀"}</span>
                  </button>
                </div>
                <button
                  onClick={handleNextChapter}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 sepia-mode:hover:bg-amber-100/50 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shrink-0"
                  title={layout === 'chinese' ? '下一章' : 'Next Chapter'}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}

            {((currentTopic && topicRef) || !!BIBLE_VERSES[versesKey]) && !isLoading && !fetchError && verses.length > 0 && (
              <div className="flex items-center justify-center space-x-2 mb-6 animate-fade-in">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 sepia-mode:text-amber-900/70">
                  Reading Mode | 閱讀模式：
                </span>
                <div className="flex p-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 sepia-mode:bg-amber-100 border border-slate-200/50 dark:border-slate-700/50 sepia-mode:border-card">
                  <button
                    onClick={() => setFilterToTopicVerses(true)}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                      filterToTopicVerses
                        ? 'bg-white dark:bg-slate-700 sepia-mode:bg-card text-indigo-600 dark:text-indigo-400 shadow-sm font-extrabold'
                        : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'
                    }`}
                  >
                    {currentTopic && topicRef 
                      ? `Topic Verses Only | 僅看主題經文 (${topicRef.verseStart}${topicRef.verseEnd ? `-${topicRef.verseEnd}` : ''})` 
                      : 'Study Verses Only | 僅看研讀經文'}
                  </button>
                  <button
                    onClick={() => setFilterToTopicVerses(false)}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                      !filterToTopicVerses
                        ? 'bg-white dark:bg-slate-700 sepia-mode:bg-card text-indigo-600 dark:text-indigo-400 shadow-sm font-extrabold'
                        : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'
                    }`}
                  >
                    Full Chapter | 完整章節
                  </button>
                </div>
              </div>
            )}

            {/* Loading Spinner */}
            {isLoading ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/70 dark:bg-slate-900/70 sepia-mode:bg-amber-50/70 z-20 space-y-3 animate-fade-in">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 sepia-mode:text-muted">
                  Loading scripture from public server...
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500">
                  正在從公開伺服器下載聖經經文...
                </span>
              </div>
            ) : fetchError ? (
              /* Error State */
              <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-red-50 dark:bg-red-950/20 text-red-500 flex items-center justify-center text-xl font-bold">
                  ⚠
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                  Failed to load scripture | 下載經文失敗
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md leading-relaxed px-4">
                  {fetchError}
                </p>
                <button
                  onClick={() => fetchChapter(selectedBookId, selectedChapter)}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shadow transition-colors"
                >
                  Retry Connection | 重新連線
                </button>
              </div>
            ) : filteredStandardVerses.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center space-y-3">
                <HelpCircle size={40} className="text-slate-300 dark:text-slate-600" />
                <h3 className="font-semibold text-slate-700 dark:text-slate-300">
                  Scripture segment not found
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 max-w-sm">
                  We currently bundle Genesis 1, Psalms 23, John 1, John 3, and the healing miracles in Matthew 9, Mark 2, and Luke 5. Use search or quick navigation to load them!
                </p>
              </div>
            ) : (
              /* Verses List */
              <div className="space-y-4">
                {filteredStandardVerses.map((v) => {
                  const highlighted = isVerseHighlighted(v.number);
                  const isTtsActiveVerse = isTtsPlaying && 
                    ttsActiveVerse?.bookId === selectedBookId &&
                    ttsActiveVerse?.chapter === selectedChapter &&
                    ttsActiveVerse?.verseNum === v.number;
                  
                  return (
                    <div 
                      key={v.number}
                      data-verse-key={`${selectedBookId}:${selectedChapter}:${v.number}`}
                      className={`p-3 sm:p-4 rounded-xl border transition-all duration-300 ${
                        isTtsActiveVerse
                          ? 'border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/20 ring-1 ring-emerald-500/20 shadow-sm'
                          : highlighted 
                            ? 'border-indigo-500/50 bg-indigo-50/20 dark:bg-indigo-950/10 ring-1 ring-indigo-400/20'
                            : 'border-transparent hover:bg-slate-50/30 dark:hover:bg-slate-800/10'
                      }`}
                      onClick={() => {
                        setScripture(selectedBookId, selectedChapter, v.number, selectedVerseEnd);
                        // If TTS is already playing, jump straight to reading this verse!
                        if (isTtsPlaying) {
                          const idx = speakableItems.findIndex(
                            item => item.bookId === selectedBookId && 
                                   item.chapter === selectedChapter && 
                                   item.verseNum === v.number
                          );
                          if (idx !== -1) {
                            speakVerse(idx);
                          }
                        }
                      }}
                    >
                      
                      {/* Layout selector checks */}
                      {layout === 'parallel' && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-start">
                          {/* Chinese Translation Column (CUV) */}
                          <div className="flex items-start">
                            {isTtsActiveVerse ? (
                              <Volume2 size={12} className="text-emerald-500 dark:text-emerald-400 animate-pulse mr-1.5 mt-1 shrink-0" />
                            ) : (
                              <sup className={`font-bold font-sans select-none shrink-0 ${getVerseNumberClass(fontSize)} ${highlighted ? 'text-indigo-600 dark:text-indigo-400 font-extrabold' : 'text-slate-400'}`}>
                                {v.number}
                              </sup>
                            )}
                            <p className={`${getFontSizeClass(fontSize)} font-sans text-slate-800 dark:text-slate-200 sepia-mode:text-amber-950`}>
                              {v.wordsZh ? renderWords(v.wordsZh, true) : v.textZh}
                            </p>
                          </div>

                          {/* English Translation Column (ESV/NIV) */}
                          <div className="flex items-start lg:border-l lg:border-slate-100 lg:dark:border-slate-800/40 lg:sepia-mode:border-card lg:pl-6">
                            {isTtsActiveVerse ? (
                              <Volume2 size={12} className="text-emerald-500 dark:text-emerald-400 animate-pulse mr-1.5 mt-1 shrink-0 lg:hidden" />
                            ) : (
                              <sup className={`font-bold font-sans select-none shrink-0 lg:hidden ${getVerseNumberClass(fontSize)} ${highlighted ? 'text-indigo-600 dark:text-indigo-400 font-extrabold' : 'text-slate-400'}`}>
                                {v.number}
                              </sup>
                            )}
                            <p className={`${getFontSizeClass(fontSize)} font-serif text-slate-700 dark:text-slate-300 sepia-mode:text-amber-900`}>
                              {v.wordsEn ? renderWords(v.wordsEn, false) : v.textEn}
                            </p>
                          </div>
                        </div>
                      )}

                      {layout === 'chinese' && (
                        <div className="flex items-start">
                          {isTtsActiveVerse ? (
                            <Volume2 size={12} className="text-emerald-500 dark:text-emerald-400 animate-pulse mr-1.5 mt-1 shrink-0" />
                          ) : (
                            <sup className={`font-bold font-sans select-none shrink-0 ${getVerseNumberClass(fontSize)} ${highlighted ? 'text-indigo-600 dark:text-indigo-400 font-extrabold' : 'text-slate-400'}`}>
                              {v.number}
                            </sup>
                          )}
                          <p className={`${getFontSizeClass(fontSize)} font-sans text-slate-800 dark:text-slate-200 sepia-mode:text-amber-950`}>
                            {v.wordsZh ? renderWords(v.wordsZh, true) : v.textZh}
                          </p>
                        </div>
                      )}

                      {layout === 'english' && (
                        <div className="flex items-start">
                          {isTtsActiveVerse ? (
                            <Volume2 size={12} className="text-emerald-500 dark:text-emerald-400 animate-pulse mr-1.5 mt-1 shrink-0" />
                          ) : (
                            <sup className={`font-bold font-sans select-none shrink-0 ${getVerseNumberClass(fontSize)} ${highlighted ? 'text-indigo-600 dark:text-indigo-400 font-extrabold' : 'text-slate-400'}`}>
                              {v.number}
                            </sup>
                          )}
                          <p className={`${getFontSizeClass(fontSize)} font-serif text-slate-700 dark:text-slate-300 sepia-mode:text-amber-900`}>
                            {v.wordsEn ? renderWords(v.wordsEn, false) : v.textEn}
                          </p>
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>

      {/* Pane Footer metadata */}
      <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800 sepia-mode:border-card flex justify-between items-center text-[10px] text-slate-400 dark:text-slate-500 bg-slate-50/50 dark:bg-slate-950/20">
        <div>
          {isLocal ? (
            <span>Source: <strong className="text-slate-500 dark:text-slate-400">Local Study Database (CUV / ESV Parallel)</strong></span>
          ) : (
            <span>Source: <strong className="text-slate-500 dark:text-slate-400">Public API Server (CUV Traditional / WEB Parallel)</strong></span>
          )}
        </div>
        <div>
          {isLocal ? "Click words for Strong's analysis" : "Standard Scripture Reading"}
        </div>
      </div>

    </div>
  );
};
