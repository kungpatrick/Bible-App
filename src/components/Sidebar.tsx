import React, { useState, useEffect } from 'react';
import { useAppStore, SidebarTab } from '../store/useAppStore';
import { COMMENTARIES, CROSS_REFERENCES, BIBLE_VERSES, STRONGS_DICTIONARY, TOPICAL_ANALYSES, BOOKS } from '../data/bibleData';
import { InteractiveMap } from './InteractiveMap';
import { FileText, Map, Link2, Key, ChevronRight, Sparkles, Split, MessageSquareCode } from 'lucide-react';


export const Sidebar: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    selectedBookId,
    selectedChapter,
    selectedVerseStart,
    selectedTopicId,
    setScripture,
    setSelectedStrongWordId,
    multiPassages
  } = useAppStore();

  const currentVerseKey = `${selectedBookId}:${selectedChapter}`;
  const currentFullRef = `${selectedBookId} ${selectedChapter}:${selectedVerseStart}`;

  // Smartly check if we can auto-resolve topicId based on the current multiPassages search comparison
  let activeTopicId = selectedTopicId;
  if (!activeTopicId && multiPassages && multiPassages.length >= 2) {
    // 1. Paralytic miracle check
    const hasMat9 = multiPassages.some(p => p.bookId === 'MAT' && p.chapter === 9);
    const hasMrk2 = multiPassages.some(p => p.bookId === 'MRK' && p.chapter === 2);
    const hasLuk5 = multiPassages.some(p => p.bookId === 'LUK' && p.chapter === 5);
    if ((hasMat9 && hasMrk2) || (hasMrk2 && hasLuk5) || (hasMat9 && hasLuk5)) {
      activeTopicId = 'heal-paralytic';
    }

    // 2. Withered hand miracle check
    const hasMat12 = multiPassages.some(p => p.bookId === 'MAT' && p.chapter === 12);
    const hasMrk3 = multiPassages.some(p => p.bookId === 'MRK' && p.chapter === 3);
    const hasLuk6 = multiPassages.some(p => p.bookId === 'LUK' && p.chapter === 6);
    if ((hasMat12 && hasMrk3) || (hasMrk3 && hasLuk6) || (hasMat12 && hasLuk6)) {
      activeTopicId = 'heal-withered-hand';
    }

    // 3. Cleanse leper check (MAT 8, MRK 1, LUK 5)
    const hasMat8 = multiPassages.some(p => p.bookId === 'MAT' && p.chapter === 8);
    const hasMrk1 = multiPassages.some(p => p.bookId === 'MRK' && p.chapter === 1);
    if ((hasMat8 && hasMrk1 && hasLuk5) || (hasMrk1 && hasLuk5)) {
      activeTopicId = 'cleanse-leper';
    }

    // 4. Calming storm check (MAT 8, MRK 4, LUK 8)
    const hasMrk4 = multiPassages.some(p => p.bookId === 'MRK' && p.chapter === 4);
    const hasLuk8 = multiPassages.some(p => p.bookId === 'LUK' && p.chapter === 8);
    if ((hasMat8 && hasMrk4 && hasLuk8) || (hasMrk4 && hasLuk8)) {
      activeTopicId = 'calm-storm';
    }

    // 5. Exorcise legion check (MAT 8, MRK 5, LUK 8)
    const hasMrk5 = multiPassages.some(p => p.bookId === 'MRK' && p.chapter === 5);
    if (hasMat8 && hasMrk5 && hasLuk8) {
      activeTopicId = 'exorcise-legion';
    }

    // 6. Bleeding woman / Jairus' daughter check (MAT 9, MRK 5, LUK 8)
    if (hasMat9 && hasMrk5 && hasLuk8) {
      activeTopicId = 'heal-bleeding-woman';
    }

    // 7. Feeding 5,000 check (MAT 14, MRK 6, LUK 9, JHN 6)
    const hasMat14 = multiPassages.some(p => p.bookId === 'MAT' && p.chapter === 14);
    const hasMrk6 = multiPassages.some(p => p.bookId === 'MRK' && p.chapter === 6);
    const hasLuk9 = multiPassages.some(p => p.bookId === 'LUK' && p.chapter === 9);
    const hasJhn6 = multiPassages.some(p => p.bookId === 'JHN' && p.chapter === 6);
    if ((hasMat14 && hasMrk6 && hasLuk9 && hasJhn6) || (hasMat14 && hasMrk6 && hasLuk9)) {
      activeTopicId = 'feed-5000';
    }

    // 8. Walking on water check (MAT 14, MRK 6, JHN 6)
    if (hasMat14 && hasMrk6 && hasJhn6 && !hasLuk9) {
      activeTopicId = 'walk-on-water';
    }

    // 9. Feeding 4000 check (MAT 15, MRK 8)
    const hasMat15 = multiPassages.some(p => p.bookId === 'MAT' && p.chapter === 15);
    const hasMrk8 = multiPassages.some(p => p.bookId === 'MRK' && p.chapter === 8);
    if (hasMat15 && hasMrk8) {
      activeTopicId = 'feed-4000';
    }

    // 10. Blind Bartimaeus check (MAT 20, MRK 10, LUK 18)
    const hasMat20 = multiPassages.some(p => p.bookId === 'MAT' && p.chapter === 20);
    const hasMrk10 = multiPassages.some(p => p.bookId === 'MRK' && p.chapter === 10);
    const hasLuk18 = multiPassages.some(p => p.bookId === 'LUK' && p.chapter === 18);
    if ((hasMat20 && hasMrk10 && hasLuk18) || (hasMrk10 && hasLuk18)) {
      activeTopicId = 'heal-blind-bartimaeus';
    }

    // 11. Cursing fig tree check (MAT 21, MRK 11)
    const hasMat21 = multiPassages.some(p => p.bookId === 'MAT' && p.chapter === 21);
    const hasMrk11 = multiPassages.some(p => p.bookId === 'MRK' && p.chapter === 11);
    if (hasMat21 && hasMrk11) {
      activeTopicId = 'curse-fig-tree';
    }
  }

  // Get active commentary
  let activeCommentary = COMMENTARIES[`${selectedBookId}:${selectedChapter}`];
  if (activeTopicId && COMMENTARIES[activeTopicId]) {
    activeCommentary = COMMENTARIES[activeTopicId];
  }

  const [subTab, setSubTab] = useState<'commentary' | 'highlights' | 'comparison' | 'cantonese'>('commentary');
  const topicalAnalysis = activeTopicId ? TOPICAL_ANALYSES[activeTopicId] : null;

  useEffect(() => {
    if (activeTopicId) {
      setSubTab('highlights');
    } else {
      setSubTab('commentary');
    }
  }, [activeTopicId]);

  // Get cross references for current verse
  const relatedRefs = CROSS_REFERENCES.filter(
    (ref) => ref.sourceVerse.toUpperCase() === `${selectedBookId} ${selectedChapter}:${selectedVerseStart}`.toUpperCase()
  );

  // Extract Strong's words present in the active verse
  const getStrongsInVerse = () => {
    const activeChapterVerses = BIBLE_VERSES[currentVerseKey] || [];
    const activeVerse = activeChapterVerses.find((v) => v.number === selectedVerseStart);
    
    if (!activeVerse) return [];

    // Collect strongIds from wordsEn or wordsZh
    const ids = new Set<string>();
    activeVerse.wordsEn?.forEach(w => { if (w.strongId) ids.add(w.strongId); });
    activeVerse.wordsZh?.forEach(w => { if (w.strongId) ids.add(w.strongId); });

    return Array.from(ids).map(id => STRONGS_DICTIONARY[id]).filter(Boolean);
  };

  const strongsList = getStrongsInVerse();

  const tabsConfig = [
    { id: 'commentary' as SidebarTab, labelEn: 'Commentary', labelZh: '釋經註釋', icon: FileText },
    { id: 'strongs' as SidebarTab, labelEn: 'Analysis', labelZh: '原文分析', icon: Key },
    { id: 'map' as SidebarTab, labelEn: 'Map', labelZh: '地理地圖', icon: Map },
    { id: 'references' as SidebarTab, labelEn: 'Related Verses', labelZh: '相關經文', icon: Link2 },
  ];

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 sepia-mode:bg-amber-50 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 sepia-mode:border-card overflow-hidden">
      
      {/* Tabs Header */}
      <div className="flex border-b border-slate-100 dark:border-slate-800 sepia-mode:border-card bg-slate-50/50 dark:bg-slate-950/20 p-1">
        {tabsConfig.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col items-center py-2 px-1 rounded-lg transition-all ${
                isActive
                  ? 'bg-white dark:bg-slate-800 sepia-mode:bg-amber-100/80 text-indigo-600 dark:text-indigo-400 shadow-sm border border-slate-200/40 dark:border-slate-700/30'
                  : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
              }`}
            >
              <Icon size={16} className={isActive ? 'text-indigo-500 dark:text-indigo-400' : 'text-slate-400'} />
              <span className="text-[10px] font-bold mt-1 tracking-tight">{tab.labelZh}</span>
              <span className="text-[8px] font-sans opacity-80 leading-none">{tab.labelEn}</span>
            </button>
          );
        })}
      </div>

      {/* Tabs Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-5">
        
        {/* Commentary View */}
        {activeTab === 'commentary' && (
          <div className="space-y-5 animate-fade-in">
            
            {/* Sub-tabs Row for Topical Study */}
            {topicalAnalysis && (
              <div className="flex border border-slate-200/60 dark:border-slate-800 sepia-mode:border-card rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-950 p-0.5 text-xs font-semibold select-none">
                <button
                  onClick={() => setSubTab('highlights')}
                  className={`flex-1 py-1 rounded-md text-center transition-all flex items-center justify-center space-x-1 ${
                    subTab === 'highlights'
                      ? 'bg-white dark:bg-slate-800 sepia-mode:bg-amber-100/80 text-indigo-600 dark:text-indigo-400 shadow-sm font-bold'
                      : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  <Sparkles size={11} className="text-amber-500 shrink-0" />
                  <span className="hidden sm:inline">核心摘要</span>
                  <span className="sm:hidden">摘要</span>
                </button>
                <button
                  onClick={() => setSubTab('comparison')}
                  className={`flex-1 py-1 rounded-md text-center transition-all flex items-center justify-center space-x-1 ${
                    subTab === 'comparison'
                      ? 'bg-white dark:bg-slate-800 sepia-mode:bg-amber-100/80 text-indigo-600 dark:text-indigo-400 shadow-sm font-bold'
                      : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  <Split size={11} className="text-indigo-500 shrink-0" />
                  <span className="hidden sm:inline">三卷比較</span>
                  <span className="sm:hidden">比較</span>
                </button>
                <button
                  onClick={() => setSubTab('cantonese')}
                  className={`flex-1 py-1 rounded-md text-center transition-all flex items-center justify-center space-x-1 ${
                    subTab === 'cantonese'
                      ? 'bg-white dark:bg-slate-800 sepia-mode:bg-amber-100/80 text-indigo-600 dark:text-indigo-400 shadow-sm font-bold'
                      : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  <MessageSquareCode size={11} className="text-emerald-500 shrink-0" />
                  <span className="hidden sm:inline">廣東話拆解</span>
                  <span className="sm:hidden">廣東話</span>
                </button>
                <button
                  onClick={() => setSubTab('commentary')}
                  className={`flex-1 py-1 rounded-md text-center transition-all flex items-center justify-center space-x-1 ${
                    subTab === 'commentary'
                      ? 'bg-white dark:bg-slate-800 sepia-mode:bg-amber-100/80 text-indigo-600 dark:text-indigo-400 shadow-sm font-bold'
                      : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  <FileText size={11} className="text-slate-500 shrink-0" />
                  <span className="hidden sm:inline">章節注釋</span>
                  <span className="sm:hidden">注釋</span>
                </button>
              </div>
            )}

            {/* Sub-tab 1: Core Highlights */}
            {subTab === 'highlights' && topicalAnalysis && (
              <div className="space-y-4 animate-fade-in">
                <div className="border-l-2 border-amber-500 pl-3">
                  <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200 sepia-mode:text-amber-950">
                    經文核心重點摘要 (Topical Core Summary)
                  </h3>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500">
                    Key thematic takeaways from this miracle
                  </p>
                </div>
                
                <div className="space-y-3">
                  {topicalAnalysis.coreHighlightsZh.map((hl, i) => {
                    const enHl = topicalAnalysis.coreHighlightsEn[i];
                    return (
                      <div key={i} className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 sepia-mode:border-card bg-slate-50/50 dark:bg-slate-950/10">
                        <h4 className="font-bold text-xs text-indigo-600 dark:text-indigo-400 flex items-center space-x-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                          <span>{hl.title} / {enHl?.title}</span>
                        </h4>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mt-1.5 font-sans">
                          {hl.content}
                        </p>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-relaxed mt-1 italic">
                          {enHl?.content}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Sub-tab 2: Gospel Comparisons */}
            {subTab === 'comparison' && topicalAnalysis && (
              <div className="space-y-4 animate-fade-in">
                <div className="border-l-2 border-indigo-500 pl-3">
                  <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200 sepia-mode:text-amber-950">
                    福音書描寫細節差異 (Gospel Detail Comparison)
                  </h3>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500">
                    Comparing textual variations across Synoptics
                  </p>
                </div>

                <div className="space-y-4">
                  {topicalAnalysis.gospelComparisons.map((comp, i) => (
                    <div key={i} className="border border-slate-100 dark:border-slate-800/80 sepia-mode:border-card rounded-xl overflow-hidden shadow-sm">
                      <div className="p-2.5 bg-slate-50 dark:bg-slate-950/40 text-xs font-bold text-slate-800 dark:text-slate-200 sepia-mode:text-amber-950 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                        <span>{comp.aspectZh}</span>
                        <span className="text-[10px] font-sans text-slate-400 font-normal">{comp.aspectEn}</span>
                      </div>
                      
                      <div className="p-3.5 space-y-3 divide-y divide-slate-100/55 dark:divide-slate-800/30 text-xs leading-relaxed">
                        {/* Matthew */}
                        <div className="space-y-0.5">
                          <span className="font-bold text-[10px] text-orange-500 dark:text-orange-400">馬太福音 Matthew</span>
                          <p className="text-slate-700 dark:text-slate-300 font-sans">{comp.matthewTextZh}</p>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 italic">{comp.matthewTextEn}</p>
                        </div>
                        {/* Mark */}
                        <div className="space-y-0.5 pt-2.5">
                          <span className="font-bold text-[10px] text-indigo-500 dark:text-indigo-400">馬可福音 Mark</span>
                          <p className="text-slate-700 dark:text-slate-300 font-sans">{comp.markTextZh}</p>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 italic">{comp.markTextEn}</p>
                        </div>
                        {/* Luke */}
                        <div className="space-y-0.5 pt-2.5">
                          <span className="font-bold text-[10px] text-emerald-500 dark:text-emerald-400">路加福音 Luke</span>
                          <p className="text-slate-700 dark:text-slate-300 font-sans">{comp.lukeTextZh}</p>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 italic">{comp.lukeTextEn}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sub-tab 3: Cantonese Deep Dive Analysis */}
            {subTab === 'cantonese' && topicalAnalysis && (
              <div className="space-y-4 animate-fade-in">
                <div className="border-l-2 border-emerald-500 pl-3">
                  <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200 sepia-mode:text-amber-950">
                    廣東話詳細字詞拆解 (Cantonese Phrase Analysis)
                  </h3>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500">
                    Detailed Cantonese breakdown and theological context
                  </p>
                </div>

                <div className="space-y-4">
                  {topicalAnalysis.cantoneseExplanations.map((exp, i) => (
                    <div key={i} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 sepia-mode:border-card bg-slate-50/50 dark:bg-slate-950/10 space-y-2">
                      <div className="flex justify-between items-baseline border-b border-slate-100 dark:border-slate-800 pb-1.5">
                        <span className="font-serif font-bold text-sm text-indigo-600 dark:text-indigo-400">
                          「{exp.phrase}」
                        </span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-sans italic">
                          {exp.meaningEn}
                        </span>
                      </div>

                      <div className="space-y-2">
                        {/* Cantonese colloquial explanation */}
                        <div>
                          <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-1 py-0.5 rounded tracking-wide">
                            廣東話解釋 Colloquial
                          </span>
                          <p className="text-xs text-slate-800 dark:text-slate-200 mt-1 leading-relaxed font-sans font-medium">
                            {exp.cantoneseExplanation}
                          </p>
                        </div>

                        {/* Traditional Chinese theology context */}
                        <div className="pt-1.5 border-t border-slate-100/60 dark:border-slate-800/40">
                          <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 tracking-wide">
                            神學及字詞背景 Biblical Theology
                          </span>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-relaxed font-sans">
                            {exp.theologyZh}
                          </p>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 leading-normal italic">
                            {exp.theologyEn}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sub-tab 4: Standard Bible Commentary (also handles standard chapter-only commentary) */}
            {(subTab === 'commentary' || !topicalAnalysis) && (
              <div className="space-y-6">
                {/* Custom comparison summary */}
                {multiPassages && !topicalAnalysis && (
                  <div className="p-4 bg-violet-50/20 dark:bg-violet-950/10 rounded-2xl border border-slate-100 dark:border-slate-800/60 sepia-mode:border-card space-y-2.5">
                    <div className="border-l-2 border-violet-500 pl-3">
                      <h4 className="font-bold text-xs text-slate-800 dark:text-slate-200 sepia-mode:text-amber-950">
                        經文對照清單 (Passage Comparison)
                      </h4>
                      <p className="text-[9px] text-slate-400 dark:text-slate-500">
                        Custom multi-reference comparison list
                      </p>
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5 font-sans leading-relaxed">
                      <p>你目前正在對照閱讀 <strong>{multiPassages.length} 處經文</strong>：</p>
                      <ul className="list-disc pl-4 space-y-0.5 text-slate-700 dark:text-slate-300">
                        {multiPassages.map((p, i) => {
                          const book = BOOKS.find(b => b.id === p.bookId);
                          return (
                            <li key={i}>
                              {book ? `${book.nameZh} / ${book.nameEn}` : p.bookId} {p.chapter}:{p.verseStart}{p.verseEnd ? `-${p.verseEnd}` : ''}
                            </li>
                          );
                        })}
                      </ul>
                      <p className="text-[9px] text-slate-400 dark:text-slate-500 pt-1 border-t border-slate-100 dark:border-slate-800/40">
                        💡 提示：若是搜尋對照「福音書平行神蹟」等已收錄主題（如：馬太/馬可/路加醫治癱子），側邊欄會自動為你啟動專屬的「核心摘要」、「三卷對照」與「廣東話拆解」！
                      </p>
                    </div>
                  </div>
                )}

                {activeCommentary ? (
                  <div className="space-y-5">
                    <div className="border-l-2 border-indigo-500 pl-3">
                      <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200 sepia-mode:text-amber-950 leading-tight">
                        {activeCommentary.titleZh}
                      </h3>
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-sans mt-0.5">
                        {activeCommentary.titleEn} (Passage: {activeCommentary.passage})
                      </p>
                    </div>
                    
                    {/* Paragraphs Chinese */}
                    <div className="space-y-3">
                      <span className="text-[9px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase block font-sans">
                        Chinese Commentary | 中文釋經
                      </span>
                      {activeCommentary.paragraphsZh.map((p, i) => (
                        <p key={i} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                          {p}
                        </p>
                      ))}
                    </div>

                    {/* Paragraphs English */}
                    <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 sepia-mode:border-card pt-4">
                      <span className="text-[9px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase block">
                        English Commentary
                      </span>
                      {activeCommentary.paragraphsEn.map((p, i) => (
                        <p key={i} className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-serif">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 sepia-mode:border-card bg-slate-50/50 dark:bg-slate-950/10 text-center space-y-4">
                    <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      💡 <strong>Standard Scripture Reader</strong>
                      <p className="mt-1 font-sans">This chapter is dynamically loaded from the public API. Commentary, maps, and interlinear Strong's concordance tags are available on key study chapters.</p>
                      <p className="mt-2 text-slate-400 font-sans">目前為標準經文模式（經文載自網路）。若要體驗完整的雙語對照字詞分析、釋經與地圖，請點擊以下精選研讀章節：</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-semibold">
                      <button onClick={() => setScripture('GEN', 1)} className="p-2 rounded-lg bg-white dark:bg-slate-805 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-slate-800 dark:hover:bg-slate-750 border border-slate-200/50 dark:border-slate-700/30 transition-all text-left">
                        創世記 Genesis 1
                      </button>
                      <button onClick={() => setScripture('PSA', 23)} className="p-2 rounded-lg bg-white dark:bg-slate-805 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-slate-800 dark:hover:bg-slate-750 border border-slate-200/50 dark:border-slate-700/30 transition-all text-left">
                        詩篇 Psalms 23
                      </button>
                      <button onClick={() => setScripture('JHN', 1)} className="p-2 rounded-lg bg-white dark:bg-slate-805 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-slate-800 dark:hover:bg-slate-750 border border-slate-200/50 dark:border-slate-700/30 transition-all text-left">
                        約翰福音 John 1
                      </button>
                      <button onClick={() => setScripture('JHN', 3)} className="p-2 rounded-lg bg-white dark:bg-slate-805 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-slate-800 dark:hover:bg-slate-750 border border-slate-200/50 dark:border-slate-700/30 transition-all text-left">
                        約翰福音 John 3
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Strong's Word List Analysis View */}
        {activeTab === 'strongs' && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <h4 className="font-semibold text-xs text-slate-800 dark:text-slate-200 sepia-mode:text-amber-950">
                Strongs Concordance for Verse {selectedVerseStart}
              </h4>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-sans">
                原文字義列表（點擊查閱詳細字典定義）
              </p>
            </div>
            
            {strongsList.length === 0 ? (
              <div className="text-center py-12 text-xs text-slate-400 dark:text-slate-500">
                No indexed Strong's concordance words for verse {selectedVerseStart}.
                <br />此節經文無標記的原文字彙。
              </div>
            ) : (
              <div className="space-y-2">
                {strongsList.map((word) => (
                  <button
                    key={word.id}
                    onClick={() => setSelectedStrongWordId(word.id)}
                    className="w-full text-left p-3 rounded-xl border border-slate-100 dark:border-slate-800/80 sepia-mode:border-card bg-slate-50/50 dark:bg-slate-950/10 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-bold text-indigo-500 font-sans bg-indigo-50 dark:bg-indigo-950/40 px-1.5 py-0.5 rounded">
                          {word.id}
                        </span>
                        <span className="font-serif font-bold text-base text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                          {word.word}
                        </span>
                        <span className="text-xs text-slate-400 dark:text-slate-500 italic">
                          ({word.transliteration})
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed line-clamp-1 font-sans">
                        {word.definitionZh}
                      </p>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 line-clamp-1">
                        {word.definitionEn}
                      </p>
                    </div>
                    <ChevronRight size={14} className="text-slate-300 dark:text-slate-600 group-hover:text-indigo-500 transition-colors shrink-0 pl-1" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Map View */}
        {activeTab === 'map' && (
          <div className="h-[450px] md:h-full min-h-[350px] animate-fade-in">
            <InteractiveMap />
          </div>
        )}

        {/* Cross References Related Verses View */}
        {activeTab === 'references' && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <h4 className="font-semibold text-xs text-slate-800 dark:text-slate-200 sepia-mode:text-amber-950">
                Cross-References for {currentFullRef}
              </h4>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-sans">
                本節相關的啟導/串珠經文
              </p>
            </div>

            {relatedRefs.length === 0 ? (
              <div className="text-center py-12 text-xs text-slate-400 dark:text-slate-500">
                No cross-references logged for {currentFullRef}.
                <br />此節經文尚無相關串珠。
              </div>
            ) : (
              <div className="space-y-3">
                {relatedRefs.map((ref) => {
                  // Determine Book ID for reference clicking
                  // e.g. "Romans 5:8" -> ROM, "John 1:1" -> JHN
                  // Let's write a parser logic inside
                  const getTargetBookId = (enRef: string) => {
                    const bookName = enRef.split(' ')[0].toLowerCase();
                    if (bookName.includes('roman')) return 'ROM';
                    if (bookName.includes('john')) return 'JHN';
                    if (bookName.includes('luke')) return 'LUK';
                    if (bookName.includes('matt')) return 'MAT';
                    return null;
                  };

                  const targetBookId = getTargetBookId(ref.targetRefEn);

                  return (
                    <div 
                      key={ref.id}
                      className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/80 sepia-mode:border-card bg-slate-50/50 dark:bg-slate-950/10 space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-xs text-indigo-600 dark:text-indigo-400">
                          {ref.targetRefZh}
                        </span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-sans">
                          {ref.targetRefEn}
                        </span>
                      </div>
                      
                      <div className="space-y-1">
                        <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                          {ref.textZh}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-serif">
                          {ref.textEn}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
