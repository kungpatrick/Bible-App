export interface WordMapping {
  text: string;
  strongId?: string;
}

export interface Verse {
  number: number;
  textEn: string;
  textZh: string;
  wordsEn?: WordMapping[];
  wordsZh?: WordMapping[];
  strongIds?: string[]; // Backup if we don't want word-by-word mapping
}

export interface Book {
  id: string;
  nameEn: string;
  nameZh: string;
  abbrevEn: string;
  abbrevZh: string;
  testament: 'OT' | 'NT';
  chaptersCount: number;
}

export interface StrongWord {
  id: string; // e.g. G2316, H7225
  word: string; // The Greek/Hebrew text (e.g. θεός, רֵאשִׁית)
  transliteration: string; // e.g. theos, reshith
  pronunciation: string; // e.g. theh-os', ray-sheeth'
  type: 'Greek' | 'Hebrew';
  definitionEn: string;
  definitionZh: string;
  partOfSpeechEn: string;
  partOfSpeechZh: string;
}

export interface Commentary {
  id: string;
  passage: string;
  titleEn: string;
  titleZh: string;
  paragraphsEn: string[];
  paragraphsZh: string[];
}

export interface MapLocation {
  id: string;
  nameEn: string;
  nameZh: string;
  latitude: number;
  longitude: number;
  descriptionEn: string;
  descriptionZh: string;
}

export interface CrossReference {
  id: string;
  sourceVerse: string; // e.g. "JHN 3:16"
  targetRefEn: string; // e.g. "Romans 5:8"
  targetRefZh: string; // e.g. "羅馬書 5:8"
  textEn: string;
  textZh: string;
}

export interface TopicReference {
  bookId: string;
  chapter: number;
  verseStart: number;
  verseEnd: number;
}

export interface Topic {
  id: string;
  titleEn: string;
  titleZh: string;
  descriptionEn: string;
  descriptionZh: string;
  references: TopicReference[];
}

export interface SearchSuggestion {
  type: 'book' | 'verse' | 'topic';
  labelEn: string;
  labelZh: string;
  value: string; // The search query that will be executed
  detailsEn?: string;
  detailsZh?: string;
}

export interface GospelComparisonItem {
  aspectEn: string;
  aspectZh: string;
  matthewTextEn: string;
  matthewTextZh: string;
  markTextEn: string;
  markTextZh: string;
  lukeTextEn: string;
  lukeTextZh: string;
}

export interface CantoneseExplanation {
  phrase: string;
  meaningEn: string;
  meaningZh: string;
  cantoneseExplanation: string;
  theologyEn: string;
  theologyZh: string;
}

export interface TopicalAnalysis {
  topicId: string;
  coreHighlightsEn: Array<{ title: string; content: string }>;
  coreHighlightsZh: Array<{ title: string; content: string }>;
  gospelComparisons: GospelComparisonItem[];
  cantoneseExplanations: CantoneseExplanation[];
}

