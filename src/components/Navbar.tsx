import React, { useState, useRef, useEffect } from 'react';
import { useAppStore, AppTheme, AppLayout, FontSize } from '../store/useAppStore';
import { 
  getSearchSuggestions, 
  parseScriptureSearch, 
  BOOKS, 
  TOPICS 
} from '../data/bibleData';
import { Search, Sun, Moon, BookOpen, Columns, Type, Sparkles, Book, Compass, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { SearchSuggestion } from '../types';

export const Navbar: React.FC = () => {
  const { 
    theme, setTheme, 
    layout, setLayout, 
    fontSize, setFontSize, 
    setScripture, 
    setSelectedTopicId,
    selectedBookId,
    selectedChapter,
    setMultiPassages,
    setActiveSearchQuery
  } = useAppStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showBookDropdown, setShowBookDropdown] = useState(false);
  const [showChapterDropdown, setShowChapterDropdown] = useState(false);
  const [showTopicDropdown, setShowTopicDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const bookDropdownRef = useRef<HTMLDivElement>(null);
  const chapterDropdownRef = useRef<HTMLDivElement>(null);
  const topicDropdownRef = useRef<HTMLDivElement>(null);
  const settingsDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
      if (bookDropdownRef.current && !bookDropdownRef.current.contains(e.target as Node)) {
        setShowBookDropdown(false);
      }
      if (chapterDropdownRef.current && !chapterDropdownRef.current.contains(e.target as Node)) {
        setShowChapterDropdown(false);
      }
      if (topicDropdownRef.current && !topicDropdownRef.current.contains(e.target as Node)) {
        setShowTopicDropdown(false);
      }
      if (settingsDropdownRef.current && !settingsDropdownRef.current.contains(e.target as Node)) {
        setShowSettingsDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim()) {
      setSuggestions(getSearchSuggestions(val));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const executeSearch = (query: string) => {
    const parsed = parseScriptureSearch(query);
    if (parsed && parsed.length > 0) {
      if (parsed.length === 1) {
        setScripture(parsed[0].bookId, parsed[0].chapter, parsed[0].verseStart, parsed[0].verseEnd);
        setMultiPassages(null);
      } else {
        setMultiPassages(parsed);
      }
      setSearchQuery('');
      setShowSuggestions(false);
      return;
    }

    // Check if it matches a topic ID directly
    const matchedTopic = TOPICS.find(t => t.id === query || t.titleEn.toLowerCase() === query.toLowerCase());
    if (matchedTopic) {
      setSelectedTopicId(matchedTopic.id);
      setMultiPassages(null);
      setSearchQuery('');
      setShowSuggestions(false);
      return;
    }

    // Default: treat as a full-text keyword search (Google-style)
    setActiveSearchQuery(query);
    setSearchQuery('');
    setShowSuggestions(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      executeSearch(searchQuery);
    }
  };

  const handleSuggestionClick = (sug: SearchSuggestion) => {
    if (sug.type === 'topic') {
      setSelectedTopicId(sug.value);
    } else {
      executeSearch(sug.value);
    }
    setSearchQuery('');
    setShowSuggestions(false);
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

  // Helper to find the active book label
  const activeBook = BOOKS.find(b => b.id === selectedBookId);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 sepia-mode:border-card glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-2 shrink-0">
            <span className="flex items-center justify-center h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-500/20">
              <BookOpen size={20} />
            </span>
            <div className="hidden lg:block leading-tight">
              <span className="font-serif font-bold text-slate-900 dark:text-slate-50 sepia-mode:text-amber-950 block text-[15px]">
                Bilingual Study Bible
              </span>
              <span className="font-sans text-[11px] font-semibold text-slate-500 dark:text-slate-400 sepia-mode:text-muted tracking-wider block uppercase">
                雙語研讀聖經
              </span>
            </div>
          </div>

          {/* Quick Nav / Dropdowns */}
          <div className="flex items-center space-x-2">
            
            {/* Unified Scripture Navigator Pill */}
            <div className="flex items-center space-x-0.5 border border-slate-200/60 dark:border-slate-800/85 sepia-mode:border-card rounded-lg bg-slate-100/80 dark:bg-slate-900/60 sepia-mode:bg-card p-0.5 shadow-sm">
              {/* Prev Chapter Button */}
              <button 
                onClick={handlePrevChapter}
                className="p-1.5 rounded-md text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-slate-800 transition-all shrink-0"
                title={layout === 'chinese' ? '上一章' : 'Previous Chapter'}
              >
                <ChevronLeft size={14} />
              </button>

              {/* Book Selector Dropdown */}
              <div className="relative" ref={bookDropdownRef}>
                <button 
                  onClick={() => {
                    setShowBookDropdown(!showBookDropdown);
                    setShowChapterDropdown(false);
                    setShowTopicDropdown(false);
                    setShowSettingsDropdown(false);
                  }}
                  className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-md text-xs font-bold transition-all whitespace-nowrap ${
                    showBookDropdown 
                      ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                      : 'text-slate-800 dark:text-slate-200 sepia-mode:text-amber-900 hover:bg-white/60 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <Book size={13} className="text-indigo-500" />
                  <span>
                    {activeBook ? activeBook.nameZh : 'Select Book'}
                  </span>
                  <ChevronDown size={10} className="text-slate-400" />
                </button>

                {showBookDropdown && (
                  <div className="absolute left-0 mt-2 w-72 rounded-xl border border-slate-100 dark:border-slate-800 sepia-mode:border-card bg-white dark:bg-slate-900 sepia-mode:bg-amber-50 shadow-xl p-3 z-50 animate-slide-up grid grid-cols-2 gap-1.5 max-h-96 overflow-y-auto">
                    <span className="col-span-2 text-[9px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
                      Books | 聖經書卷
                    </span>
                    {BOOKS.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => {
                          setScripture(b.id, 1);
                          setShowBookDropdown(false);
                        }}
                        className={`text-left p-2 rounded-lg text-xs transition-colors flex flex-col ${
                          selectedBookId === b.id
                            ? 'bg-indigo-500 text-white'
                            : 'hover:bg-slate-100 dark:hover:bg-slate-800/80 sepia-mode:hover:bg-amber-100/50 text-slate-700 dark:text-slate-300 sepia-mode:text-amber-950'
                        }`}
                      >
                        <span className="font-semibold">{b.nameZh}</span>
                        <span className={`text-[10px] ${selectedBookId === b.id ? 'text-indigo-100' : 'text-slate-400 dark:text-slate-500'}`}>
                          {b.nameEn}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Chapter Selector Dropdown */}
              {activeBook && (
                <div className="relative border-l border-slate-200/80 dark:border-slate-800/80 sepia-mode:border-card pl-0.5" ref={chapterDropdownRef}>
                  <button 
                    onClick={() => {
                      setShowChapterDropdown(!showChapterDropdown);
                      setShowBookDropdown(false);
                      setShowTopicDropdown(false);
                      setShowSettingsDropdown(false);
                    }}
                    className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-md text-xs font-bold transition-all whitespace-nowrap ${
                      showChapterDropdown 
                        ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                        : 'text-slate-800 dark:text-slate-200 sepia-mode:text-amber-900 hover:bg-white/60 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{layout === 'chinese' ? `第 ${selectedChapter} 章` : `Ch. ${selectedChapter}`}</span>
                    <ChevronDown size={10} className="text-slate-400" />
                  </button>

                  {showChapterDropdown && (
                    <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 rounded-xl border border-slate-100 dark:border-slate-800 sepia-mode:border-card bg-white dark:bg-slate-900 sepia-mode:bg-amber-50 shadow-xl p-3 z-50 animate-slide-up max-h-80 overflow-y-auto">
                      <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider px-1.5 mb-2">
                        Chapters | 選擇章節
                      </span>
                      <div className="grid grid-cols-5 gap-1.5">
                        {Array.from({ length: activeBook.chaptersCount }, (_, i) => i + 1).map((ch) => (
                          <button
                            key={ch}
                            onClick={() => {
                              setScripture(selectedBookId, ch);
                              setShowChapterDropdown(false);
                            }}
                            className={`p-2 rounded-lg text-center text-xs font-bold transition-colors ${
                              selectedChapter === ch
                                ? 'bg-indigo-500 text-white'
                                : 'hover:bg-slate-100 dark:hover:bg-slate-800 sepia-mode:hover:bg-amber-100/50 text-slate-700 dark:text-slate-300 sepia-mode:text-amber-950 bg-slate-50 dark:bg-slate-950/20'
                            }`}
                          >
                            {ch}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Next Chapter Button */}
              <button 
                onClick={handleNextChapter}
                className="p-1.5 rounded-md text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-slate-800 transition-all shrink-0"
                title={layout === 'chinese' ? '下一章' : 'Next Chapter'}
              >
                <ChevronRight size={14} />
              </button>
            </div>

            {/* Topics Dropdown */}
            <div className="relative" ref={topicDropdownRef}>
              <button 
                onClick={() => {
                  setShowTopicDropdown(!showTopicDropdown);
                  setShowBookDropdown(false);
                  setShowChapterDropdown(false);
                  setShowSettingsDropdown(false);
                }}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800/60 sepia-mode:bg-card border border-slate-200/50 dark:border-slate-700/30 sepia-mode:border-card hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                <Compass size={14} className="text-slate-400" />
                <span className="text-slate-800 dark:text-slate-200 sepia-mode:text-amber-900 hidden sm:inline">
                  Topics | 主題研讀
                </span>
                <ChevronDown size={12} className="text-slate-400" />
              </button>

              {showTopicDropdown && (
                <div className="absolute left-0 mt-2 w-80 rounded-xl border border-slate-100 dark:border-slate-800 sepia-mode:border-card bg-white dark:bg-slate-900 sepia-mode:bg-amber-50 shadow-xl p-3 z-50 animate-slide-up flex flex-col max-h-[460px]">
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider px-2 pb-2 border-b border-slate-100 dark:border-slate-800 sepia-mode:border-card shrink-0">
                    Study Topics | 主題研讀索引
                  </span>
                  <div className="overflow-y-auto flex-1 mt-2 pr-1 space-y-1">
                    {TOPICS.map((topic) => (
                      <button
                        key={topic.id}
                        onClick={() => {
                          setSelectedTopicId(topic.id);
                          setShowTopicDropdown(false);
                        }}
                        className="w-full text-left p-2.5 rounded-lg text-xs hover:bg-slate-100 dark:hover:bg-slate-800 sepia-mode:hover:bg-amber-100/50 transition-colors text-slate-700 dark:text-slate-300 sepia-mode:text-amber-950"
                      >
                        <div className="font-semibold flex items-center space-x-1">
                          <Sparkles size={12} className="text-amber-500" />
                          <span>{topic.titleZh}</span>
                        </div>
                        <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 pl-3.5">
                          {topic.titleEn}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search Bar in center/right */}
          <div className="flex-1 max-w-sm relative" ref={searchRef}>
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search verse or topic... (e.g. John 3:16-18, 癱子)"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => setShowSuggestions(true)}
                  className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 sepia-mode:border-card bg-slate-50 dark:bg-slate-950 sepia-mode:bg-amber-100/30 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1.5 focus:ring-indigo-500 transition-all placeholder-slate-400 dark:placeholder-slate-500"
                />
              </div>
            </form>

            {/* Search Autocomplete Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute right-0 left-0 mt-2 rounded-xl border border-slate-100 dark:border-slate-800 sepia-mode:border-card bg-white dark:bg-slate-900 sepia-mode:bg-amber-50 shadow-xl overflow-hidden z-50 animate-slide-up divide-y divide-slate-100 dark:divide-slate-800 sepia-mode:divide-card">
                {suggestions.map((sug, i) => (
                  <button
                    key={i}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      handleSuggestionClick(sug);
                    }}
                    className="w-full text-left p-3 hover:bg-slate-50 dark:hover:bg-slate-800/40 sepia-mode:hover:bg-amber-100/50 transition-colors flex justify-between items-start text-xs"
                  >
                    <div className="space-y-0.5">
                      <div className="font-semibold text-slate-800 dark:text-slate-200 sepia-mode:text-amber-950">
                        {sug.labelZh}
                      </div>
                      <div className="text-[10px] text-slate-400 dark:text-slate-500">
                        {sug.labelEn}
                      </div>
                    </div>
                    {sug.detailsEn && (
                      <div className="text-right shrink-0 pl-2">
                        <span className="text-[10px] text-indigo-500 dark:text-indigo-400 block font-semibold">
                          {sug.detailsZh}
                        </span>
                        <span className="text-[9px] text-slate-400 dark:text-slate-500 block">
                          {sug.detailsEn}
                        </span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick controls (Layout, Size, Theme) */}
          <div className="flex items-center space-x-1.5 shrink-0">
            {/* Layout Toggles */}
            <div className="hidden sm:flex border border-slate-200/50 dark:border-slate-700/30 sepia-mode:border-card rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800/40 sepia-mode:bg-card p-0.5">
              {(['parallel', 'chinese', 'english'] as AppLayout[]).map((lay) => (
                <button
                  key={lay}
                  onClick={() => setLayout(lay)}
                  className={`p-1.5 rounded-md text-[10px] font-bold capitalize transition-all ${
                    layout === lay
                      ? 'bg-white dark:bg-slate-700 sepia-mode:bg-amber-100/80 text-slate-900 dark:text-white sepia-mode:text-amber-950 shadow-sm'
                      : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                  }`}
                  title={`${lay} layout`}
                >
                  {lay === 'parallel' && <Columns size={13} />}
                  {lay === 'chinese' && <span className="px-0.5">中</span>}
                  {lay === 'english' && <span className="px-0.5">EN</span>}
                </button>
              ))}
            </div>

            {/* Font Size Toggle */}
            <div className="hidden sm:flex border border-slate-200/50 dark:border-slate-700/30 sepia-mode:border-card rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800/40 sepia-mode:bg-card p-0.5">
              {(['sm', 'md', 'lg', 'xl'] as FontSize[]).map((sz) => (
                <button
                  key={sz}
                  onClick={() => setFontSize(sz)}
                  className={`px-1.5 py-1 rounded-md text-[10px] font-bold uppercase transition-all ${
                    fontSize === sz
                      ? 'bg-white dark:bg-slate-700 sepia-mode:bg-amber-100/80 text-slate-900 dark:text-white sepia-mode:text-amber-950 shadow-sm'
                      : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                  }`}
                  title={`font size ${sz}`}
                >
                  <span className={sz === 'sm' ? 'text-[9px]' : sz === 'md' ? 'text-xs' : sz === 'lg' ? 'text-sm' : 'text-base font-extrabold'}>
                    A
                  </span>
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <div className="hidden sm:flex border border-slate-200/50 dark:border-slate-700/30 sepia-mode:border-card rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800/40 sepia-mode:bg-card p-0.5">
              {(['light', 'dark', 'sepia'] as AppTheme[]).map((th) => (
                <button
                  key={th}
                  onClick={() => setTheme(th)}
                  className={`p-1.5 rounded-md text-[10px] font-bold capitalize transition-all ${
                    theme === th
                      ? 'bg-white dark:bg-slate-700 sepia-mode:bg-amber-100/80 text-slate-900 dark:text-white sepia-mode:text-amber-950 shadow-sm'
                      : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                  }`}
                  title={`${th} theme`}
                >
                  {th === 'light' && <Sun size={13} />}
                  {th === 'dark' && <Moon size={13} />}
                  {th === 'sepia' && <span className="text-[10px]">Sep</span>}
                </button>
              ))}
            </div>

            {/* Mobile Settings Button */}
            <div className="relative sm:hidden" ref={settingsDropdownRef}>
              <button
                onClick={() => {
                  setShowSettingsDropdown(!showSettingsDropdown);
                  setShowBookDropdown(false);
                  setShowChapterDropdown(false);
                  setShowTopicDropdown(false);
                }}
                className={`p-2 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800/60 sepia-mode:bg-card border border-slate-200/50 dark:border-slate-700/30 sepia-mode:border-card hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors flex items-center justify-center ${
                  showSettingsDropdown 
                    ? 'bg-white dark:bg-slate-700 sepia-mode:bg-amber-100/80 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'
                }`}
                title="Settings | 設定"
              >
                <Type size={14} />
              </button>

              {showSettingsDropdown && (
                <div className="absolute right-0 mt-2 w-64 rounded-xl border border-slate-100 dark:border-slate-800 sepia-mode:border-card bg-white dark:bg-slate-900 sepia-mode:bg-amber-50 shadow-xl p-4 z-50 animate-slide-up flex flex-col space-y-4">
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Layout | 版面
                    </span>
                    <div className="flex border border-slate-200/50 dark:border-slate-700/30 sepia-mode:border-card rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800/40 sepia-mode:bg-card p-0.5 w-full">
                      {(['parallel', 'chinese', 'english'] as AppLayout[]).map((lay) => (
                        <button
                          key={lay}
                          onClick={() => setLayout(lay)}
                          className={`flex-1 py-1.5 rounded-md text-[10px] font-bold capitalize transition-all ${
                            layout === lay
                              ? 'bg-white dark:bg-slate-700 sepia-mode:bg-amber-100/80 text-slate-900 dark:text-white sepia-mode:text-amber-950 shadow-sm'
                              : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                          }`}
                        >
                          {lay === 'parallel' ? 'Both' : lay === 'chinese' ? '中' : 'EN'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Font Size | 字型
                    </span>
                    <div className="flex border border-slate-200/50 dark:border-slate-700/30 sepia-mode:border-card rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800/40 sepia-mode:bg-card p-0.5 w-full">
                      {(['sm', 'md', 'lg', 'xl'] as FontSize[]).map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setFontSize(sz)}
                          className={`flex-1 py-1.5 rounded-md text-[10px] font-bold uppercase transition-all ${
                            fontSize === sz
                              ? 'bg-white dark:bg-slate-700 sepia-mode:bg-amber-100/80 text-slate-900 dark:text-white sepia-mode:text-amber-950 shadow-sm'
                              : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Theme | 主題
                    </span>
                    <div className="flex border border-slate-200/50 dark:border-slate-700/30 sepia-mode:border-card rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800/40 sepia-mode:bg-card p-0.5 w-full">
                      {(['light', 'dark', 'sepia'] as AppTheme[]).map((th) => (
                        <button
                          key={th}
                          onClick={() => setTheme(th)}
                          className={`flex-1 py-1.5 rounded-md text-[10px] font-bold capitalize transition-all ${
                            theme === th
                              ? 'bg-white dark:bg-slate-700 sepia-mode:bg-amber-100/80 text-slate-900 dark:text-white sepia-mode:text-amber-950 shadow-sm'
                              : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                          }`}
                        >
                          {th}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};
