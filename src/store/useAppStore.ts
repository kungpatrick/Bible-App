import { create } from 'zustand';
import { Verse } from '../types';
import { BIBLE_VERSES, BOOKS, TOPICS, ParsedScripture } from '../data/bibleData';

export type AppTheme = 'light' | 'dark' | 'sepia';
export type AppLayout = 'parallel' | 'english' | 'chinese';
export type FontSize = 'sm' | 'md' | 'lg' | 'xl';
export type SidebarTab = 'commentary' | 'strongs' | 'map' | 'references';

interface AppState {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
  layout: AppLayout;
  setLayout: (layout: AppLayout) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  
  // Scripture Navigation State
  selectedBookId: string;
  selectedChapter: number;
  selectedVerseStart: number;
  selectedVerseEnd: number | null; // Supports multiple verses e.g., John 3:16-18
  setScripture: (bookId: string, chapter: number, verseStart?: number, verseEnd?: number | null) => void;
  
  // Public API Loading State (for verses not locally bundled)
  isLoading: boolean;
  apiVerses: Verse[]; // Keep for compatibility with simple checks
  apiChapters: Record<string, Verse[]>; // Cache for fetched chapters
  fetchError: string | null;
  fetchChapter: (bookId: string, chapter: number) => Promise<void>;
  
  // Multi-Passage Comparison State
  multiPassages: ParsedScripture[] | null;
  setMultiPassages: (passages: ParsedScripture[] | null) => void;

  // Topical Study State
  selectedTopicId: string | null;
  setSelectedTopicId: (topicId: string | null) => void;

  // Search State
  activeSearchQuery: string | null;
  setActiveSearchQuery: (query: string | null) => void;
  
  // Study Panel State
  selectedStrongWordId: string | null;
  setSelectedStrongWordId: (id: string | null) => void;
  activeTab: SidebarTab;
  setActiveTab: (tab: SidebarTab) => void;

  // Text-To-Speech (TTS) State
  isTtsPlaying: boolean;
  isTtsPaused: boolean;
  ttsActiveVerse: { bookId: string; chapter: number; verseNum: number } | null;
  ttsLanguage: 'zh' | 'en';
  ttsRate: number;
  ttsVoiceURI: string | null;
  setTtsPlaying: (playing: boolean) => void;
  setTtsPaused: (paused: boolean) => void;
  setTtsActiveVerse: (activeVerse: { bookId: string; chapter: number; verseNum: number } | null) => void;
  setTtsLanguage: (lang: 'zh' | 'en') => void;
  setTtsRate: (rate: number) => void;
  setTtsVoiceURI: (uri: string | null) => void;
  stopTts: () => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  theme: 'dark', // Slate dark mode by default for high visual excellence
  setTheme: (theme) => {
    // Update HTML class
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark', 'sepia-mode');
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'sepia') {
      root.classList.add('sepia-mode');
    } else {
      root.classList.add('light');
    }
    set({ theme });
  },
  
  layout: 'parallel', // Default layout is side-by-side bilingual
  setLayout: (layout) => set({ layout }),
  
  fontSize: 'md', // Default size
  setFontSize: (fontSize) => set({ fontSize }),
  
  // Start with John 3:16
  selectedBookId: 'JHN',
  selectedChapter: 3,
  selectedVerseStart: 16,
  selectedVerseEnd: null,
  
  isLoading: false,
  apiVerses: [],
  apiChapters: {},
  fetchError: null,
  
  fetchChapter: async (bookId, chapter) => {
    const versesKey = `${bookId}:${chapter}`;
    if (get().apiChapters[versesKey]) return; // already loaded
    
    const book = BOOKS.find(b => b.id.toUpperCase() === bookId.toUpperCase());
    if (!book) return;
    
    set({ isLoading: true, fetchError: null });
    try {
      const bookIdentifier = encodeURIComponent(book.id);
      
      // Fetch English (World English Bible - default on bible-api.com)
      const resEn = await fetch(`https://bible-api.com/${bookIdentifier}+${chapter}?translation=web`);
      if (!resEn.ok) throw new Error(`English translation fetch returned status ${resEn.status}`);
      const dataEn = await resEn.json();
      
      // Fetch Chinese (Chinese Union Version - cuv)
      const resZh = await fetch(`https://bible-api.com/${bookIdentifier}+${chapter}?translation=cuv`);
      if (!resZh.ok) throw new Error(`Chinese translation fetch returned status ${resZh.status}`);
      const dataZh = await resZh.json();
      
      const enVerses = dataEn.verses || [];
      const zhVerses = dataZh.verses || [];
      
      const maxVerseNum = Math.max(
        ...enVerses.map((v: any) => v.verse),
        ...zhVerses.map((v: any) => v.verse),
        0
      );
      
      const combined: Verse[] = [];
      for (let i = 1; i <= maxVerseNum; i++) {
        const enV = enVerses.find((v: any) => v.verse === i);
        const zhV = zhVerses.find((v: any) => v.verse === i);
        
        if (enV || zhV) {
          combined.push({
            number: i,
            textEn: enV ? enV.text.trim() : 'Scripture text not found in English API.',
            textZh: zhV ? zhV.text.trim() : '和合本中未找到此節經文。'
          });
        }
      }
      
      set({ 
        apiChapters: { ...get().apiChapters, [versesKey]: combined },
        apiVerses: combined, // also set for single-chapter compatibility
        isLoading: false, 
        fetchError: null 
      });
    } catch (err: any) {
      console.error("API Fetch Error: ", err);
      set({ 
        fetchError: `Could not load scriptures from the public server. Please check your internet connection. (Error: ${err.message})`, 
        isLoading: false 
      });
    }
  },
  
  setScripture: (bookId, chapter, verseStart = 1, verseEnd = null) => {
    const versesKey = `${bookId}:${chapter}`;
    const hasLocal = !!BIBLE_VERSES[versesKey] && BIBLE_VERSES[versesKey].some(
      v => v.number >= verseStart && (verseEnd === null || v.number <= verseEnd)
    );
    const hasCached = !!get().apiChapters[versesKey];
    
    // Check if the new scripture is still part of the active topic's references
    const activeTopicId = get().selectedTopicId;
    const activeTopic = TOPICS.find(t => t.id === activeTopicId);
    const isStillInTopic = !!activeTopic && activeTopic.references.some(
      ref => ref.bookId === bookId && ref.chapter === chapter
    );

    set({ 
      selectedBookId: bookId, 
      selectedChapter: chapter, 
      selectedVerseStart: verseStart, 
      selectedVerseEnd: verseEnd,
      selectedTopicId: isStillInTopic ? activeTopicId : null,
      multiPassages: null, // Reset multi-passages comparison if user selects single scripture
      activeSearchQuery: null // Reset search query when navigating
    });

    if (!hasLocal && !hasCached) {
      get().fetchChapter(bookId, chapter);
    } else if (hasCached) {
      set({ apiVerses: get().apiChapters[versesKey] });
    }
  },

  multiPassages: null,
  setMultiPassages: (multiPassages) => {
    set({ 
      multiPassages,
      selectedTopicId: multiPassages ? null : get().selectedTopicId, // Only reset if entering comparison mode
      activeSearchQuery: null // Reset search query
    });
  },
    
  selectedTopicId: null,
  setSelectedTopicId: (selectedTopicId) => {
    set({ 
      selectedTopicId,
      multiPassages: null, // Reset comparison when entering topical study
      activeSearchQuery: null // Reset search query
    });
    // When selectedTopicId is set, setScripture will run in the component for the first topic reference.
  },

  activeSearchQuery: null,
  setActiveSearchQuery: (activeSearchQuery) => set({ activeSearchQuery }),
  
  selectedStrongWordId: null,
  setSelectedStrongWordId: (id) => set({ selectedStrongWordId: id }),
  
  activeTab: 'commentary',
  setActiveTab: (activeTab) => set({ activeTab }),

  // TTS implementation
  isTtsPlaying: false,
  isTtsPaused: false,
  ttsActiveVerse: null,
  ttsLanguage: 'zh',
  ttsRate: 1.0,
  ttsVoiceURI: null,
  setTtsPlaying: (isTtsPlaying) => set({ isTtsPlaying }),
  setTtsPaused: (isTtsPaused) => set({ isTtsPaused }),
  setTtsActiveVerse: (ttsActiveVerse) => set({ ttsActiveVerse }),
  setTtsLanguage: (ttsLanguage) => set({ ttsLanguage }),
  setTtsRate: (ttsRate) => set({ ttsRate }),
  setTtsVoiceURI: (ttsVoiceURI) => set({ ttsVoiceURI }),
  stopTts: () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    set({
      isTtsPlaying: false,
      isTtsPaused: false,
      ttsActiveVerse: null,
    });
  },
}));
