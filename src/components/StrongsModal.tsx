import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { STRONGS_DICTIONARY } from '../data/bibleData';
import { X, BookOpen, Volume2, HelpCircle } from 'lucide-react';

export const StrongsModal: React.FC = () => {
  const { selectedStrongWordId, setSelectedStrongWordId } = useAppStore();

  if (!selectedStrongWordId) return null;

  const wordData = STRONGS_DICTIONARY[selectedStrongWordId];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-lg bg-white dark:bg-slate-900 sepia-mode:bg-amber-50 rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800 sepia-mode:border-card animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 sepia-mode:border-card flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/20">
          <div className="flex items-center space-x-2">
            <span className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
              <BookOpen size={18} />
            </span>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 sepia-mode:text-amber-900">
                Strong's Concordance | 聖經原文字典
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 sepia-mode:text-muted">
                Lexical Word Analysis | 原文字義分析
              </p>
            </div>
          </div>
          <button 
            onClick={() => setSelectedStrongWordId(null)}
            className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        {wordData ? (
          <div className="p-6 space-y-4">
            {/* Word Banner */}
            <div className="flex items-baseline justify-between p-4 rounded-xl bg-indigo-50/30 dark:bg-indigo-950/10 border border-indigo-100/50 dark:border-indigo-900/20">
              <div>
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 tracking-wider">
                  {wordData.type} Concordance Ref: {wordData.id}
                </span>
                <h1 className="text-3xl font-serif font-bold text-slate-900 dark:text-slate-50 sepia-mode:text-amber-950 mt-1">
                  {wordData.word}
                </h1>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 dark:text-slate-500 block">Transliteration</span>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 font-sans italic">
                  {wordData.transliteration}
                </span>
              </div>
            </div>

            {/* Pronunciation & Part of speech */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg border border-slate-100 dark:border-slate-800/80 sepia-mode:border-card">
                <span className="text-slate-400 dark:text-slate-500 block mb-1">Pronunciation | 讀音</span>
                <div className="flex items-center space-x-1.5 text-slate-700 dark:text-slate-300 font-semibold">
                  <Volume2 size={14} className="text-slate-400" />
                  <span>/{wordData.pronunciation}/</span>
                </div>
              </div>
              <div className="p-3 rounded-lg border border-slate-100 dark:border-slate-800/80 sepia-mode:border-card">
                <span className="text-slate-400 dark:text-slate-500 block mb-1">Part of Speech | 詞性</span>
                <div className="font-semibold text-slate-700 dark:text-slate-300">
                  <span className="block">{wordData.partOfSpeechEn}</span>
                  <span className="text-slate-500 dark:text-slate-400 font-sans text-[11px]">{wordData.partOfSpeechZh}</span>
                </div>
              </div>
            </div>

            {/* Definition English */}
            <div className="space-y-1">
              <h5 className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                English Definition
              </h5>
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-sans">
                {wordData.definitionEn}
              </p>
            </div>

            {/* Definition Chinese */}
            <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800/60 sepia-mode:border-card">
              <h5 className="text-[10px] font-bold text-slate-400 tracking-wider uppercase font-sans">
                中文原文字義
              </h5>
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-sans">
                {wordData.definitionZh}
              </p>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center space-y-2">
            <HelpCircle size={40} className="mx-auto text-slate-300 dark:text-slate-600 animate-pulse" />
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Lexicon entry not found</h4>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Details for this word reference are currently not loaded in the local database.
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 sepia-mode:border-card flex justify-end bg-slate-50/50 dark:bg-slate-950/20">
          <button 
            onClick={() => setSelectedStrongWordId(null)}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 transition-colors"
          >
            Close | 關閉
          </button>
        </div>
      </div>
    </div>
  );
};
