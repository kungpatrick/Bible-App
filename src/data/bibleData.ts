import { Book, Verse, StrongWord, Commentary, MapLocation, CrossReference, Topic, TopicalAnalysis } from '../types';


export const BOOKS: Book[] = [
  // Old Testament (OT)
  { id: 'GEN', nameEn: 'Genesis', nameZh: '創世記', abbrevEn: 'Gen', abbrevZh: '創', testament: 'OT', chaptersCount: 50 },
  { id: 'EXO', nameEn: 'Exodus', nameZh: '出埃及記', abbrevEn: 'Exo', abbrevZh: '出', testament: 'OT', chaptersCount: 40 },
  { id: 'LEV', nameEn: 'Leviticus', nameZh: '利未記', abbrevEn: 'Lev', abbrevZh: '利', testament: 'OT', chaptersCount: 27 },
  { id: 'NUM', nameEn: 'Numbers', nameZh: '民數記', abbrevEn: 'Num', abbrevZh: '民', testament: 'OT', chaptersCount: 36 },
  { id: 'DEU', nameEn: 'Deuteronomy', nameZh: '申命記', abbrevEn: 'Deu', abbrevZh: '申', testament: 'OT', chaptersCount: 34 },
  { id: 'JOS', nameEn: 'Joshua', nameZh: '約書亞記', abbrevEn: 'Josh', abbrevZh: '書', testament: 'OT', chaptersCount: 24 },
  { id: 'JDG', nameEn: 'Judges', nameZh: '士師記', abbrevEn: 'Judg', abbrevZh: '士', testament: 'OT', chaptersCount: 21 },
  { id: 'RUT', nameEn: 'Ruth', nameZh: '路得記', abbrevEn: 'Ruth', abbrevZh: '得', testament: 'OT', chaptersCount: 4 },
  { id: '1SA', nameEn: '1 Samuel', nameZh: '撒母耳記上', abbrevEn: '1 Sam', abbrevZh: '撒上', testament: 'OT', chaptersCount: 31 },
  { id: '2SA', nameEn: '2 Samuel', nameZh: '撒母耳記下', abbrevEn: '2 Sam', abbrevZh: '撒下', testament: 'OT', chaptersCount: 24 },
  { id: '1KI', nameEn: '1 Kings', nameZh: '列王紀上', abbrevEn: '1 Kings', abbrevZh: '王上', testament: 'OT', chaptersCount: 22 },
  { id: '2KI', nameEn: '2 Kings', nameZh: '列王紀下', abbrevEn: '2 Kings', abbrevZh: '王下', testament: 'OT', chaptersCount: 25 },
  { id: '1CH', nameEn: '1 Chronicles', nameZh: '歷代志上', abbrevEn: '1 Chron', abbrevZh: '代上', testament: 'OT', chaptersCount: 29 },
  { id: '2CH', nameEn: '2 Chronicles', nameZh: '歷代志下', abbrevEn: '2 Chron', abbrevZh: '代下', testament: 'OT', chaptersCount: 36 },
  { id: 'EZR', nameEn: 'Ezra', nameZh: '以斯拉記', abbrevEn: 'Ezra', abbrevZh: '拉', testament: 'OT', chaptersCount: 10 },
  { id: 'NEH', nameEn: 'Nehemiah', nameZh: '尼希米記', abbrevEn: 'Neh', abbrevZh: '尼', testament: 'OT', chaptersCount: 13 },
  { id: 'EST', nameEn: 'Esther', nameZh: '以斯帖記', abbrevEn: 'Esth', abbrevZh: '帖', testament: 'OT', chaptersCount: 10 },
  { id: 'JOB', nameEn: 'Job', nameZh: '約伯記', abbrevEn: 'Job', abbrevZh: '伯', testament: 'OT', chaptersCount: 42 },
  { id: 'PSA', nameEn: 'Psalms', nameZh: '詩篇', abbrevEn: 'Ps', abbrevZh: '詩', testament: 'OT', chaptersCount: 150 },
  { id: 'PRO', nameEn: 'Proverbs', nameZh: '箴言', abbrevEn: 'Prov', abbrevZh: '箴', testament: 'OT', chaptersCount: 31 },
  { id: 'ECC', nameEn: 'Ecclesiastes', nameZh: '傳道書', abbrevEn: 'Eccles', abbrevZh: '傳', testament: 'OT', chaptersCount: 12 },
  { id: 'SNG', nameEn: 'Song of Solomon', nameZh: '雅歌', abbrevEn: 'Song', abbrevZh: '歌', testament: 'OT', chaptersCount: 8 },
  { id: 'ISA', nameEn: 'Isaiah', nameZh: '以賽亞書', abbrevEn: 'Isa', abbrevZh: '賽', testament: 'OT', chaptersCount: 66 },
  { id: 'JER', nameEn: 'Jeremiah', nameZh: '耶利米書', abbrevEn: 'Jer', abbrevZh: '耶', testament: 'OT', chaptersCount: 52 },
  { id: 'LAM', nameEn: 'Lamentations', nameZh: '耶利米哀歌', abbrevEn: 'Lam', abbrevZh: '哀', testament: 'OT', chaptersCount: 5 },
  { id: 'EZK', nameEn: 'Ezekiel', nameZh: '以西結書', abbrevEn: 'Ezek', abbrevZh: '結', testament: 'OT', chaptersCount: 48 },
  { id: 'DAN', nameEn: 'Daniel', nameZh: '但以理書', abbrevEn: 'Dan', abbrevZh: '但', testament: 'OT', chaptersCount: 12 },
  { id: 'HOS', nameEn: 'Hosea', nameZh: '何西阿書', abbrevEn: 'Hos', abbrevZh: '何', testament: 'OT', chaptersCount: 14 },
  { id: 'JOL', nameEn: 'Joel', nameZh: '約珥書', abbrevEn: 'Joel', abbrevZh: '珥', testament: 'OT', chaptersCount: 3 },
  { id: 'AMO', nameEn: 'Amos', nameZh: '阿摩司書', abbrevEn: 'Amos', abbrevZh: '摩', testament: 'OT', chaptersCount: 9 },
  { id: 'OBD', nameEn: 'Obadiah', nameZh: '俄巴底亞書', abbrevEn: 'Obad', abbrevZh: '俄', testament: 'OT', chaptersCount: 1 },
  { id: 'JON', nameEn: 'Jonah', nameZh: '約拿書', abbrevEn: 'Jonah', abbrevZh: '拿', testament: 'OT', chaptersCount: 4 },
  { id: 'MIC', nameEn: 'Micah', nameZh: '彌迦書', abbrevEn: 'Mic', abbrevZh: '彌', testament: 'OT', chaptersCount: 7 },
  { id: 'NAM', nameEn: 'Nahum', nameZh: '那鴻書', abbrevEn: 'Nah', abbrevZh: '鴻', testament: 'OT', chaptersCount: 3 },
  { id: 'HAB', nameEn: 'Habakkuk', nameZh: '哈巴谷書', abbrevEn: 'Hab', abbrevZh: '哈', testament: 'OT', chaptersCount: 3 },
  { id: 'ZEP', nameEn: 'Zephaniah', nameZh: '西番雅書', abbrevEn: 'Zeph', abbrevZh: '番', testament: 'OT', chaptersCount: 3 },
  { id: 'HAG', nameEn: 'Haggai', nameZh: '哈該書', abbrevEn: 'Hag', abbrevZh: '該', testament: 'OT', chaptersCount: 2 },
  { id: 'ZEC', nameEn: 'Zechariah', nameZh: '撒迦利亞書', abbrevEn: 'Zech', abbrevZh: '亞', testament: 'OT', chaptersCount: 14 },
  { id: 'MAL', nameEn: 'Malachi', nameZh: '瑪拉基書', abbrevEn: 'Mal', abbrevZh: '瑪', testament: 'OT', chaptersCount: 4 },

  // New Testament (NT)
  { id: 'MAT', nameEn: 'Matthew', nameZh: '馬太福音', abbrevEn: 'Matt', abbrevZh: '太', testament: 'NT', chaptersCount: 28 },
  { id: 'MRK', nameEn: 'Mark', nameZh: '馬可福音', abbrevEn: 'Mark', abbrevZh: '可', testament: 'NT', chaptersCount: 16 },
  { id: 'LUK', nameEn: 'Luke', nameZh: '路加福音', abbrevEn: 'Luke', abbrevZh: '路', testament: 'NT', chaptersCount: 24 },
  { id: 'JHN', nameEn: 'John', nameZh: '約翰福音', abbrevEn: 'John', abbrevZh: '約', testament: 'NT', chaptersCount: 21 },
  { id: 'ACT', nameEn: 'Acts', nameZh: '使徒行傳', abbrevEn: 'Acts', abbrevZh: '徒', testament: 'NT', chaptersCount: 28 },
  { id: 'ROM', nameEn: 'Romans', nameZh: '羅馬書', abbrevEn: 'Rom', abbrevZh: '羅', testament: 'NT', chaptersCount: 16 },
  { id: '1CO', nameEn: '1 Corinthians', nameZh: '哥林多前書', abbrevEn: '1 Cor', abbrevZh: '林前', testament: 'NT', chaptersCount: 16 },
  { id: '2CO', nameEn: '2 Corinthians', nameZh: '哥林多後書', abbrevEn: '2 Cor', abbrevZh: '林後', testament: 'NT', chaptersCount: 13 },
  { id: 'GAL', nameEn: 'Galatians', nameZh: '加拉太書', abbrevEn: 'Gal', abbrevZh: '加', testament: 'NT', chaptersCount: 6 },
  { id: 'EPH', nameEn: 'Ephesians', nameZh: '以弗所書', abbrevEn: 'Eph', abbrevZh: '弗', testament: 'NT', chaptersCount: 6 },
  { id: 'PHP', nameEn: 'Philippians', nameZh: '腓立比書', abbrevEn: 'Phil', abbrevZh: '腓', testament: 'NT', chaptersCount: 4 },
  { id: 'COL', nameEn: 'Colossians', nameZh: '歌羅西書', abbrevEn: 'Col', abbrevZh: '歌', testament: 'NT', chaptersCount: 4 },
  { id: '1TH', nameEn: '1 Thessalonians', nameZh: '帖撒羅尼迦前書', abbrevEn: '1 Thess', abbrevZh: '帖前', testament: 'NT', chaptersCount: 5 },
  { id: '2TH', nameEn: '2 Thessalonians', nameZh: '帖撒羅尼迦後書', abbrevEn: '2 Thess', abbrevZh: '帖後', testament: 'NT', chaptersCount: 3 },
  { id: '1TM', nameEn: '1 Timothy', nameZh: '提摩太前書', abbrevEn: '1 Tim', abbrevZh: '提前', testament: 'NT', chaptersCount: 6 },
  { id: '2TM', nameEn: '2 Timothy', nameZh: '提摩太後書', abbrevEn: '2 Tim', abbrevZh: '提後', testament: 'NT', chaptersCount: 4 },
  { id: 'TIT', nameEn: 'Titus', nameZh: '提多書', abbrevEn: 'Titus', abbrevZh: '多', testament: 'NT', chaptersCount: 3 },
  { id: 'PHM', nameEn: 'Philemon', nameZh: '腓利門書', abbrevEn: 'Philem', abbrevZh: '門', testament: 'NT', chaptersCount: 1 },
  { id: 'HEB', nameEn: 'Hebrews', nameZh: '希伯來書', abbrevEn: 'Heb', abbrevZh: '希', testament: 'NT', chaptersCount: 13 },
  { id: 'JAS', nameEn: 'James', nameZh: '雅各書', abbrevEn: 'James', abbrevZh: '雅', testament: 'NT', chaptersCount: 5 },
  { id: '1PE', nameEn: '1 Peter', nameZh: '彼得前書', abbrevEn: '1 Pet', abbrevZh: '彼前', testament: 'NT', chaptersCount: 5 },
  { id: '2PE', nameEn: '2 Peter', nameZh: '彼得後書', abbrevEn: '2 Pet', abbrevZh: '彼後', testament: 'NT', chaptersCount: 3 },
  { id: '1JN', nameEn: '1 John', nameZh: '約翰一書', abbrevEn: '1 John', abbrevZh: '約一', testament: 'NT', chaptersCount: 5 },
  { id: '2JN', nameEn: '2 John', nameZh: '約翰二書', abbrevEn: '2 John', abbrevZh: '約二', testament: 'NT', chaptersCount: 1 },
  { id: '3JN', nameEn: '3 John', nameZh: '約翰三書', abbrevEn: '3 John', abbrevZh: '約三', testament: 'NT', chaptersCount: 1 },
  { id: 'JUD', nameEn: 'Jude', nameZh: '猶大書', abbrevEn: 'Jude', abbrevZh: '猶', testament: 'NT', chaptersCount: 1 },
  { id: 'REV', nameEn: 'Revelation', nameZh: '啟示錄', abbrevEn: 'Rev', abbrevZh: '啟', testament: 'NT', chaptersCount: 22 }
];

export const STRONGS_DICTIONARY: Record<string, StrongWord> = {
  // Greek
  G2316: {
    id: 'G2316',
    word: 'θεός',
    transliteration: 'theos',
    pronunciation: 'theh-os\'',
    type: 'Greek',
    definitionEn: 'God, a deity, the Supreme Divinity. Refers to the creator and ruler of the universe in the monotheistic sense.',
    definitionZh: '神，神明，至高主宰。指獨一的創造主和宇宙的統治者。',
    partOfSpeechEn: 'Noun, Masculine',
    partOfSpeechZh: '名詞，陽性',
  },
  G25: {
    id: 'G25',
    word: 'ἀγαπάω',
    transliteration: 'agapao',
    pronunciation: 'ag-ap-ah\'o',
    type: 'Greek',
    definitionEn: 'To love, value, esteem, feel or show deep unconditional affection. Distinctly denotes sacrificial, willful divine love.',
    definitionZh: '愛，珍視，尊重，表現出無條件的深切關懷。特指犧牲性的、出於意志的神聖之愛。',
    partOfSpeechEn: 'Verb',
    partOfSpeechZh: '動詞',
  },
  G2889: {
    id: 'G2889',
    word: 'κόσμος',
    transliteration: 'kosmos',
    pronunciation: 'kos\'-mos',
    type: 'Greek',
    definitionEn: 'The world, universe; orderly arrangement; the inhabitants of the earth, mankind; or the worldly system alienated from God.',
    definitionZh: '世界，宇宙；有秩序的排列；世人，人類；或與神疏離的世俗系統。',
    partOfSpeechEn: 'Noun, Masculine',
    partOfSpeechZh: '名詞，陽性',
  },
  G3439: {
    id: 'G3439',
    word: 'μονογενής',
    transliteration: 'monogenes',
    pronunciation: 'mon-og-en-ace\'',
    type: 'Greek',
    definitionEn: 'Only begotten, single of its kind, unique, one and only. Used of Jesus as the unique Son of God.',
    definitionZh: '獨生的，獨一無二的，唯一的。用於指耶穌是上帝特有的獨生子。',
    partOfSpeechEn: 'Adjective',
    partOfSpeechZh: '形容詞',
  },
  G5207: {
    id: 'G5207',
    word: 'υἱός',
    transliteration: 'huios',
    pronunciation: 'hwee-os\'',
    type: 'Greek',
    definitionEn: 'A son, descendant, male child; someone who shares the character or destiny of another (e.g. sons of light).',
    definitionZh: '兒子，子孫，男孩子；與他人共享性格或命運的人（例如：光明之子）。',
    partOfSpeechEn: 'Noun, Masculine',
    partOfSpeechZh: '名詞，陽性',
  },
  G4100: {
    id: 'G4100',
    word: 'πιστεύω',
    transliteration: 'pisteuo',
    pronunciation: 'pis-tyoo\'-o',
    type: 'Greek',
    definitionEn: 'To believe, have faith in, trust, rely upon, or commit oneself to. More than mental assent, implying active trust.',
    definitionZh: '相信，信仰，信靠，信賴，或委身於。不僅僅是理智上的認同，更隱含主動的信靠。',
    partOfSpeechEn: 'Verb',
    partOfSpeechZh: '動詞',
  },
  G2222: {
    id: 'G2222',
    word: 'ζωή',
    transliteration: 'zoe',
    pronunciation: 'dzo-ay\'',
    type: 'Greek',
    definitionEn: 'Life, physical or spiritual. In the New Testament, frequently refers to eternal, divine life shared with believers.',
    definitionZh: '生命，不論是肉體上還是屬靈上的。在新約中，常指與信徒共享的永恆、屬神之生命。',
    partOfSpeechEn: 'Noun, Feminine',
    partOfSpeechZh: '名詞，陰性',
  },
  G3056: {
    id: 'G3056',
    word: 'λόγος',
    transliteration: 'logos',
    pronunciation: 'log\'-os',
    type: 'Greek',
    definitionEn: 'Word, speech, statement, reason, divine utterance. Used by John as a title for Jesus Christ, the eternal Word of God.',
    definitionZh: '話語，言語，陳述，理性，神的宣告。約翰用作耶穌基督的頭銜，即上帝永恆的「道」。',
    partOfSpeechEn: 'Noun, Masculine',
    partOfSpeechZh: '名詞，陽性',
  },
  G746: {
    id: 'G746',
    word: 'ἀρχή',
    transliteration: 'arche',
    pronunciation: 'ar-khay\'',
    type: 'Greek',
    definitionEn: 'Beginning, origin, first cause, active power; rule, authority, principality.',
    definitionZh: '起初，起點，首因，主導力量；統治，權柄，政權。',
    partOfSpeechEn: 'Noun, Feminine',
    partOfSpeechZh: '名詞，陰性',
  },
  G5457: {
    id: 'G5457',
    word: 'φῶς',
    transliteration: 'phos',
    pronunciation: 'foce',
    type: 'Greek',
    definitionEn: 'Light, source of light, illumination; spiritually represents divine truth, holiness, and purity, opposing moral darkness.',
    definitionZh: '光，光源，光照；屬靈上代表神的真理、聖潔和純潔，與道德上的黑暗相對立。',
    partOfSpeechEn: 'Noun, Neuter',
    partOfSpeechZh: '名詞，中性',
  },
  G266: {
    id: 'G266',
    word: 'ἁμαρτία',
    transliteration: 'hamartia',
    pronunciation: 'ham-ar-tee\'-ah',
    type: 'Greek',
    definitionEn: 'Sin, error, missing the mark; failure to meet God\'s standards of righteousness; alienation from God.',
    definitionZh: '罪，過錯，未中目標；未能達到上帝公義的標準；與神疏離。',
    partOfSpeechEn: 'Noun, Feminine',
    partOfSpeechZh: '名詞，陰性',
  },
  G851: {
    id: 'G851',
    word: 'ἄφεσις',
    transliteration: 'aphesis',
    pronunciation: 'af\'-es-is',
    type: 'Greek',
    definitionEn: 'Dismissal, release, pardon, forgiveness, cancellation of debt or punishment.',
    definitionZh: '釋放，豁免，寬恕，赦免，債務或處罰的取消。',
    partOfSpeechEn: 'Noun, Feminine',
    partOfSpeechZh: '名詞，陰性',
  },
  G142: {
    id: 'G142',
    word: 'αἴρω',
    transliteration: 'airo',
    pronunciation: 'ah\'ee-ro',
    type: 'Greek',
    definitionEn: 'To raise, lift up, carry, take away, remove.',
    definitionZh: '舉起，抬起，攜帶，拿走，除去。',
    partOfSpeechEn: 'Verb',
    partOfSpeechZh: '動詞',
  },
  G2825: {
    id: 'G2825',
    word: 'κλινίδιον',
    transliteration: 'klinidion',
    pronunciation: 'klin-id\'-ee-on',
    type: 'Greek',
    definitionEn: 'A small bed, cot, mat, or couch used by the sick.',
    definitionZh: '小床，輕便臥榻，褥子，病人所用之墊子。',
    partOfSpeechEn: 'Noun, Neuter',
    partOfSpeechZh: '名詞，中性',
  },

  // Hebrew
  H7225: {
    id: 'H7225',
    word: 'רֵאשִׁית',
    transliteration: 'reshith',
    pronunciation: 'ray-sheeth\'',
    type: 'Hebrew',
    definitionEn: 'First, beginning, best, chief, primary element.',
    definitionZh: '起初，開始，最好的，首要的，主要元素。',
    partOfSpeechEn: 'Noun, Feminine',
    partOfSpeechZh: '名詞，陰性',
  },
  H430: {
    id: 'H430',
    word: 'אֱלֹהִים',
    transliteration: 'elohim',
    pronunciation: 'el-o-heem\'',
    type: 'Hebrew',
    definitionEn: 'God, gods, judges, angels; plural of majesty representing the one true God, Creator of all.',
    definitionZh: '神，神明，審判官，天使；尊貴複數，代表獨一真神、萬物創造者。',
    partOfSpeechEn: 'Noun, Masculine Plural',
    partOfSpeechZh: '名詞，陽性複數',
  },
  H1254: {
    id: 'H1254',
    word: 'בָּרָא',
    transliteration: 'bara',
    pronunciation: 'baw-raw\'',
    type: 'Hebrew',
    definitionEn: 'To create, shape, form. In the Qal stem, used exclusively of divine creation out of nothing.',
    definitionZh: '創造，塑造，形成。在基本主動語態中，專指神無中生有的創造。',
    partOfSpeechEn: 'Verb',
    partOfSpeechZh: '動詞',
  },
  H8064: {
    id: 'H8064',
    word: 'שָׁמַיִם',
    transliteration: 'shamayim',
    pronunciation: 'shaw-mah\'yim',
    type: 'Hebrew',
    definitionEn: 'Heavens, sky, firmament; the visible heavens or the dwelling place of God.',
    definitionZh: '天，天空，穹蒼；肉眼可見的天空或上帝的居所。',
    partOfSpeechEn: 'Noun, Masculine Dual/Plural',
    partOfSpeechZh: '名詞，雙數/複數',
  },
  H776: {
    id: 'H776',
    word: 'אֶרֶץ',
    transliteration: 'erets',
    pronunciation: 'eh\'-rets',
    type: 'Hebrew',
    definitionEn: 'Earth, land, ground, territory.',
    definitionZh: '地，地球，陸地，土地，領土。',
    partOfSpeechEn: 'Noun, Feminine',
    partOfSpeechZh: '名詞，陰性',
  },
  H3068: {
    id: 'H3068',
    word: 'יְהוָֹה',
    transliteration: 'Yahweh',
    pronunciation: 'yah-weh\'',
    type: 'Hebrew',
    definitionEn: 'Yahweh, the covenant name of God; \'He exists\', translated as LORD in English and 耶和華 in Chinese.',
    definitionZh: '雅威，神立約的名字；意思為「祂是」，英文譯為 LORD，中文譯為「耶和華」。',
    partOfSpeechEn: 'Proper Noun',
    partOfSpeechZh: '專有名詞',
  },
  H7462: {
    id: 'H7462',
    word: 'רָעָה',
    transliteration: 'raah',
    pronunciation: 'raw-aw\'',
    type: 'Hebrew',
    definitionEn: 'To shepherd, pasture, feed, tend, guide, companion.',
    definitionZh: '牧放，牧養，餵養，照顧，引導，作伴。',
    partOfSpeechEn: 'Verb',
    partOfSpeechZh: '動詞',
  },
};

export const TOPICS: Topic[] = [
  {
    id: 'water-into-wine',
    titleEn: '1. Turning Water into Wine at Cana',
    titleZh: '1. 迦拿變水為酒的神蹟',
    descriptionEn: 'Jesus performs His first miracle at a wedding in Cana, changing water into high-quality wine, revealing His glory.',
    descriptionZh: '耶穌在迦拿的婚宴上施行了祂的第一個神蹟，將水變成上等的酒，顯出祂的榮耀來。',
    references: [
      { bookId: 'JHN', chapter: 2, verseStart: 1, verseEnd: 11 }
    ]
  },
  {
    id: 'cleanse-leper',
    titleEn: '2. Cleansing a Leper',
    titleZh: '2. 潔淨長大痲瘋的神蹟',
    descriptionEn: 'Jesus touches and cleanses a man full of leprosy, showing His willingness to touch the untouchable and restore them.',
    descriptionZh: '耶穌動了慈心，伸手觸摸並潔淨了一個長大痲瘋的人，表明祂樂意醫治社會邊緣被視為不潔的人。',
    references: [
      { bookId: 'MAT', chapter: 8, verseStart: 1, verseEnd: 4 },
      { bookId: 'MRK', chapter: 1, verseStart: 40, verseEnd: 45 },
      { bookId: 'LUK', chapter: 5, verseStart: 12, verseEnd: 16 }
    ]
  },
  {
    id: 'heal-peter-mother-in-law',
    titleEn: "3. Healing Simon Peter's Mother-in-Law",
    titleZh: '3. 醫治彼得岳母的熱病',
    descriptionEn: 'Jesus rebukes the high fever of Simon Peter\'s mother-in-law in Capernaum, and she instantly rises to serve them.',
    descriptionZh: '耶穌在迦百農彼得的家中，斥責彼得岳母正患著的重熱病，她立刻痊癒並起來服事他們。',
    references: [
      { bookId: 'MAT', chapter: 8, verseStart: 14, verseEnd: 15 },
      { bookId: 'MRK', chapter: 1, verseStart: 29, verseEnd: 31 },
      { bookId: 'LUK', chapter: 4, verseStart: 38, verseEnd: 39 }
    ]
  },
  {
    id: 'heal-multitude-sunset',
    titleEn: '4. Healing Many Sick at Sunset',
    titleZh: '4. 日落時醫治趕逐眾人',
    descriptionEn: 'At sunset, the town gathers at the door of Peter\'s house; Jesus heals various diseases and drives out many demons.',
    descriptionZh: '日落時分，全城的人聚集在彼得家門口，耶穌按手在病人身上，醫治百病並趕逐諸多污鬼。',
    references: [
      { bookId: 'MAT', chapter: 8, verseStart: 16, verseEnd: 17 },
      { bookId: 'MRK', chapter: 1, verseStart: 32, verseEnd: 34 },
      { bookId: 'LUK', chapter: 4, verseStart: 40, verseEnd: 41 }
    ]
  },
  {
    id: 'heal-centurion-servant',
    titleEn: "5. Healing the Centurion's Servant",
    titleZh: '5. 醫治百夫長僕人的神蹟',
    descriptionEn: 'Jesus marvels at the faith of a Roman centurion and heals his paralyzed servant from a distance with a spoken word.',
    descriptionZh: '耶穌稀奇羅馬百夫長莫大的信心，僅憑一句話便隔空醫治了他病得快要死、痛苦不堪的僕人。',
    references: [
      { bookId: 'MAT', chapter: 8, verseStart: 5, verseEnd: 13 },
      { bookId: 'LUK', chapter: 7, verseStart: 1, verseEnd: 10 }
    ]
  },
  {
    id: 'heal-paralytic',
    titleEn: '6. Jesus Heals a Paralytic',
    titleZh: '6. 耶穌醫治癱子的神蹟',
    descriptionEn: 'Jesus demonstrates His authority to forgive sins by healing a paralyzed man lowered through a roof by his friends.',
    descriptionZh: '耶穌藉著醫治一個被朋友從屋頂縋下的癱子，在眾人面前公開證明祂擁有赦罪的權柄。',
    references: [
      { bookId: 'MAT', chapter: 9, verseStart: 1, verseEnd: 8 },
      { bookId: 'MRK', chapter: 2, verseStart: 1, verseEnd: 12 },
      { bookId: 'LUK', chapter: 5, verseStart: 17, verseEnd: 26 }
    ]
  },
  {
    id: 'heal-withered-hand',
    titleEn: '7. Jesus Heals a Withered Hand on the Sabbath',
    titleZh: '7. 耶穌安息日醫治枯乾手的人',
    descriptionEn: 'Jesus challenges Sabbath traditions by healing a man with a withered hand, showing that doing good is lawful on the Sabbath.',
    descriptionZh: '耶穌在安息日醫治一個手部枯乾的人，以行動表明安息日行善和救命是合乎神心意的。',
    references: [
      { bookId: 'MAT', chapter: 12, verseStart: 9, verseEnd: 14 },
      { bookId: 'MRK', chapter: 3, verseStart: 1, verseEnd: 6 },
      { bookId: 'LUK', chapter: 6, verseStart: 6, verseEnd: 11 }
    ]
  },
  {
    id: 'raise-widow-son',
    titleEn: "8. Raising the Widow's Son at Nain",
    titleZh: '8. 使拿因城寡婦之子復活',
    descriptionEn: 'Moved with compassion for a grieving widow, Jesus stops a funeral procession and commands the dead young man to sit up and speak.',
    descriptionZh: '耶穌憐憫拿因城痛失獨子的寡婦，上前按住送殯的槓子，吩咐已死的人起來，那人便坐起說話。',
    references: [
      { bookId: 'LUK', chapter: 7, verseStart: 11, verseEnd: 17 }
    ]
  },
  {
    id: 'calm-storm',
    titleEn: '9. Calming the Storm on the Sea',
    titleZh: '9. 耶穌斥責風浪平靜海面',
    descriptionEn: 'Jesus rebukes the raging wind and waves during a violent tempest, causing the disciples to marvel at His authority over nature.',
    descriptionZh: '在加利利海陡起暴風時，耶穌斥責風和浪，使風浪立刻平靜，門徒驚奇於連風和水都聽從了祂。',
    references: [
      { bookId: 'MAT', chapter: 8, verseStart: 23, verseEnd: 27 },
      { bookId: 'MRK', chapter: 4, verseStart: 35, verseEnd: 41 },
      { bookId: 'LUK', chapter: 8, verseStart: 22, verseEnd: 25 }
    ]
  },
  {
    id: 'exorcise-legion',
    titleEn: '10. Exorcism of Legion (Pigs)',
    titleZh: '10. 格拉森釋放被群鬼附身的人',
    descriptionEn: 'Jesus casts out a legion of demons from a violent man living in the tombs, permitting them to enter a herd of pigs that drown in the sea.',
    descriptionZh: '耶穌將住在墳塋、被稱為「群」的污鬼從一個極其兇猛的人身上趕出，鬼入豬群，豬群墜海淹死。',
    references: [
      { bookId: 'MAT', chapter: 8, verseStart: 28, verseEnd: 34 },
      { bookId: 'MRK', chapter: 5, verseStart: 1, verseEnd: 20 },
      { bookId: 'LUK', chapter: 8, verseStart: 26, verseEnd: 39 }
    ]
  },
  {
    id: 'heal-bleeding-woman',
    titleEn: '11. Healing the Woman with Bleeding',
    titleZh: '11. 醫治患了十二年血漏的女人',
    descriptionEn: 'A woman suffering from a chronic discharge of blood for twelve years touches the hem of Jesus\' garment in faith and is instantly healed.',
    descriptionZh: '一個患了十二年血漏的女人憑信心摸了耶穌的衣裳縋子，她的漏源立刻乾涸，痊癒得救。',
    references: [
      { bookId: 'MAT', chapter: 9, verseStart: 20, verseEnd: 22 },
      { bookId: 'MRK', chapter: 5, verseStart: 25, verseEnd: 34 },
      { bookId: 'LUK', chapter: 8, verseStart: 43, verseEnd: 48 }
    ]
  },
  {
    id: 'raise-jairus-daughter',
    titleEn: "12. Raising Jairus' Daughter from the Dead",
    titleZh: '12. 使會堂主管睚魯的女兒復活',
    descriptionEn: 'Jesus enters the home of the synagogue leader Jairus, takes the hand of the dead 12-year-old girl, and commands: "Little girl, arise!"',
    descriptionZh: '耶穌來到睚魯的家，拉著已死去的十二歲女孩的手，吩咐她起來，女孩子的靈魂便立刻回來並站立。',
    references: [
      { bookId: 'MAT', chapter: 9, verseStart: 18, verseEnd: 26 },
      { bookId: 'MRK', chapter: 5, verseStart: 21, verseEnd: 43 },
      { bookId: 'LUK', chapter: 8, verseStart: 40, verseEnd: 56 }
    ]
  },
  {
    id: 'exorcise-mute-demoniac',
    titleEn: '13. Exorcising a Mute Demoniac',
    titleZh: '13. 趕出啞巴鬼使人說話',
    descriptionEn: 'Jesus casts out a demon from a man who was mute, enabling him to speak instantly, which amazes the crowds but angers the Pharisees.',
    descriptionZh: '耶穌趕出附在一個啞巴身上的鬼，鬼出去後，啞巴立刻說出話來，眾人都驚奇，法利賽人卻心懷惡意。',
    references: [
      { bookId: 'MAT', chapter: 9, verseStart: 32, verseEnd: 34 }
    ]
  },
  {
    id: 'feed-5000',
    titleEn: '14. Feeding the 5,000',
    titleZh: '14. 五餅二魚使五千人吃飽',
    descriptionEn: 'Jesus multiplies five loaves and two fish to feed over five thousand people in a desolate place, with twelve baskets of leftovers remaining.',
    descriptionZh: '耶穌在野地裡望天祝謝，分開五個大麥餅和兩條小魚，餵飽了五千男丁，收拾的零碎裝滿了十二個籃子。',
    references: [
      { bookId: 'MAT', chapter: 14, verseStart: 13, verseEnd: 21 },
      { bookId: 'MRK', chapter: 6, verseStart: 30, verseEnd: 44 },
      { bookId: 'LUK', chapter: 9, verseStart: 10, verseEnd: 17 },
      { bookId: 'JHN', chapter: 6, verseStart: 1, verseEnd: 14 }
    ]
  },
  {
    id: 'walk-on-water',
    titleEn: '15. Jesus Walking on the Water',
    titleZh: '15. 耶穌在加利利海面上行走',
    descriptionEn: 'Jesus walks on the wind-swept Sea of Galilee in the dark to reach His struggling disciples in their boat, and Peter temporarily walks on water.',
    descriptionZh: '在風浪大作的夜間，耶穌在海面上朝向因搖櫓甚苦的門徒走去，彼得也因信在水面上行走了一段。',
    references: [
      { bookId: 'MAT', chapter: 14, verseStart: 22, verseEnd: 33 },
      { bookId: 'MRK', chapter: 6, verseStart: 45, verseEnd: 52 },
      { bookId: 'JHN', chapter: 6, verseStart: 16, verseEnd: 21 }
    ]
  },
  {
    id: 'feed-4000',
    titleEn: '16. Feeding the 4,000',
    titleZh: '16. 七餅與幾條小魚餵飽四千人',
    descriptionEn: 'Compassionate for a crowd that had been with Him for three days, Jesus multiplies seven loaves and a few small fish to feed four thousand.',
    descriptionZh: '耶穌憐憫同祂在曠野待了三天、無物可吃的群眾，用七個餅和幾條小魚餵飽了四千人，零碎裝滿了七個筐子。',
    references: [
      { bookId: 'MAT', chapter: 15, verseStart: 32, verseEnd: 39 },
      { bookId: 'MRK', chapter: 8, verseStart: 1, verseEnd: 9 }
    ]
  },
  {
    id: 'heal-bethesda-invalid',
    titleEn: '17. Healing the Bethesda Pool Invalid',
    titleZh: '17. 醫治畢士大池邊癱瘓三十八年的人',
    descriptionEn: 'On the Sabbath, Jesus heals a man paralyzed for thirty-eight years at the Pool of Bethesda, commanding him to carry his mat.',
    descriptionZh: '在安息日，耶穌在耶路撒冷畢士大池邊醫治了一個病了三十八年的人，吩咐他拿起褥子行走，引起宗教領袖的不滿。',
    references: [
      { bookId: 'JHN', chapter: 5, verseStart: 1, verseEnd: 18 }
    ]
  },
  {
    id: 'heal-born-blind',
    titleEn: '18. Healing the Man Born Blind',
    titleZh: '18. 醫治生來就瞎眼的人',
    descriptionEn: 'Jesus spits on the ground to make mud, anoints the eyes of a man born blind, and commands him to wash in the Pool of Siloam.',
    descriptionZh: '耶穌用唾沫和泥抹在生來瞎眼者的眼睛上，打發他往西羅亞池子裡去洗，他洗完後便重見光明。',
    references: [
      { bookId: 'JHN', chapter: 9, verseStart: 1, verseEnd: 7 }
    ]
  },
  {
    id: 'raise-lazarus',
    titleEn: '19. Raising Lazarus from the Dead',
    titleZh: '19. 使死去四天的拉撒路復活',
    descriptionEn: 'Jesus travels to Bethany, calls out "Lazarus, come out!" to a tomb sealed for four days, demonstrating His power over death.',
    descriptionZh: '耶穌來到拉撒路被葬四天的墳墓前大聲呼叫：「拉撒路出來！」死人就出來了，證明耶穌是復活與生命。',
    references: [
      { bookId: 'JHN', chapter: 11, verseStart: 1, verseEnd: 44 }
    ]
  },
  {
    id: 'heal-blind-bartimaeus',
    titleEn: '20. Healing Blind Bartimaeus',
    titleZh: '20. 在耶利哥醫治瞎子巴底買',
    descriptionEn: 'As Jesus leaves Jericho, a persistent blind beggar cries out for mercy. Impressed by his faith, Jesus restores his sight immediately.',
    descriptionZh: '耶穌出耶利哥時，瞎子巴底買大聲呼喊求人子憐憫，耶穌見他的信心，說：「你的信救了你」，他立刻能看見。',
    references: [
      { bookId: 'MAT', chapter: 20, verseStart: 29, verseEnd: 34 },
      { bookId: 'MRK', chapter: 10, verseStart: 46, verseEnd: 52 },
      { bookId: 'LUK', chapter: 18, verseStart: 35, verseEnd: 43 }
    ]
  },
  {
    id: 'curse-fig-tree',
    titleEn: '21. Cursing the Withered Fig Tree',
    titleZh: '21. 咒詛無花果樹使其立刻枯乾',
    descriptionEn: 'Jesus curses a leafy but fruitless fig tree on His way to Jerusalem, which withers by the next morning, teaching a lesson on faith and fruitfulness.',
    descriptionZh: '耶穌在耶路撒冷路上咒詛了一棵葉子茂密卻毫無果子的無花果樹，樹隨即枯乾，以此教導信心與屬靈生命的果效。',
    references: [
      { bookId: 'MAT', chapter: 21, verseStart: 18, verseEnd: 22 },
      { bookId: 'MRK', chapter: 11, verseStart: 12, verseEnd: 14 }
    ]
  },
  {
    id: 'creation',
    titleEn: 'The Creation of the Heavens and Earth',
    titleZh: '天地萬物的創造',
    descriptionEn: 'The account of God creating the universe and light out of nothing in the beginning.',
    descriptionZh: '起初神創造宇宙、光以及天地萬物的詳細過程。',
    references: [
      { bookId: 'GEN', chapter: 1, verseStart: 1, verseEnd: 5 }
    ]
  },
  {
    id: 'gods-love',
    titleEn: 'The Love of God & Nicodemus Encounter',
    titleZh: '神的愛與尼哥底母的對話',
    descriptionEn: 'Jesus explains salvation, spiritual rebirth, and God\'s supreme love for mankind to Nicodemus.',
    descriptionZh: '耶穌向尼哥底母闡明重生、得救的真理，以及上帝對世人極大的愛。',
    references: [
      { bookId: 'JHN', chapter: 3, verseStart: 14, verseEnd: 21 }
    ]
  }
];

export const MAP_LOCATIONS: Record<string, MapLocation> = {
  capernaum: {
    id: 'capernaum',
    nameEn: 'Capernaum',
    nameZh: '迦百農',
    latitude: 32.8808,
    longitude: 35.5752,
    descriptionEn: 'A fishing village on the northern shore of the Sea of Galilee. It was Jesus\' home base during His Galilean ministry and the site of many miracles, including healing the paralytic.',
    descriptionZh: '位於加利利海北岸的漁村。這是耶穌在加利利傳道期間的基地，也是祂施行許多神蹟的發生地，包括醫治癱子。'
  },
  jerusalem: {
    id: 'jerusalem',
    nameEn: 'Jerusalem',
    nameZh: '耶路撒冷',
    latitude: 31.7683,
    longitude: 35.2137,
    descriptionEn: 'The ancient capital of Israel, site of the Temple, and center of Jewish worship. It was the location of Jesus\' teachings during major feasts and His eventual crucifixion and resurrection.',
    descriptionZh: '以色列的古老首都，聖殿所在地，猶太教崇拜的中心。這是耶穌在重大節日期間教導人的地方，也是祂最終被釘十字架和復活的地方。'
  },
  galilee: {
    id: 'galilee',
    nameEn: 'Sea of Galilee',
    nameZh: '加利利海',
    latitude: 32.8123,
    longitude: 35.5906,
    descriptionEn: 'A freshwater lake in northern Israel, around which much of Jesus\' public ministry took place, including calling His disciples and calming the storm.',
    descriptionZh: '以色列北部的一個淡水湖。耶穌的大部分公開傳道事工都圍繞此地展開，包括呼召門徒和平息風浪。'
  },
  judea: {
    id: 'judea',
    nameEn: 'Judea',
    nameZh: '猶太地',
    latitude: 31.6989,
    longitude: 35.0676,
    descriptionEn: 'The southern, mountainous region of Palestine. Jerusalem is situated in Judea, and the region is frequently referenced in parallel with Galilee and Samaria.',
    descriptionZh: '巴勒斯坦南部的山區。耶路撒冷位於猶太地，該地區經常與加利利和撒瑪利亞並列提及。'
  }
};

export const COMMENTARIES: Record<string, Commentary> = {
  'JHN:3': {
    id: 'commentary-jhn3',
    passage: 'John 3:1-21',
    titleEn: 'The New Birth and God\'s Great Love',
    titleZh: '重生與神極大的愛',
    paragraphsEn: [
      'John 3 contains the foundational truths of Christian doctrine. Nicodemus, a ruler of the Jews, comes to Jesus by night. Jesus immediately tells him that a man must be born again to see the Kingdom of God.',
      'In John 3:16, we see the heart of the Gospel: God\'s motive is love, His scope is the world, His gift is His unique Son, His requirement is simple trust, and His promise is escape from ruin and the gift of eternal life.',
      'The passage contrasts light and darkness. Those who do evil hate the light, but those who practice truth come to the light so their deeds may be shown as carried out in God.'
    ],
    paragraphsZh: [
      '約翰福音第三章包含了基督教教義的根本真理。猶太人的官尼哥底母夜裡來見耶穌，耶穌隨即告訴他，人必須重生才能看見神的國。',
      '在約翰福音 3:16 中，我們看到了福音的核心：神的動機是愛，祂的範圍是世人，祂的禮物是祂的獨生子，祂的要求是單純的信靠，祂的應許是免於滅亡並獲得永生。',
      '這段經文對比了光與黑暗。行惡的人恨光，但實行真理的人來就光，好顯明他們所行的是靠神而行的。'
    ]
  },
  'JHN:1': {
    id: 'commentary-jhn1',
    passage: 'John 1:1-14',
    titleEn: 'The Incarnation of the Eternal Word',
    titleZh: '永恆之道的道成肉身',
    paragraphsEn: [
      'John begins his Gospel by echoing Genesis 1:1, establishing the pre-existence and full deity of Jesus Christ, referred to as the Word (Logos).',
      'The Word is described as the agent of creation, the source of life, and the light of mankind that the darkness cannot overcome. John the Baptist bore witness to this light.',
      'In verse 14, the climax of the prologue, the Word becomes flesh and dwells among us, revealing the Father\'s glory, full of grace and truth.'
    ],
    paragraphsZh: [
      '約翰在他的福音書開頭呼應了創世記 1:1，確立了耶穌基督（被稱為「道」或 Logos）的先在性和完全的神性。',
      '道被描述為創造的媒介、生命的源頭、以及黑暗無法勝過的人類之光。施洗約翰為這光作見證。',
      '在第 14 節，即序言的高潮中，道成了肉身，住在我們中間，彰顯了父的榮耀，充滿了恩典和真理。'
    ]
  },
  'GEN:1': {
    id: 'commentary-gen1',
    passage: 'Genesis 1:1-5',
    titleEn: 'Creation Out of Nothing',
    titleZh: '無中生有的創造',
    paragraphsEn: [
      'Genesis 1 introduces God as the sovereign Creator of the universe. In the beginning, the earth was formless and void, and darkness was over the deep.',
      'God creates simply by speaking: "Let there be light," and light immediately comes into existence. He separates the light from the darkness, calling them Day and Night.',
      'This establishes that God exists prior to and independent of creation, and everything created is subject to His spoken command.'
    ],
    paragraphsZh: [
      '創世記第一章介紹了神是宇宙至高的創造者。起初，地是空虛混沌，淵面黑暗。',
      '上帝僅僅藉著說話來創造：「要有光」，光就立馬出現了。祂將光暗分開，稱它們為晝和夜。',
      '這確立了神在創造之前就已存在並獨立於創造物，所有受造之物都服從祂的口頭命令。'
    ]
  },
  'PSA:23': {
    id: 'commentary-psa23',
    passage: 'Psalms 23',
    titleEn: 'The Lord is My Shepherd',
    titleZh: '耶和華是我的牧者',
    paragraphsEn: [
      'David describes his relationship with God using the metaphor of a shepherd and his sheep. The Lord provides all needs: rest in green pastures and refreshment beside quiet waters.',
      'Even when walking through the darkest valley (the shadow of death), the sheep fear no evil because the shepherd is present, guiding with His rod and staff.',
      'The metaphor transitions to a banquet where God prepares a table in the presence of enemies, anoints the head with oil, and promises goodness and mercy for life.'
    ],
    paragraphsZh: [
      '大衛用牧羊人與羊的隱喻來描述他與神的關係。耶和華供應他所有的需要：在青草地上休息，在可安歇的水邊重新得力。',
      '即使走過最黑暗的幽谷（死蔭的幽谷），羊也不怕遭害，因為牧羊人與牠同在，用祂的杖和竿來引導和安慰。',
      '隱喻隨後過渡到一個宴會，神在敵人面前為大衛擺設筵席，用油膏了他的頭，並應許一生一世有恩惠慈愛相隨。'
    ]
  },
  'water-into-wine': {
    id: 'commentary-water-into-wine',
    passage: 'John 2:1-11',
    titleEn: 'The First Sign: Revealing the Glory of Christ',
    titleZh: '第一個神蹟：彰顯基督的榮耀',
    paragraphsEn: [
      'Jesus\' first public miracle, turning water into wine at the wedding in Cana, is designated by John as the "first of his signs." It sets the tone for His entire ministry, highlighting transformation, abundance, and the joy of the new covenant.',
      'Water represents the old Jewish system of purification, stored in six stone water jars. By transforming this water into choice wine, Jesus symbolically shows that He has come to fulfill and transcend the old covenant rituals with the wine of the kingdom, representing joy and spiritual vitality.',
      'John highlights that this sign "manifested his glory; and his disciples believed in him." The ultimate purpose of Jesus\' miracles was not mere showmanship, but to point to His identity as the divine Son of God.'
    ],
    paragraphsZh: [
      '耶穌的第一個公開神蹟是迦拿婚宴上的「變水為酒」，約翰將其定為「神蹟的起頭」。這奠定了祂整個事工的基調，強調了生命的蛻變、豐盛，以及新約所帶來的喜樂。',
      '水代表了猶太人潔淨禮儀的舊規條，盛裝在六口石缸裡。耶穌將這些水變成上好的美酒，象徵性地表明祂來是要用天國的筵席喜樂，去成全並超越那死板、殘缺的舊約潔淨條規。',
      '約翰特別強調，這個神蹟「顯出祂的榮耀來，祂的門徒就信祂了」。耶穌行神蹟的終極目的不是自我炫耀，而是指向祂作為神兒子的神聖身份。'
    ]
  },
  'cleanse-leper': {
    id: 'commentary-cleanse-leper',
    passage: 'Matthew 8:1-4, Mark 1:40-45, Luke 5:12-16',
    titleEn: 'Compassion Transcending Ritual Uncleanliness',
    titleZh: '超越禮儀不潔的聖潔同情心',
    paragraphsEn: [
      'The healing of the leper demonstrates Jesus\' absolute authority over sickness and His deep compassion. In Jewish society, lepers were social outcasts, deemed ritually unclean under Levitical law.',
      'By reaching out and touching the leper, Jesus broke social and religious taboos. Instead of becoming unclean Himself by the contact, Jesus\' purity and power transferred to the leper, cleansing him instantly. This reveals Jesus as the source of holiness that overcomes contamination.',
      'Jesus commands the cleansed man to show himself to the priest and offer the sacrifice commanded by Moses "as a testimony to them," showing that He respects the law of Moses while manifesting a new, active healing authority.'
    ],
    paragraphsZh: [
      '醫治長大痲瘋的人展示了耶穌對疾病的絕對主權和深切的同情心。在猶太社會中，長大痲瘋的人是社會的棄兒，在利未記律法下被視為「不潔淨」的。',
      '耶穌伸手觸摸他，打破了當時的宗教與社會禁忌。耶穌非但沒有因為這種接觸而變得不潔，相反，祂聖潔的醫治大能傳遞給了那人，使言之立刻得潔淨。這表明耶穌是勝過世上一切污穢與污染的聖潔源頭。',
      '耶穌命令這個得潔淨的人去給祭司察看，並獻上摩西所吩咐的禮物，以此「對眾人作證據」，表明祂雖然帶來了超越舊律法的大能，但依舊尊重摩西的律法體系。'
    ]
  },
  'heal-peter-mother-in-law': {
    id: 'commentary-heal-peter-mother-in-law',
    passage: 'Matthew 8:14-15, Mark 1:29-31, Luke 4:38-39',
    titleEn: 'Restoration for Service in the Home',
    titleZh: '家庭中的醫治與起而服事',
    paragraphsEn: [
      'The healing of Simon Peter\'s mother-in-law shows Jesus\' care for the domestic and personal needs of His followers. In Capernaum, after entering Simon\'s house, He finds her suffering from a severe fever.',
      'Jesus touches her hand (or rebukes the fever, as Luke the physician records) and the fever immediately leaves her. The instantaneous nature of the cure is proven by her immediate action: she stood up and began to serve them. This underscores that divine restoration is designed to enable disciples to serve.',
      'This intimate household miracle demonstrates that Jesus is Lord not just in public synagogues, but also within the private walls of our homes, bringing peace and healing to the family.'
    ],
    paragraphsZh: [
      '醫治彼得岳母的神蹟顯示了耶穌對門徒家庭和個人切身需要的關懷。在迦百農進了西門彼得的家後，祂看見西門的岳母正害重熱病躺著。',
      '耶穌摸她的手（或者如醫生路加所記，斥責那熱病），熱就立刻退了。這醫治的徹底性與瞬間性在她的行動中得到了證實：她立刻起來服事他們。這強調了神的恢復和醫治是為了使門徒能夠更好地投入事奉。',
      '這個發生在私人住宅裡的小神蹟表明，耶穌不僅是會堂等公共場所的主，也是我們家庭私密生活中的主，能在家庭中帶來平安與醫治。'
    ]
  },
  'heal-multitude-sunset': {
    id: 'commentary-heal-multitude-sunset',
    passage: 'Matthew 8:16-17, Mark 1:32-34, Luke 4:40-41',
    titleEn: 'The Burden Bearer and Fulfillment of Isaiah',
    titleZh: '背負重擔的醫治者與以賽亞預言的成就',
    paragraphsEn: [
      'As Sabbath ended at sunset, the local crowd brought all their sick and demon-possessed to the door of Peter\'s house. Jesus healed them all, showing His limitless mercy.',
      'Matthew highlights this event as the fulfillment of Isaiah 53:4: "He took our illnesses and bore our diseases." This reveals Jesus not as a detached miracle worker, but as the suffering servant who actively carries the heavy weight of human frailty.',
      'By rebuking demons and forbidding them to speak because they knew He was the Christ, Jesus manages the timing of His self-revelation, choosing the path of humble service over popular political excitement.'
    ],
    paragraphsZh: [
      '當安息日在日落結束時，城裡的人紛紛把一切有病的和被鬼附的抬到彼得家門口。耶穌按手在他們各人身上，醫治了他們，顯示出祂無限的憐憫。',
      '馬太福音特別指出，這應驗了先知以賽亞的預言：「祂代替我們的軟弱，擔當我們的疾病。」防揭示了耶穌不是一個高高在上的奇術師，而是那位親自進入人類痛苦、背負人類軟弱的憂患之子。',
      '耶穌在趕鬼時不許鬼說話，因為鬼認出祂是基督。這體現了祂對自己身份顯明之時機的掌控，祂選擇了謙卑服侍的道路，而非迎合大眾政治的狂熱。'
    ]
  },
  'heal-centurion-servant': {
    id: 'commentary-heal-centurion-servant',
    passage: 'Matthew 8:5-13, Luke 7:1-10',
    titleEn: 'Great Faith and Gentile Inclusion',
    titleZh: '莫大的信心與外邦人的蒙恩',
    paragraphsEn: [
      'A Roman centurion seeks Jesus\' help for his paralyzed servant. Recognizing Jesus\' divine authority, the centurion states that Jesus does not need to enter his house, but only needs to "say the word" for the servant to be healed.',
      'Jesus marvels at the centurion\'s faith, declaring that He has not found such great faith even in Israel. This miracle foreshadows the inclusion of the Gentiles into the Kingdom of God, based on faith rather than Jewish lineage.',
      'The servant is healed at that very hour, demonstrating the sovereign power of Jesus\' spoken word that transcends physical distance.'
    ],
    paragraphsZh: [
      '一位羅馬百夫長為他癱瘓的僕人尋求耶穌的幫助。百夫長承認耶穌的神聖權柄，表示耶穌不需要親自進到他的屋裡，只要「說一句話」，他的僕人就必好了。',
      '耶穌稀奇這百夫長的信心，宣告說在以色列中，祂也沒有見過這麼大的信心。這件神蹟預示了基於信心（而非猶太血統）的外邦人將被接納進入上帝的國度。',
      '就在那時候，僕人就好了，這證實了耶穌口中所出的話語具有跨越物理距離的至高主權與能力。'
    ]
  },
  'heal-paralytic': {
    id: 'commentary-heal-paralytic',
    passage: 'Matthew 9:1-8, Mark 2:1-12, Luke 5:17-26',
    titleEn: 'Jesus Heals and Forgives the Paralytic',
    titleZh: '6. 耶穌醫治並赦免癱子',
    paragraphsEn: [
      'This miraculous healing is recorded in all three Synoptic Gospels. It highlights the determination of the paralyzed man\'s friends, who dug through the roof of a house in Capernaum to lower him to Jesus.',
      'Seeing their faith, Jesus first says, "Your sins are forgiven." The scribes and Pharisees immediately accuse Him of blasphemy, correctly identifying that only God can forgive sins.',
      'To prove His authority, Jesus commands the man to stand, take up his bed, and walk. The man immediately does so, leaving the crowd amazed and glorifying God. This illustrates that physical healing served to validate Jesus\' spiritual authority to forgive sins.'
    ],
    paragraphsZh: [
      '這件神蹟性的醫治被記錄在所有三卷同觀福音書中。它突出了癱子朋友們的決心，他們在迦百農挖通了一座房子的屋頂，把癱子縋到耶穌面前。',
      '耶穌見他們的信心，先說：「你的罪赦了。」文士和法利賽人隨即指控祂說僭妄的話，因為他們正確地認識到只有神才能赦罪。',
      '為了證明祂的權柄，耶穌命令那人站起來，拿起他的褥子回家去。那人立刻照做了，使群眾大為驚奇並歸榮耀給神。這說明肉體的醫治是為了證實耶穌擁有赦免罪惡的屬靈權柄。'
    ]
  },
  'heal-withered-hand': {
    id: 'commentary-heal-withered-hand',
    passage: 'Matthew 12:9-14, Mark 3:1-6, Luke 6:6-11',
    titleEn: 'Jesus Heals on the Sabbath',
    titleZh: '7. 耶穌安息日治好萎縮的手',
    paragraphsEn: [
      'This incident marks a turning point in the Gospels. The Pharisees are watching Jesus to see if He heals on the Sabbath, hoping to accuse Him. Jesus demonstrates that human need takes priority over rigid legalistic restrictions.',
      'Jesus uses the illustration of a sheep falling into a pit (in Matthew) to argue that humans are of much greater value than animals. He shows that doing good and saving life is the true intent of the Sabbath.',
      'Following this miracle, the hostility of the religious leaders intensifies as they plot how to destroy Him. This foreshadows the growing opposition leading to His crucifixion.'
    ],
    paragraphsZh: [
      '這起事件標誌著福音書中耶穌事工的轉折點。法利賽人窺探耶穌是否在安息日醫治人，目的是要控告祂。耶穌證明了，人的切實需要高於死板律法的宗教限制。',
      '耶穌（在馬太福音中）使用羊掉入坑裡的比喻，論證人比動物貴重得多。祂表明在安息日行善和救命，才是設立安息日的真正本意。',
      '在此次神蹟之後，宗教領袖的敵意劇增，甚至開始密謀要除滅祂，這為耶穌日後被釘十字架的衝突埋下了伏筆。'
    ]
  },
  'raise-widow-son': {
    id: 'commentary-raise-widow-son',
    passage: 'Luke 7:11-17',
    titleEn: 'Compassion in the Face of Death',
    titleZh: '面對死亡時的主權憐憫',
    paragraphsEn: [
      'As Jesus approaches the town gate of Nain, He encounters a funeral procession for the only son of a widow. Seeing her grief, Jesus\' heart goes out to her, and He says, "Do not weep."',
      'Jesus touches the open coffin, stopping the procession, and speaks directly to the corpse: "Young man, I say to you, arise." The dead man sits up and begins to speak, and Jesus gives him back to his mother.',
      'This miracle demonstrates Jesus\' authority over death itself. The crowd is filled with fear and glorifies God, declaring that "a great prophet has arisen among us," recalling the miracles of Elijah and Eians.'
    ],
    paragraphsZh: [
      '當耶穌走近拿因城門時，遇見一個送殯的隊伍，死者是一個寡婦的獨生子。看見她的哀慟，耶穌對她動了慈心，說：「不要哭。」',
      '耶穌上前按住棺材，使送殯的隊伍停下來，直接對屍體說話：「少年人，我吩咐你，起來！」死人就坐起來，並且說話，耶穌便把他交給他母親。',
      '這件神蹟展現了耶穌對死亡本身的主權。群眾都驚奇敬畏，歸榮耀給神說：「有大先知在我們中間興起來了！」這使人想起了昔日先知以利亞和以利沙的神蹟。'
    ]
  },
  'calm-storm': {
    id: 'commentary-calm-storm',
    passage: 'Matthew 8:23-27, Mark 4:35-41, Luke 8:22-25',
    titleEn: 'Lord Over Wind and Waves',
    titleZh: '掌管風浪的宇宙主宰',
    paragraphsEn: [
      'While crossing the Sea of Galilee, a sudden violent storm threatens to swamp the boat. As the disciples panic, Jesus is asleep on a cushion, showing absolute peace and trust in the Father.',
      'Woken by His terrified disciples, Jesus rebukes the wind and the sea, commanding: "Peace! Be still!" Instantly, the wind ceases and there is a great calm. He then challenges the disciples: "Why are you so afraid? Have you still no faith?"',
      'This nature miracle reveals Jesus\' divine identity. The disciples are filled with holy awe, asking, "Who then is this, that even the wind and the sea obey him?" only God has authority to calm the seas.'
    ],
    paragraphsZh: [
      '在渡過加利利海時，一場突如其來的暴風雨幾乎要淹沒船隻。當門徒陷入極度恐慌時，耶穌卻在枕頭上睡著了，展現了對天父絕對的平安與信靠。',
      '被驚恐的門徒喚醒後，耶穌斥責風和海，吩咐說：「住了吧！靜了吧！」風就立刻止住，大大地平靜了。隨後祂質問門徒：「為什麼膽怯？你們還沒有信心嗎？」',
      '這起大自然神蹟揭示了耶穌的神聖身份。門徒滿心敬畏，彼此問道：「這到底是誰，連風和海也聽從祂了？」在舊約中，只有上帝擁有平息風浪的權柄。'
    ]
  },
  'exorcise-legion': {
    id: 'commentary-exorcise-legion',
    passage: 'Matthew 8:28-34, Mark 5:1-20, Luke 8:26-39',
    titleEn: 'Deliverance and Restored Humanity',
    titleZh: '屬靈的釋放與人性的恢復',
    paragraphsEn: [
      'In the region of the Gerasenes, Jesus encounters a man possessed by a legion of demons, living in tombs, naked, and self-harming. The demoniac falls before Jesus, acknowledging Him as the "Son of the Most High God."',
      'Jesus commands the unclean spirits to leave the man. They beg to be sent into a nearby herd of pigs; Jesus permits it, and the herd of about two thousand pigs rushes down the steep bank into the lake and drowns.',
      'The townspeople find the man sitting at Jesus\' feet, dressed and in his right mind, which terrifies them. While they ask Jesus to leave, Jesus instructs the restored man to go home and tell his family how much the Lord has done for him, establishing a missionary witness in Decapolis.'
    ],
    paragraphsZh: [
      '在格拉森人的地方，耶穌遇見一個被「群」鬼附身的人，他住在墳塋裡，不穿衣服，用石頭傷害自己。那被鬼附的人俯伏在耶穌面前，承認祂是「至高神的兒子」。',
      '耶穌命令污鬼從那人身上出來。鬼央求投進附近的豬群裡；耶穌准了牠們，約有二千隻的豬群就闖下山崖，投進海裡淹死了。',
      '城裡的人看見那人坐在耶穌腳前，穿著衣服，心裡明白過來，就害怕起來。雖然眾人央求耶穌離開，但耶穌吩咐那得恢復的人回家去，傳揚主為他做了何等大的事，在低加波利建立了宣教的見證。'
    ]
  },
  'heal-bleeding-woman': {
    id: 'commentary-heal-bleeding-woman',
    passage: 'Matthew 9:20-22, Mark 5:25-34, Luke 8:43-48',
    titleEn: 'The Touch of Faith in a Pressing Crowd',
    titleZh: '擁擠人群中信心的觸摸',
    paragraphsEn: [
      'While Jesus is on His way to Jairus\' house, a woman who has suffered from chronic bleeding for twelve years approaches Him from behind. Having spent all her money on doctors to no avail, she believes that touching His garment will heal her.',
      'She touches the fringe of His garment and is instantly healed. Jesus stops, asking, "Who touched me?" despite the crowding. He brings her to the light, not to shame her, but to confirm her physical healing and praise her faith publicly.',
      'Jesus says to her, "Daughter, your faith has made you well; go in peace." He restores not only her health but also her social and religious standing, calling her "Daughter" with tender love.'
    ],
    paragraphsZh: [
      '在耶穌前往睚魯家的途中，一個患了十二年血漏的女人從後面走近祂。她看過許多醫生，花盡了所有積蓄卻毫無起色，她深信只要摸到耶穌的衣裳，就必痊癒。',
      '她摸了耶穌的衣裳繸子，血漏立刻止住了。儘管人群擁擠，耶穌依然停下來問：「摸我的是誰？」祂將她帶到眾人面前，不是為了讓她難堪，而是要證實她的醫治並公開肯定她的信心。',
      '耶穌對她說：「女兒，你的信救了你；平平安安地回去吧！」祂不僅醫治了她的身體，還恢復了她的社會和宗教地位，並極其溫柔地稱呼她為「女兒」。'
    ]
  },
  'raise-jairus-daughter': {
    id: 'commentary-raise-jairus-daughter',
    passage: 'Matthew 9:18-26, Mark 5:21-43, Luke 8:40-56',
    titleEn: 'Victory Over Grief and Death',
    titleZh: '戰勝悲哀與死亡的權能',
    paragraphsEn: [
      'Jairus, a ruler of the synagogue, begs Jesus to heal his dying twelve-year-old daughter. Along the way, news arrives that the girl has died, but Jesus encourages Jairus: "Do not fear, only believe."',
      'Entering the house, Jesus dismisses the professional mourners who laugh at His statement, "The child is not dead but sleeping." Taking only Peter, James, John, and the parents, He enters the room.',
      'Jesus takes the girl\'s hand and says, "Talitha cumi," which means, "Little girl, I say to you, arise." She immediately stands up and walks, leaving everyone completely astonished. Jesus orders them to give her something to eat, proving she is fully alive.'
    ],
    paragraphsZh: [
      '會堂主管睚魯哀求耶穌去醫治他病危的十二歲女兒。在途中，有人傳來消息說女孩已經死了，但耶穌安慰睚魯說：「不要怕，只要信！」',
      '進了屋子，耶穌遣散了那些嘲笑祂說「孩子不是死了，是睡著了」的哭喪人群。祂只帶著彼得、雅各、安德烈、約翰和女孩的父母進了房間。',
      '耶穌拉著女孩的手，對她說：「大利大古米！」（意為：閨女，我吩咐你起來！）。女孩立刻起來行走，眾人極其驚奇。耶穌吩咐給她東西吃，證實她已完全復活並康復。'
    ]
  },
  'exorcise-mute-demoniac': {
    id: 'commentary-exorcise-mute-demoniac',
    passage: 'Matthew 9:32-34',
    titleEn: 'Opening Mute Lips and Spiritual Polarization',
    titleZh: '開啟啞巴之口與屬靈的兩極分化',
    paragraphsEn: [
      'A man possessed by a demon that made him mute is brought to Jesus. Once the demon is cast out, the mute man speaks instantly. The crowds are amazed, saying, "Never was anything like this seen in Israel."',
      'This brief miracle illustrates the power of Jesus to restore speech and communication, reflecting the messianic promise in Isaiah 35:6 that the tongue of the mute will sing.',
      'However, this miracle also triggers spiritual hostility. The Pharisees state, "He casts out demons by the prince of demons," showing their progressive spiritual blindness and setting up the blasphemy against the Holy Spirit.'
    ],
    paragraphsZh: [
      '有人把一個被鬼附、不能說話的啞巴帶到耶穌跟前。鬼被趕出去後，啞巴立刻開口說話了。眾人極其驚奇，說：「在以色列中，從來沒有見過這樣的事。」',
      '這件簡短的神蹟展示了耶穌恢復人言語與溝通能力的大能，應驗了以賽亞書 35:6 的彌賽亞應許：「啞巴的舌頭必能歌唱」。',
      '然而，這件神蹟也引發了屬靈上的強烈敵意。法利賽人誹謗說：「祂是靠著鬼王趕鬼。」這暴露了他們屬靈上日益严重的盲目，也為日後對聖靈的褻瀆埋下了伏筆。'
    ]
  },
  'feed-5000': {
    id: 'commentary-feed-5000',
    passage: 'Matthew 14:13-21, Mark 6:30-44, Luke 9:10-17, John 6:1-14',
    titleEn: 'The Bread of Life in the Wilderness',
    titleZh: '曠野中的生命之糧',
    paragraphsEn: [
      'The feeding of the five thousand is the only miracle of Jesus recorded in all four Gospels. It takes place in a remote area near Bethsaida, where Jesus multiplies five loaves and two fish provided by a young boy.',
      'Jesus acts as the host of a massive divine banquet, mirroring Moses in the wilderness providing manna and pointing forward to the Last Supper. The twelve baskets of leftovers symbolize complete provision for the twelve tribes of Israel.',
      'In John 6, Jesus uses this physical miracle as the foundation for His major discourse on the Bread of Life, showing that He is the source of spiritual sustenance that gives eternal life.'
    ],
    paragraphsZh: [
      '「五餅二魚」是耶穌唯一在四卷福音書中都有記載的神蹟。這件神蹟發生在伯賽大附近的野地，耶穌用一個孩童所提供的五個大麥餅和兩條小魚進行了神奇的倍增。',
      '耶穌作為這場龐大筵席的主人，讓人想起了昔日摩西在曠野降下嗎哪，同時也預示了最後的晚餐。剩下的十二籃零碎象徵著對以色列十二個支派的豐盛供應。',
      '在約翰福音第六章中，耶穌以這件物質的神蹟為基礎，發表了著名的「生命之糧」講論，表明祂才是賜予世人屬靈生命、使人得永生的真糧。'
    ]
  },
  'walk-on-water': {
    id: 'commentary-walk-on-water',
    passage: 'Matthew 14:22-33, Mark 6:45-52, John 6:16-21',
    titleEn: 'The Divine Identity Revealed on the Sea',
    titleZh: '在海面上彰顯的神聖身份',
    paragraphsEn: [
      'After feeding the 5,000, Jesus sends His disciples ahead by boat while He prays alone on a mountain. During the night, the disciples struggle against a strong headwind. Jesus walks on the water toward them.',
      'When the disciples cry out in fear, thinking He is a ghost, Jesus reassures them: "Take heart; it is I. Do not be afraid." The phrase "It is I" translates the Greek \'ego eimi,\' matching the divine covenant name of God (I AM).',
      'Matthew uniquely records Peter stepping out of the boat to walk on water, sinking when he focuses on the wind rather than Jesus. When Jesus enters the boat, the wind immediately ceases, and the disciples worship Him as the "Son of God."'
    ],
    paragraphsZh: [
      '在餵飽五千人之後，耶穌催門徒坐船先渡河，自己則獨自上山禱告。到了夜間，門徒因逆風搖櫓甚苦。耶穌在海面上朝著他們走去。',
      '門徒看見耶穌在海面上走，以為是鬼怪，就驚慌呼喊。耶穌連忙對他們說：「你們放心！阻是我（It is I），不要怕！」這句「是我」在希臘原文中是 ego eimi，等同於神在舊約宣告的立約名字「我是」（I AM）。',
      '馬太福音獨家記載了彼得嘗試在水面上朝耶穌走去，但因看風浪害怕而下沉。耶穌拉住他並一同上船，風浪就立刻平靜了，門徒隨即拜祂說：「你真是神的兒子了！」'
    ]
  },
  'feed-4000': {
    id: 'commentary-feed-4000',
    passage: 'Matthew 15:32-39, Mark 8:1-9',
    titleEn: 'Abundant Grace for the Gentiles',
    titleZh: '外邦邊界的豐盛恩典',
    paragraphsEn: [
      'The feeding of the four thousand occurs in the region of the Decapolis, a predominantly Gentile area. It is distinct from the feeding of the 5,000 in its location, numbers, and symbolic details.',
      'Jesus expresses deep compassion for the crowd who had been with Him for three days without food. He multiplies seven loaves and a few small fish, feeding four thousand men, and seven large baskets (spyridas) of leftovers are collected.',
      'While the 12 baskets in the feeding of the 5,000 represent Israel, the 7 baskets here symbolize the completion and inclusion of the Gentile nations (often represented by 7 nations of Canaan), showing that Jesus\' saving grace is universal.'
    ],
    paragraphsZh: [
      '「給四千人吃飽」的神蹟發生在低加波利地區，這是一個以外邦人為主的區域。它在發生地點、人數以及象徵細節上，都與先前的「餵飽五千人」有顯著區別。',
      '耶穌對同祂待了三天、無物可吃的群眾動了慈心。祂用七個餅和幾條小魚餵飽了四千人，收拾零碎裝滿了七個大筐子（Spyridas）。',
      '「五餅二魚」中剩下的十二個籃子代表以色列，而此處剩下的七個大筐子則象徵對外邦世界（舊約常以迦南七族代表外邦列國）的接納與豐盛供應，表明耶穌的救恩恩典是普及萬民的。'
    ]
  },
  'heal-bethesda-invalid': {
    id: 'commentary-heal-bethesda-invalid',
    passage: 'John 5:1-18',
    titleEn: 'Grace Unbound by Sabbath Traditions',
    titleZh: '突破安息日規條的恩典',
    paragraphsEn: [
      'At the Pool of Bethesda in Jerusalem, Jesus approaches a man who has been paralyzed for thirty-eight years. Jesus asks him a probing question: "Do you want to be healed?"',
      'Rather than using the pool\'s water, Jesus commands: "Get up, take up your bed, and walk." The man is instantly healed. Because this occurred on the Sabbath, it triggers intense hostility from the Jewish leaders.',
      'When challenged, Jesus defends His actions by stating: "My Father is working until now, and I am working." This claim of working in union with the Father makes Him equal with God, leading the religious elite to seek His death.'
    ],
    paragraphsZh: [
      '在耶路撒冷的畢士大池邊，耶穌走近一個病了三十八年的癱子。耶穌問了他一個直指內心的問題：「你要痊癒嗎？」',
      '耶穌沒有藉助池水，而是直接發出命令：「起來，拿你的褥子走吧！」那人立刻痊癒了。因為這事發生在安息日，隨即引來了猶太教領袖的強烈控告。',
      '面對質難，耶穌宣告說：「我父做事直到如今，我也做事。」這一與天父同工的宣告表明祂與神平等，導致宗教精英開始密謀想要殺祂。'
    ]
  },
  'heal-born-blind': {
    id: 'commentary-heal-born-blind',
    passage: 'John 9:1-7',
    titleEn: 'Spiritual Sight and the Light of the World',
    titleZh: '屬靈的看見與世界之光',
    paragraphsEn: [
      'Faced with a man born blind, the disciples ask whether his blindness was caused by his own sin or his parents\' sin. Jesus refutes this, stating that it happened so that "the works of God might be displayed in him."',
      'Jesus declares Himself the "Light of the World," spits on the ground, makes clay, rubs it on the man\'s eyes, and tells him to wash in the Pool of Siloam (meaning Sent). The man washes and returns seeing.',
      'The miracle leads to a long conflict between the healed man and the Pharisees. While the healed man progresses in faith from recognizing Jesus as a prophet to worshipping Him as the Son of Man, the Pharisees spiral into total spiritual blindness.'
    ],
    paragraphsZh: [
      '面對一個生來瞎眼的人，門徒問這瞎眼是因為這人犯了罪，還是他父母犯了罪。耶穌否定了這種因果報應的觀念，指出是要「在他身上顯出神的作為來」。',
      '耶穌宣告自己是「世上的光」，隨後用唾沫和泥抹在瞎子的眼睛上，吩咐他去西羅亞（意為「奉差遣」）池子裡去洗。那人去洗完，回來就看見了。',
      '這件神蹟引發了那得醫治者與法利賽人長期的對立辯論。得醫治者在信心上逐步成長，從認出耶穌是先知，到最後俯伏拜祂為人子；而法利賽人則反而在屬靈的盲目中越陷越深。'
    ]
  },
  'raise-lazarus': {
    id: 'commentary-raise-lazarus',
    passage: 'John 11:1-44',
    titleEn: 'The Resurrection and the Life',
    titleZh: '復活與生命的彰顯',
    paragraphsEn: [
      'The raising of Lazarus is the seventh and ultimate sign in John\'s Gospel. Jesus intentionally delays His arrival in Bethany until Lazarus has been dead in the tomb for four days, ensuring the reality of death is absolute.',
      'Jesus comforts Martha and Mary, uttering the profound statement: "I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live." Showing deep grief and love, Jesus weeps at the tomb.',
      'Jesus commands the stone to be removed, thanks the Father, and shouts: "Lazarus, come out!" The dead man emerges wrapped in burial linens. This miracle prefigures Jesus\' own resurrection and directly precipitates the conspiracy of the Sanhedrin to crucify Him.'
    ],
    paragraphsZh: [
      '「使拉撒路復活」是約翰福音中第七個、也是最高潮的神蹟。耶穌特意延遲了去伯大尼的行程，直到拉撒路在墳墓裡待了四天，以證實死亡的真實與無可挽回。',
      '耶穌安慰馬大和馬利亞，宣告了偉大的真理：「復活在我，生命也在我。信我的人雖然死了，也必復活。」在墳墓前，耶穌展現了極深的情感與悲憫，流下眼淚。',
      '耶穌命令移開石頭，感謝父神後，大聲呼喊：「拉撒路出來！」死人就出來了，手腳裹著裹屍布。這件神蹟預示了耶穌自己的復活，並直接促成了公會決意除滅耶穌的陰謀。'
    ]
  },
  'heal-blind-bartimaeus': {
    id: 'commentary-heal-blind-bartimaeus',
    passage: 'Matthew 20:29-34, Mark 10:46-52, Luke 18:35-43',
    titleEn: 'Desperate Cry and Restorative Faith',
    titleZh: '迫切的呼喊與得救的信心',
    paragraphsEn: [
      'Near Jericho, blind Bartimaeus sits by the roadside begging. Hearing that Jesus is passing by, he cries out persistently: "Jesus, Son of David, have mercy on me!" ignoring the crowds who rebuked him and told him to be silent.',
      'Jesus stops, calls him over, and asks: "What do you want me to do for you?" Bartimaeus replies without hesitation: "Rabbi, let me recover my sight."',
      'Jesus declares, "Go your way; your faith has made you well." Instantly, Bartimaeus recovers his sight and follows Jesus on the way to Jerusalem, glorifying God and leading the crowds to praise God.'
    ],
    paragraphsZh: [
      '在耶利哥附近，瞎子巴底買坐在路旁討飯。聽見是耶穌經過，他不顧旁人的責備與制止，迫切地大聲呼喊：「大衛的子孫耶穌啊，可憐我吧！」',
      '耶穌停下來，叫他過來，問他：「要我為你做什麼？」巴底買毫不猶豫地回答：「拉波尼（大師），我要能看見！」',
      '耶穌對他說：「你去吧！你的信救了你了。」巴底買立刻重見光明，並在通往耶路撒冷的路上跟隨耶穌，一路歸榮耀與神，也引導眾人讚美神。'
    ]
  },
  'curse-fig-tree': {
    id: 'commentary-curse-fig-tree',
    passage: 'Matthew 21:18-22, Mark 11:12-14',
    titleEn: 'The Judgment of Fruitlessness and Power of Faith',
    titleZh: '對無果子之生命的審判與信心的宣告',
    paragraphsEn: [
      'On His way to Jerusalem, a hungry Jesus finds a leafy fig tree but finds no fruit on it, only leaves. He curses the tree: "May no fruit ever come from you again!" The tree withers immediately.',
      'This object lesson serves as a prophetic warning. The leafy tree represents Israel and the Temple system: showing outward religious activity but lacking the true fruit of righteousness and faith.',
      'When the disciples marvel at how quickly the tree withered, Jesus teaches them on the power of faith and prayer, promising that with faith, they can command even mountains to be cast into the sea.'
    ],
    paragraphsZh: [
      '在前往耶路撒冷的路上，飢餓的耶穌看見一棵茂密的無花果樹，卻在上面找不到果子，只有葉子。祂對樹說：「從今以後，你永不結果子！」那樹立刻枯乾了。',
      '這是一個具象的先知性警告。茂密的葉子代表當時的以色列和聖殿體系：徒有虛飾的宗教外表與活動，卻缺乏公義與信心的真實果子。',
      '當門徒驚奇這樹乾枯之快時，耶穌藉此教導他們信心的權能與禱告的應許，宣告只要有信心，即便是命令大山挪開投進海裡，也必成就。'
    ]
  }
};

export const CROSS_REFERENCES: CrossReference[] = [
  { id: '1', sourceVerse: 'JHN 3:16', targetRefEn: 'Romans 5:8', targetRefZh: '羅馬書 5:8', textEn: 'But God shows his love for us in that while we were still sinners, Christ died for us.', textZh: '惟有基督在我們還作罪人的時候為我們死，神的愛就在此向我們顯明了。' },
  { id: '2', sourceVerse: 'JHN 3:16', targetRefEn: '1 John 4:9', targetRefZh: '約翰一書 4:9', textEn: 'In this the love of God was made manifest among us, that God sent his only Son into the world, so that we might live through him.', textZh: '神差祂獨生子到世間來，使我們藉著祂得生，神愛我們的心在此就顯明了。' },
  { id: '3', sourceVerse: 'GEN 1:1', targetRefEn: 'John 1:1', targetRefZh: '約翰福音 1:1', textEn: 'In the beginning was the Word, and the Word was with God, and the Word was God.', textZh: '太初有道，道與神同在，道就是神。' },
  { id: '4', sourceVerse: 'MAT 9:2', targetRefEn: 'Luke 7:48', targetRefZh: '路加福音 7:48', textEn: 'And he said to her, "Your sins are forgiven."', textZh: '便對那女人說：「你的罪赦免了。」' },
  { id: '5', sourceVerse: 'PSA 23:1', targetRefEn: 'John 10:11', targetRefZh: '約翰福音 10:11', textEn: 'I am the good shepherd. The good shepherd lays down his life for the sheep.', textZh: '我是好牧人；好牧人為羊捨命。' }
];

export const BIBLE_VERSES: Record<string, Verse[]> = {
  'GEN:1': [
    { number: 1, textEn: 'In the beginning, God created the heavens and the earth.', textZh: '起初，神創造天地。', wordsEn: [{ text: 'In the beginning', strongId: 'H7225' }, { text: ' God ', strongId: 'H430' }, { text: 'created', strongId: 'H1254' }, { text: ' the heavens', strongId: 'H8064' }, { text: ' and the earth.', strongId: 'H776' }] },
    { number: 2, textEn: 'The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters.', textZh: '地是空虛混沌，淵面黑暗；神的靈運行在水面上。' },
    { number: 3, textEn: 'And God said, "Let there be light," and there was light.', textZh: '神說：「要有光」，就有了光。' },
    { number: 4, textEn: 'And God saw that the light was good. And God separated the light from the darkness.', textZh: '神看光是好的，就把光暗分開了。' },
    { number: 5, textEn: 'God called the light Day, and the darkness he called Night. And there was evening and there was morning, the first day.', textZh: '神稱光為「晝」，稱暗為「夜」。有晚上，有早晨，這是頭一日。' }
  ],
  'PSA:23': [
    { number: 1, textEn: 'The LORD is my shepherd; I shall not want.', textZh: '耶和華是我的牧者，我必不致缺乏。', wordsEn: [{ text: 'The LORD', strongId: 'H3068' }, { text: ' is my ', strongId: '' }, { text: 'shepherd;', strongId: 'H7462' }, { text: ' I shall not want.', strongId: '' }] },
    { number: 2, textEn: 'He makes me lie down in green pastures. He leads me beside still waters.', textZh: '祂使我躺臥在青草地上，領我在可安歇的水邊。' },
    { number: 3, textEn: 'He restores my soul. He leads me in paths of righteousness for his name\'s sake.', textZh: '祂使我的靈魂甦醒，為自己的名引導我走義路。' },
    { number: 4, textEn: 'Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.', textZh: '我雖然行過死蔭的幽谷，也不怕遭害，因為你與我同在；你的杖，你的竿，都安慰我。' },
    { number: 5, textEn: 'You prepare a table before me in the presence of my enemies; you anoint my head with oil; my cup overflows.', textZh: '在我敵人面前，你為我擺設筵席；你用油膏了我的頭，使我的福杯滿溢。' },
    { number: 6, textEn: 'Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the LORD forever.', textZh: '我一生一世必有恩惠慈愛隨著我；我且要住在耶和華的殿中，直到永遠。' }
  ],
  'JHN:1': [
    { number: 1, textEn: 'In the beginning was the Word, and the Word was with God, and the Word was God.', textZh: '太初有道，道與神同在，道就是神。', wordsEn: [{ text: 'In the beginning', strongId: 'G746' }, { text: ' was the ', strongId: '' }, { text: 'Word,', strongId: 'G3056' }, { text: ' and the Word was with ', strongId: '' }, { text: 'God,', strongId: 'G2316' }, { text: ' and the Word was ', strongId: '' }, { text: 'God.', strongId: 'G2316' }], wordsZh: [{ text: '太初', strongId: 'G746' }, { text: '有', strongId: '' }, { text: '道', strongId: 'G3056' }, { text: '，道與', strongId: '' }, { text: '神', strongId: 'G2316' }, { text: '同在，道就是', strongId: '' }, { text: '神', strongId: 'G2316' }, { text: '。', strongId: '' }] },
    { number: 2, textEn: 'He was in the beginning with God.', textZh: '這道太初與神同在。' },
    { number: 3, textEn: 'All things were made through him, and without him was not any thing made that was made.', textZh: '萬物是藉著祂造的；凡被造的，沒有一樣不是藉著祂造的。' },
    { number: 4, textEn: 'In him was life, and the life was the light of men.', textZh: '生命在祂裡頭，這生命就是人的光。', wordsEn: [{ text: 'In him was ', strongId: '' }, { text: 'life,', strongId: 'G2222' }, { text: ' and the life was the ', strongId: '' }, { text: 'light', strongId: 'G5457' }, { text: ' of men.', strongId: '' }] },
    { number: 5, textEn: 'The light shines in the darkness, and the darkness has not overcome it.', textZh: '光照在黑暗裡，黑暗卻不接受光。' },
    { number: 14, textEn: 'And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.', textZh: '道成了肉身，住在我們中間，充充滿滿地有恩典有真理。我們也見過祂的榮耀，正是父獨生子的榮耀。' }
  ],
  'JHN:3': [
    { number: 1, textEn: 'Now there was a man of the Pharisees named Nicodemus, a ruler of the Jews.', textZh: '有一個法利賽人，名叫尼哥底母，是猶太人的官。' },
    { number: 2, textEn: 'This man came to Jesus by night and said to him, "Rabbi, we know that you are a teacher come from God, for no one can do these signs that you do unless God is with him."', textZh: '這人夜裡來見耶穌，說：「拉比，我們知道你是由神那裡來作師傅的；因為你所行的神蹟，若沒有神同在，無人能行。」' },
    { number: 3, textEn: 'Jesus answered him, "Truly, truly, I say to you, unless one is born again he cannot see the kingdom of God."', textZh: '耶穌回答說：「我實實在在地告訴你，人若不重生，就不能見神的國。」' },
    { number: 4, textEn: 'Nicodemus said to him, "How can a man be born when he is old? Can he enter a second time into his mother\'s womb and be born?"', textZh: '尼哥底母說：「人已經老了，如何能重生呢？豈能再進母腹生出來嗎？」' },
    { number: 5, textEn: 'Jesus answered, "Truly, truly, I say to you, unless one is born of water and the Spirit, he cannot enter the kingdom of God."', textZh: '耶穌說：「我實實在在地告訴你，人若不是從水和聖靈生的，就不能進神的國。」' },
    { number: 16, textEn: 'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.', textZh: '神愛世人，甚至將祂的獨生子賜給他們，叫一切信祂的，不致滅亡，反得永生。', wordsEn: [{ text: 'For ', strongId: '' }, { text: 'God', strongId: 'G2316' }, { text: ' so ', strongId: '' }, { text: 'loved', strongId: 'G25' }, { text: ' the ', strongId: '' }, { text: 'world,', strongId: 'G2889' }, { text: ' that he gave his ', strongId: '' }, { text: 'only', strongId: 'G3439' }, { text: 'Son,', strongId: 'G5207' }, { text: ' that whoever ', strongId: '' }, { text: 'believes', strongId: 'G4100' }, { text: ' in him should not perish but have ', strongId: '' }, { text: 'eternal', strongId: '' }, { text: 'life.', strongId: 'G2222' }], wordsZh: [{ text: '神', strongId: 'G2316' }, { text: '愛', strongId: 'G25' }, { text: '世人', strongId: 'G2889' }, { text: '，甚至將祂的', strongId: '' }, { text: '獨生', strongId: 'G3439' }, { text: '子', strongId: 'G5207' }, { text: '賜給他們，叫一切', strongId: '' }, { text: '信', strongId: 'G4100' }, { text: '祂的，不致滅亡，反得', strongId: '' }, { text: '永生', strongId: 'G2222' }, { text: '。', strongId: '' }] },
    { number: 17, textEn: 'For God did not send his Son into the world to condemn the world, but in order that the world might be saved through him.', textZh: '因為神差祂的兒子降世，不是要定世人的罪，乃是要叫世人因祂得救。' },
    { number: 18, textEn: 'Whoever believes in him is not condemned, but whoever does not believe is condemned already, because he has not believed in the name of the only Son of God.', textZh: '信祂的人，不被定罪；不信的人，罪已經定了，因為他不信神獨生子的名。' },
    { number: 19, textEn: 'And this is the judgment: the light has come into the world, and people loved the darkness rather than the light because their works were evil.', textZh: '光來到世間，世人因自己的行為是惡的，不愛光，倒愛黑暗，定他們的罪就是在此。' },
    { number: 20, textEn: 'For everyone who does wicked things hates the light and does not come to the light, lest his works should be exposed.', textZh: '凡作惡的便恨光，並不來就光，恐怕他的行為被責備。' },
    { number: 21, textEn: 'But whoever does what is true comes to the light, so that it may be clearly seen that his works have been carried out in God.', textZh: '但行真理的必來就光，要顯明他所行的是靠神而行。' }
  ],
  'MAT:9': [
    { number: 1, textEn: 'And getting into a boat he crossed over and came to his own city.', textZh: '耶穌坐船渡過海，來到自己的城。' },
    { number: 2, textEn: 'And behold, some people brought to him a paralytic, lying on a bed. And when Jesus saw their faith, he said to the paralytic, "Take heart, my son; your sins are forgiven."', textZh: '有人用褥子抬著一個癱子到耶穌跟前來。耶穌見他們的信心，就對癱子說：「小子，放心吧！你的罪赦了。」', wordsEn: [{ text: 'And behold, some people brought to him a ', strongId: '' }, { text: 'paralytic,', strongId: 'G2826' }, { text: ' lying on a ', strongId: '' }, { text: 'bed.', strongId: 'G2825' }, { text: ' And when Jesus saw their faith, he said to the paralytic, "Take heart, my son; your ', strongId: '' }, { text: 'sins', strongId: 'G266' }, { text: ' are ', strongId: '' }, { text: 'forgiven."', strongId: 'G851' }] },
    { number: 3, textEn: 'And behold, some of the scribes said to themselves, "This man is blaspheming."', textZh: '有幾個文士心裡說：「這人說僭妄的話了。」' },
    { number: 4, textEn: 'But Jesus, knowing their thoughts, said, "Why do you think evil in your hearts?', textZh: '耶穌知道他們的心意，就說：「你們為什麼心裡懷著惡念呢？' },
    { number: 5, textEn: 'For which is easier, to say, \'Your sins are forgiven,\' or to say, \'Rise and walk\'?', textZh: '或說：『你的罪赦了』，或說：『你起來行走』，哪一樣容易呢？' },
    { number: 6, textEn: 'But that you may know that the Son of Man has authority on earth to forgive sins"—he then said to the paralytic—"Rise, pick up your bed and go home."', textZh: '「但要叫你們知道，人子在地上有赦罪的權柄」；就對癱子說：「起來！拿你的褥子回家去吧。」' },
    { number: 7, textEn: 'And he rose and went home.', textZh: '那人就起來，回家去了。' },
    { number: 8, textEn: 'When the crowds saw it, they were afraid, and they glorified God, who had given such authority to men.', textZh: '眾人看見都驚奇，就歸榮耀給神，因為祂將這樣的權柄賜給人。' }
  ],
  'MRK:2': [
    { number: 1, textEn: 'And when he returned to Capernaum after some days, it was reported that he was at home.', textZh: '過了些日子，耶穌又進了迦百農。人聽見祂在屋裡，' },
    { number: 2, textEn: 'And many were gathered together, so that there was no more room, not even at the door. And he was preaching the word to them.', textZh: '就有許多人聚集，甚至連門前都沒有空地；耶穌就對他們講道。' },
    { number: 3, textEn: 'And they came, bringing to him a paralytic carried by four men.', textZh: '有人帶一個癱子來見耶穌，是用四個人抬來的；' },
    { number: 4, textEn: 'And when they could not get near him because of the crowd, they removed the roof above him, and when they had made an opening, they let down the bed on which the paralytic lay.', textZh: '因為人多，不得近前，就把耶穌所在的房子，拆了房頂，既拆通了，就把癱子連所躺臥的褥子都縋下去。' },
    { number: 5, textEn: 'And when Jesus saw their faith, he said to the paralytic, "Son, your sins are forgiven."', textZh: '耶穌見他們的信心，就對癱子說：「小子，你的罪赦了。」', wordsEn: [{ text: 'And when Jesus saw their faith, he said to the paralytic, "Son, your ', strongId: '' }, { text: 'sins', strongId: 'G266' }, { text: ' are ', strongId: '' }, { text: 'forgiven."', strongId: 'G851' }] },
    { number: 6, textEn: 'Now some of the scribes were sitting there, questioning in their hearts,', textZh: '有幾個文士坐在那裡，心裡議論，說：' },
    { number: 7, textEn: '"Why does this man speak like that? He is blaspheming! Who can forgive sins but God alone?"', textZh: '「這個人為什麼這樣說呢？祂說僭妄的話了。除了神以外，誰能赦罪呢？」' },
    { number: 8, textEn: 'And immediately Jesus, perceiving in his spirit that they thus questioned within themselves, said to them, "Why do you question these things in your hearts?', textZh: '耶穌心中立刻知道他們心裡這樣議論，就說：「你們心裡為什麼議論這事呢？' },
    { number: 9, textEn: 'Which is easier, to say to the paralytic, \'Your sins are forgiven,\' or to say, \'Rise, take up your bed and walk\'?', textZh: '對癱子說『你的罪赦了』，或說『起來！拿你的褥子行走』，哪一樣容易呢？', wordsEn: [{ text: 'Which is easier, to say to the paralytic, \'Your sins are forgiven,\' or to say, \'Rise, ', strongId: '' }, { text: 'take up', strongId: 'G142' }, { text: ' your ', strongId: '' }, { text: 'bed', strongId: 'G2825' }, { text: ' and walk\'?', strongId: '' }] },
    { number: 10, textEn: 'But that you may know that the Son of Man has authority on earth to forgive sins"—he said to the paralytic—', textZh: '「但要叫你們知道，人子在地上有赦罪的權柄。」就對癱子說：' },
    { number: 11, textEn: '"I say to you, rise, pick up your bed, and go home."', textZh: '「我吩咐你，起來！拿你的褥子回家去吧。」' },
    { number: 12, textEn: 'And he rose and immediately picked up his bed and went out before them all, so that they were all amazed and glorified God, saying, "We never saw anything like this!"', textZh: '那人就起來，立刻拿著褥子，當眾人面前出去了，以致眾人都驚奇，歸榮耀給神，說：「我們從來沒有見過這樣的事！」' }
  ],
  'LUK:5': [
    { number: 17, textEn: 'On one of those days, as he was teaching, Pharisees and teachers of the law were sitting there, who had come from every village of Galilee and Judea and from Jerusalem. And the power of the Lord was with him to heal.', textZh: '有一天，耶穌教訓人，有法利賽人和律法師在旁邊坐著；他們是從加利利各鄉村和猶太並耶路撒冷來的。主的能力與耶穌同在，使祂能醫治人。' },
    { number: 18, textEn: 'And behold, some men were bringing on a bed a man who was paralyzed, and they were seeking to bring him in and lay him before Jesus,', textZh: '有人用褥子抬著一個癱子，要抬進去放在耶穌面前，' },
    { number: 19, textEn: 'but finding no way to bring him in, because of the crowd, they went up on the roof and let him down with his bed through the tiles into the midst before Jesus.', textZh: '卻因人多，尋不出法子抬進去，就上房頂，從瓦間把他連褥子縋到當中，正在耶穌面前。' },
    { number: 20, textEn: 'And when he saw their faith, he said, "Man, your sins are forgiven you."', textZh: '耶穌見他們的信心，就對癱子說：「之友，你的罪赦了。」', wordsEn: [{ text: 'And when he saw their faith, he said, "Man, your ', strongId: '' }, { text: 'sins', strongId: 'G266' }, { text: ' are ', strongId: '' }, { text: 'forgiven', strongId: 'G851' }, { text: ' you."', strongId: '' }] },
    { number: 21, textEn: 'And the scribes and the Pharisees began to question, saying, "Who is this who speaks blasphemies? Who can forgive sins but God alone?"', textZh: '文士和法利賽人議論說：「這說僭妄話的是誰？除了神以外，誰能赦罪呢？」' },
    { number: 22, textEn: 'When Jesus perceived their thoughts, he answered them, "Why do you question in your hearts?', textZh: '耶穌知道他們所議論的，就回答說：「你們心裡議論的是什麼呢？' },
    { number: 23, textEn: 'Which is easier, to say, \'Your sins are forgiven you,\' or to say, \'Rise and walk\'?', textZh: '或說『你的罪赦了』，或說『你起來行走』，哪一樣容易呢？' },
    { number: 24, textEn: 'But that you may know that the Son of Man has authority on earth to forgive sins"—he said to the man who was paralyzed—"I say to you, rise, pick up your bed and go home."', textZh: '「但要叫你們知道，人子在地上有赦罪的權柄。」就對癱子說：「我吩咐你，起來，拿你的褥子回家去吧！」' },
    { number: 25, textEn: 'And immediately he rose up before them and picked up what he had been lying on and went home, glorifying God.', textZh: '那人當眾人面前立刻起來，拿著他所躺臥的褥子回家去了，歸榮耀給神。' },
    { number: 26, textEn: 'And amazement seized them all, and they glorified God and were filled with awe, saying, "We have seen extraordinary things today."', textZh: '眾人都驚奇，也歸榮耀給神，並且滿心懼怕，說：「我們今日看見非常的事了。」' }
  ]
};

// Standard book info lookup helper
export const getBookById = (id: string): Book | undefined => {
  return BOOKS.find(b => b.id.toUpperCase() === id.toUpperCase());
};

// Smart Parser: parses scripture searches like "John 3:16-18", "約翰福音 3:16", "Matt 9:1-8"
export interface ParsedScripture {
  bookId: string;
  chapter: number;
  verseStart: number;
  verseEnd: number | null;
  error?: string;
}

export const parseScriptureSearch = (query: string): ParsedScripture[] => {
  // 1. Convert full-width characters to half-width equivalents and strip out search noise
  let clean = query
    .replace(/：/g, ':')
    .replace(/；/g, ';')
    .replace(/，/g, ',')
    .replace(/[－—–～~]/g, '-')
    .replace(/(和合本|和合|cuv|web|union version|english|chinese|bible|聖經|圣经)/gi, '')
    .trim()
    .replace(/\s+/g, ' ');

  if (!clean) return [];

  // 2. Handle list of multiple references by splitting on semicolons
  const segments = clean.split(';');
  const results: ParsedScripture[] = [];

  // 3. Build a comprehensive mappings object for all 66 books of the Bible
  const bookMappings: Record<string, string> = {
    // English custom abbreviations
    'gen': 'GEN', 'gn': 'GEN',
    'exo': 'EXO', 'ex': 'EXO',
    'lev': 'LEV', 'lv': 'LEV',
    'num': 'NUM', 'nm': 'NUM',
    'deu': 'DEU', 'dt': 'DEU',
    'josh': 'JOS', 'jos': 'JOS',
    'judg': 'JDG', 'jdg': 'JDG',
    'ruth': 'RUT', 'rut': 'RUT',
    '1 sam': '1SA', '1sam': '1SA', '1s': '1SA',
    '2 sam': '2SA', '2sam': '2SA', '2s': '2SA',
    '1 kings': '1KI', '1ki': '1KI', '1k': '1KI',
    '2 kings': '2KI', '2ki': '2KI', '2k': '2KI',
    '1 chron': '1CH', '1ch': '1CH',
    '2 chron': '2CH', '2ch': '2CH',
    'neh': 'NEH', 'est': 'EST', 'ps': 'PSA', 'psalm': 'PSA',
    'prov': 'PRO', 'pr': 'PRO',
    'eccles': 'ECC', 'ecc': 'ECC',
    'song': 'SNG', 'isa': 'ISA', 'is': 'ISA',
    'jer': 'JER', 'jr': 'JER', 'lam': 'LAM',
    'ezek': 'EZK', 'dan': 'DAN', 'hos': 'HOS',
    'joel': 'JOL', 'amos': 'AMO', 'obad': 'OBD',
    'jonah': 'JON', 'mic': 'MIC', 'nah': 'NAM',
    'hab': 'HAB', 'zeph': 'ZEP', 'hag': 'HAG',
    'zech': 'ZEC', 'mal': 'MAL',
    'matt': 'MAT', 'mt': 'MAT',
    'mrk': 'MRK', 'mk': 'MRK',
    'luk': 'LUK', 'lk': 'LUK',
    'jhn': 'JHN', 'jn': 'JHN',
    'acts': 'ACT', 'ac': 'ACT',
    'rom': 'ROM', 'rm': 'ROM',
    '1 cor': '1CO', '1cor': '1CO',
    '2 cor': '2CO', '2cor': '2CO',
    'gal': 'GAL', 'eph': 'EPH', 'phil': 'PHP',
    'col': 'COL', '1 thess': '1TH', '1thess': '1TH',
    '2 thess': '2TH', '2thess': '2TH',
    '1 tim': '1TI', '1tim': '1TI',
    '2 tim': '2TI', '2tim': '2TI',
    'titus': 'TIT', 'philem': 'PHM', 'heb': 'HEB',
    'jas': 'JAS', '1 pet': '1PE', '1pet': '1PE',
    '2 pet': '2PE', '2pet': '2PE', '1 jhn': '1JN',
    '1jhn': '1JN', '2 jhn': '2JN', '2jhn': '2JN',
    '3 jhn': '3JN', '3jhn': '3JN', 'jude': 'JUD',
    'rev': 'REV',
    
    // Simplified Chinese
    '创世纪': 'GEN', '出埃及记': 'EXO', '利未记': 'LEV', '民数记': 'NUM', '申命记': 'DEU',
    '约书亚记': 'JOS', '士师记': 'JDG', '路得记': 'RUT', '撒母耳记上': '1SA', '撒母耳记下': '2SA',
    '列王纪上': '1KI', '列王纪下': '2KI', '历代志上': '1CH', '历代志下': '2CH', '以斯拉记': 'EZR',
    '尼希米记': 'NEH', '以斯帖记': 'EST', '约伯记': 'JOB', '诗篇': 'PSA', '箴言': 'PRO',
    '传道书': 'ECC', '雅歌': 'SNG', '以賽亞書': 'ISA', '耶利米書': 'JER', '耶利米哀歌': 'LAM',
    '以西結書': 'EZK', '但以理書': 'DAN', '何西阿書': 'HOS', '約階書': 'JOL', '約珥書': 'JOL',
    '阿摩司書': 'AMO', '俄巴底亞書': 'OBD', '約拿書': 'JON', '彌迦書': 'MIC', '那鴻書': 'NAM',
    '哈巴谷書': 'HAB', '西番雅書': 'ZEP', '哈該書': 'HAG', '撒迦利亞書': 'ZEC', '瑪拉基書': 'MAL',
    '馬太福音': 'MAT', '馬可福音': 'MRK', '路加福音': 'LUK', '約翰福音': 'JHN', '使徒行傳': 'ACT',
    '羅馬書': 'ROM', '哥林多前書': '1CO', '哥林多後書': '2CO', '加拉太書': 'GAL', '以弗所書': 'EPH',
    '腓立比書': 'PHP', '歌羅西書': 'COL', '帖撒羅尼迦前書': '1TH', '帖撒羅尼迦後書': '2TH',
    '提摩太前書': '1TI', '提摩太後書': '2TI', '提多書': 'TIT', '腓利門書': 'PHM', '希伯來書': 'HEB',
    '雅格書': 'JAS', '雅各書': 'JAS', '彼得前書': '1PE', '彼得後書': '2PE', '約翰一書': '1JN',
    '約翰二書': '2JN', '約翰三書': '3JN', '猶大書': 'JUD', '啟示錄': 'REV',

    // Simplified Chinese standard short forms
    '创': 'GEN', '出': 'EXO', '利': 'LEV', '民': 'NUM', '申': 'DEU',
    '书': 'JOS', '士': 'JDG', '得': 'RUT', '撒上': '1SA', '撒下': '2SA',
    '王上': '1KI', '王下': '2KI', '代上': '1CH', '代下': '2CH', '拉': 'EZR',
    '尼': 'NEH', '帖': 'EST', '伯': 'JOB', '诗': 'PSA', '箴': 'PRO',
    '传': 'ECC', '歌': 'SNG', '赛': 'ISA', '耶': 'JER', '哀': 'LAM',
    '结': 'EZK', '但': 'DAN', '何': 'HOS', '珥': 'JOL', '摩': 'AMO',
    '俄': 'OBD', '拿': 'JON', '弥': 'MIC', '鸿': 'NAM', '哈': 'HAB',
    '番': 'ZEP', '该': 'HAG', '亚': 'ZEC', '玛': 'MAL',
    '太': 'MAT', '可': 'MRK', '路': 'LUK', '约': 'JHN', '徒': 'ACT',
    '罗': 'ROM', '林前': '1CO', '林後': '2CO', '林后': '2CO', '加': 'GAL',
    '弗': 'EPH', '腓': 'PHP', '西': 'COL', '帖前': '1TH', '帖後': '2TH',
    '帖后': '2TH', '提前': '1TI', '提後': '2TI', '提后': '2TI', '多': 'TIT',
    '门': 'PHM', '來': 'HEB', '来': 'HEB', '雅': 'JAS', '彼前': '1PE', '彼後': '2PE',
    '彼后': '2PE', '约一': '1JN', '约二': '2JN', '约三': '3JN', '犹': 'JUD',
    '启': 'REV'
  };

  // Populate dynamic book names and abbreviations from the active database
  BOOKS.forEach(b => {
    bookMappings[b.nameEn.toLowerCase()] = b.id;
    bookMappings[b.nameZh.toLowerCase()] = b.id;
    bookMappings[b.abbrevEn.toLowerCase()] = b.id;
    bookMappings[b.abbrevZh.toLowerCase()] = b.id;
  });

  const regex = /^([\u4e00-\u9fa5\w\s\.]+?)\s*(\d+)\s*:\s*(\d+)(?:\s*-\s*(\d+))?$/i;
  const chapterOnlyRegex = /^([\u4e00-\u9fa5\w\s\.]+?)\s*(\d+)$/i;

  for (const seg of segments) {
    const trimmedSeg = seg.trim();
    if (!trimmedSeg) continue;

    // Try parsing: [Book Name] [Chapter]:[VerseStart]-[VerseEnd]
    const match = trimmedSeg.match(regex);
    if (match) {
      const bookInput = match[1].trim().toLowerCase().replace('.', '');
      const chapter = parseInt(match[2], 10);
      const verseStart = parseInt(match[3], 10);
      const verseEnd = match[4] ? parseInt(match[4], 10) : null;

      const bookId = bookMappings[bookInput];
      if (bookId) {
        results.push({ bookId, chapter, verseStart, verseEnd });
        continue;
      }
    }

    // Try parsing book & chapter only (e.g. "John 3", "約翰福音 3")
    const chapterMatch = trimmedSeg.match(chapterOnlyRegex);
    if (chapterMatch) {
      const bookInput = chapterMatch[1].trim().toLowerCase().replace('.', '');
      const chapter = parseInt(chapterMatch[2], 10);
      const bookId = bookMappings[bookInput];
      if (bookId) {
        results.push({ bookId, chapter, verseStart: 1, verseEnd: null });
      }
    }
  }

  return results;
};

// Generates suggestions for the search box
export const getSearchSuggestions = (query: string): SearchSuggestion[] => {
  const clean = query.trim().toLowerCase();
  if (clean.length < 1) return [];

  const suggestions: SearchSuggestion[] = [];

  // Add generic keyword search suggestion at the very top
  suggestions.push({
    type: 'search',
    labelEn: `🔍 Search Bible for "${query}"`,
    labelZh: `🔍 在聖經中搜尋「${query}」`,
    value: query,
    detailsEn: 'Keyword search',
    detailsZh: '全文關鍵字搜尋'
  });

  // 1. Check matching Topics
  TOPICS.forEach(topic => {
    if (topic.titleEn.toLowerCase().includes(clean) || 
        topic.titleZh.toLowerCase().includes(clean) ||
        topic.descriptionEn.toLowerCase().includes(clean) ||
        topic.descriptionZh.toLowerCase().includes(clean)) {
      suggestions.push({
        type: 'topic',
        labelEn: `📚 Topic: ${topic.titleEn}`,
        labelZh: `📚 主題：${topic.titleZh}`,
        value: topic.id,
        detailsEn: `Covers ${topic.references.map(r => `${BOOKS.find(b => b.id === r.bookId)?.nameEn} ${r.chapter}`).join(', ')}`,
        detailsZh: `包含 ${topic.references.map(r => `${BOOKS.find(b => b.id === r.bookId)?.nameZh} ${r.chapter}章`).join('、')}`
      });
    }
  });

  // 1.5. Check matching Concepts
  CONCEPT_MAPPINGS.forEach(concept => {
    if (concept.nameZh.toLowerCase().includes(clean) || 
        concept.nameEn.toLowerCase().includes(clean) ||
        concept.keywords.some(kw => clean.includes(kw) || kw.includes(clean))) {
      const book = BOOKS.find(b => b.id === concept.bookId);
      if (book) {
        const refEn = `${book.nameEn} ${concept.chapter}:${concept.verseStart}${concept.verseEnd ? `-${concept.verseEnd}` : ''}`;
        suggestions.push({
          type: 'verse',
          labelEn: `💡 Key Passage: ${concept.nameEn}`,
          labelZh: `💡 關鍵經文：${concept.nameZh}`,
          value: refEn,
          detailsEn: `Keywords: ${concept.keywords.slice(0, 3).join(', ')}`,
          detailsZh: '研讀概念經文'
        });
      }
    }
  });

  // 2. Check matching books
  BOOKS.forEach(book => {
    if (book.nameEn.toLowerCase().includes(clean) || 
        book.nameZh.toLowerCase().includes(clean) ||
        book.abbrevEn.toLowerCase().includes(clean) ||
        book.abbrevZh.toLowerCase().includes(clean)) {
      suggestions.push({
        type: 'book',
        labelEn: `📖 Book: ${book.nameEn}`,
        labelZh: `📖 書卷：${book.nameZh}`,
        value: `${book.nameEn} 1`,
        detailsEn: `${book.chaptersCount} chapters`,
        detailsZh: `共 ${book.chaptersCount} 章`
      });
    }
  });

  // 3. Match typical verse queries (e.g. "John 3:16")
  const parsed = parseScriptureSearch(query);
  if (parsed && parsed.length > 0) {
    if (parsed.length === 1) {
      const firstParsed = parsed[0];
      const book = BOOKS.find(b => b.id === firstParsed.bookId);
      if (book) {
        const refEn = `${book.nameEn} ${firstParsed.chapter}:${firstParsed.verseStart}${firstParsed.verseEnd ? `-${firstParsed.verseEnd}` : ''}`;
        const refZh = `${book.nameZh} ${firstParsed.chapter}:${firstParsed.verseStart}${firstParsed.verseEnd ? `-${firstParsed.verseEnd}` : ''}`;
        suggestions.push({
          type: 'verse',
          labelEn: `🔍 Go to: ${refEn}`,
          labelZh: `🔍 前往：${refZh}`,
          value: refEn,
          detailsEn: 'Read verses in parallel',
          detailsZh: '並排研讀經文'
        });
      }
    } else {
      suggestions.push({
        type: 'verse',
        labelEn: `🔍 Compare ${parsed.length} references together`,
        labelZh: `🔍 對照閱讀這 ${parsed.length} 處經文`,
        value: query,
        detailsEn: 'Compare passages side-by-side',
        detailsZh: '合併對照多個經文段落'
      });
    }
  }

  return suggestions.slice(0, 8); // Limit to top 8 suggestions
};

export interface ConceptMapping {
  keywords: string[];
  bookId: string;
  chapter: number;
  verseStart: number;
  verseEnd: number | null;
  nameZh: string;
  nameEn: string;
}

export const CONCEPT_MAPPINGS: ConceptMapping[] = [
  {
    keywords: ['十誡', '摩西十誡', 'ten commandments', 'commandments', 'moses commandments'],
    bookId: 'EXO',
    chapter: 20,
    verseStart: 1,
    verseEnd: 17,
    nameZh: '出埃及記 20:1-17 (摩西十誡)',
    nameEn: 'Exodus 20:1-17 (Ten Commandments)'
  },
  {
    keywords: ['姦淫', 'adultery', 'sexual immorality', '淫亂'],
    bookId: 'MAT',
    chapter: 5,
    verseStart: 27,
    verseEnd: 30,
    nameZh: '馬太福音 5:27-30 (論姦淫/登山寶訓)',
    nameEn: 'Matthew 5:27-30 (Adultery - Sermon on the Mount)'
  },
  {
    keywords: ['姦淫', 'adultery'],
    bookId: 'EXO',
    chapter: 20,
    verseStart: 14,
    verseEnd: 14,
    nameZh: '出埃及記 20:14 (十誡：不可姦淫)',
    nameEn: 'Exodus 20:14 (You shall not commit adultery)'
  },
  {
    keywords: ['主禱文', 'lords prayer', "lord's prayer"],
    bookId: 'MAT',
    chapter: 6,
    verseStart: 9,
    verseEnd: 13,
    nameZh: '馬太福音 6:9-13 (主禱文)',
    nameEn: "Matthew 6:9-13 (The Lord's Prayer)"
  },
  {
    keywords: ['登山寶訓', 'sermon on the mount', 'beatitudes', '八福'],
    bookId: 'MAT',
    chapter: 5,
    verseStart: 1,
    verseEnd: 12,
    nameZh: '馬太福音 5:1-12 (論八福/登山寶訓)',
    nameEn: 'Matthew 5:1-12 (The Beatitudes)'
  },
  {
    keywords: ['大誡命', 'greatest commandment', 'love god', '愛神'],
    bookId: 'MAT',
    chapter: 22,
    verseStart: 34,
    verseEnd: 40,
    nameZh: '馬太福音 22:34-40 (最大誡命：愛神與愛人)',
    nameEn: 'Matthew 22:34-40 (The Great Commandment)'
  },
  {
    keywords: ['愛', 'love', 'charity'],
    bookId: '1CO',
    chapter: 13,
    verseStart: 1,
    verseEnd: 13,
    nameZh: '哥林多前書 13:1-13 (愛的頌歌)',
    nameEn: '1 Corinthians 13:1-13 (The Love Chapter)'
  },
  {
    keywords: ['信心', 'faith'],
    bookId: 'HEB',
    chapter: 11,
    verseStart: 1,
    verseEnd: 40,
    nameZh: '希伯來書 11:1-40 (信心的英雄)',
    nameEn: 'Hebrews 11:1-40 (The Hall of Faith)'
  },
  {
    keywords: ['重生', 'rebirth', 'born again'],
    bookId: 'JHN',
    chapter: 3,
    verseStart: 1,
    verseEnd: 8,
    nameZh: '約翰福音 3:1-8 (論重生)',
    nameEn: 'John 3:1-8 (On Rebirth)'
  }
];

export interface SearchResults {
  topics: typeof TOPICS;
  concepts: ConceptMapping[];
  verses: {
    bookId: string;
    chapter: number;
    verseNum: number;
    textZh: string;
    textEn: string;
    bookNameZh: string;
    bookNameEn: string;
  }[];
}

export const getSearchResults = (query: string, apiChapters: Record<string, Verse[]>): SearchResults => {
  const clean = query.trim().toLowerCase();
  if (!clean) return { topics: [], concepts: [], verses: [] };

  const matchedTopics = TOPICS.filter(topic => 
    topic.titleEn.toLowerCase().includes(clean) || 
    topic.titleZh.toLowerCase().includes(clean) ||
    topic.descriptionEn.toLowerCase().includes(clean) ||
    topic.descriptionZh.toLowerCase().includes(clean)
  );

  const matchedConcepts = CONCEPT_MAPPINGS.filter(concept =>
    concept.nameZh.toLowerCase().includes(clean) ||
    concept.nameEn.toLowerCase().includes(clean) ||
    concept.keywords.some(kw => clean.includes(kw) || kw.includes(clean))
  );

  const matchedVerses: SearchResults['verses'] = [];
  const processedKeys = new Set<string>();

  const scanVerses = (key: string, verses: Verse[]) => {
    if (processedKeys.has(key)) return;
    processedKeys.add(key);

    const [bookId, chapterStr] = key.split(':');
    const chapter = parseInt(chapterStr);
    const book = BOOKS.find(b => b.id === bookId);
    if (!book) return;

    verses.forEach(v => {
      const containsZh = v.textZh?.toLowerCase().includes(clean);
      const containsEn = v.textEn?.toLowerCase().includes(clean);
      if (containsZh || containsEn) {
        matchedVerses.push({
          bookId,
          chapter,
          verseNum: v.number,
          textZh: v.textZh || '',
          textEn: v.textEn || '',
          bookNameZh: book.nameZh,
          bookNameEn: book.nameEn
        });
      }
    });
  };

  Object.entries(BIBLE_VERSES).forEach(([key, verses]) => {
    scanVerses(key, verses);
  });

  Object.entries(apiChapters).forEach(([key, verses]) => {
    scanVerses(key, verses);
  });

  return {
    topics: matchedTopics,
    concepts: matchedConcepts,
    verses: matchedVerses
  };
};

export const TOPICAL_ANALYSES: Record<string, TopicalAnalysis> = {
  'water-into-wine': {
    topicId: 'water-into-wine',
    coreHighlightsEn: [
      { title: 'The Miracle of Time', content: 'Good wine usually takes years of fermentation. Jesus bypasses time, showing He is the creator of time.' },
      { title: 'Abundance of Grace', content: 'Six stone jars holding 20-30 gallons each equals about 120-180 gallons (700-1000 bottles) of wine, signifying excessive divine abundance.' },
      { title: 'Joy of the Kingdom', content: 'By saving a wedding from social shame, Jesus highlights that the Kingdom of God is a feast of joy, not dry rituals.' }
    ],
    coreHighlightsZh: [
      { title: '時間的超然主權', content: '上等好酒通常需要多年的發酵與醞釀。耶穌跨越了時間的物理限制，證明祂是時間的創造主。' },
      { title: '恩典的無比豐盛', content: '六口石缸每口盛水兩三桶，共約 500-700 公升（相當於近千瓶酒），象徵天國恩典源源不絕的無比寬廣。' },
      { title: '天國婚宴的喜樂', content: '耶穌藉著拯救婚宴免於社交尷尬，表明上帝的國是一個充滿生命喜樂的筵席，而非死板冰冷的儀式。' }
    ],
    gospelComparisons: [
      {
        aspectEn: 'Sectarian Context',
        aspectZh: '猶太潔淨規條背景',
        matthewTextEn: 'Not recorded in Synoptic Gospels.',
        matthewTextZh: '馬太福音未收錄此神蹟。',
        markTextEn: 'Not recorded in Synoptic Gospels.',
        markTextZh: '馬可福音未收錄此神蹟。',
        lukeTextEn: 'Not recorded in Synoptic Gospels.',
        lukeTextZh: '路加福音未收錄此神蹟。'
      },
      {
        aspectEn: 'Unique Johannine Details',
        aspectZh: '約翰福音獨家細節',
        matthewTextEn: 'N/A',
        matthewTextZh: '無',
        markTextEn: 'N/A',
        markTextZh: '無',
        lukeTextEn: 'Specifies the presence of Mary (Jesus\' mother) driving the request, and the six stone water jars for Jewish rites of purification.',
        lukeTextZh: '（此處約翰福音特點）特別記述了母親馬利亞的引導與請求、六口用作猶太潔淨禮儀的「石缸」、以及管筵席者對好酒留到最後的驚嘆。'
      }
    ],
    cantoneseExplanations: [
      {
        phrase: '酒用盡了',
        meaningEn: 'The wine ran out',
        meaningZh: '無晒酒，場面非常尷尬',
        cantoneseExplanation: '喺場嘅人見到無晒酒真係好尷尬，因為猶太婚禮酒用盡係極大嘅失禮。呢度代表人生資源同喜樂完全乾涸嘅寫照。',
        theologyEn: 'Represents the failure and exhaustion of human resources and Old Covenant purification rituals, which could not provide lasting joy.',
        theologyZh: '象徵人類自身資源與舊約潔淨禮儀的徹底枯竭與無能為力，律法儀式無法為人的生命帶來持久的喜樂。'
      },
      {
        phrase: '管筵席的',
        meaningEn: 'The master of the banquet',
        meaningZh: '婚宴嘅總策劃/主持',
        cantoneseExplanation: '即係負責統籌整個婚禮筵席野食同酒水嘅人。佢一飲到嗰杯「水變嘅酒」，唔知來歷，但以專業角度一試就知道係極品。',
        theologyEn: 'An objective third-party witness who confirms the absolute physical reality and superior quality of the miracle without bias.',
        theologyZh: '一個客觀的第三方見證人，以專業身份證實了神蹟的真實物理改變及其無可比擬的卓越品質。'
      }
    ]
  },
  'cleanse-leper': {
    topicId: 'cleanse-leper',
    coreHighlightsEn: [
      { title: 'The Touch of Love', content: 'Jesus reached out His hand and touched the leper, breaking Levitical laws to show love that cleanses uncleanliness.' },
      { title: 'Immediate Cleansing', content: 'At Jesus\' word, the leprosy departed instantly, proving His complete physical and spiritual authority.' },
      { title: 'Testimony to the Priests', content: 'Jesus ordered the man to show himself to the priest to formally restore him to community worship and social life.' }
    ],
    coreHighlightsZh: [
      { title: '跨越禁忌的觸摸', content: '耶穌伸手觸摸了按律法不可觸摸的痲瘋病人，顯示祂的聖潔能吞噬並潔淨污穢，而非被不潔污染。' },
      { title: '瞬間得潔淨的大能', content: '在耶穌一句「我肯，你潔淨了吧」之後，痲瘋病立刻離開那人，顯明耶穌對疾病的絕對權柄。' },
      { title: '對宗教領袖的見證', content: '耶穌吩咐他去給祭司察看，並獻上摩西規定的祭物，作潔淨的官方證明，助其重返宗教與社區生活。' }
    ],
    gospelComparisons: [
      {
        aspectEn: 'Description of Sickness',
        aspectZh: '對病人病情的描寫',
        matthewTextEn: '"And behold, a leper came..." Simple description.',
        matthewTextZh: '簡明。只寫「有一個長大痲瘋的來拜祂」。',
        markTextEn: '"And a leper came to him, beseeching him, and kneeling down..." Emphasizes desperation.',
        markTextZh: '生動。描寫病人「來求耶穌，向祂跪下」，突出了他的卑微與迫切。',
        lukeTextEn: '"Behold, a man full of leprosy." Medical diagnosis of advanced stage.',
        lukeTextZh: '專業醫生視角。註明那人是「滿市長了大痲瘋」（表示病情極其嚴重，病入膏肓）。'
      },
      {
        aspectEn: 'Jesus\' Emotional Response',
        aspectZh: '耶穌的情感反應',
        matthewTextEn: 'No emotion recorded; simply stretches hand and touches.',
        matthewTextZh: '未記錄情緒。只寫耶穌伸手摸他並發出命令。',
        markTextEn: 'Specifically notes "Moved with compassion" (splanchnistheis) or in some manuscripts "moved with anger".',
        markTextZh: '情感豐富。特別寫出耶穌「動了慈心」（希臘文 Splanchnistheis，指心腸深處的劇烈同情）。',
        lukeTextEn: 'Focuses on the healing action and sovereignty; omits emotion words.',
        lukeTextZh: '省略情緒描寫。聚焦於醫治的動作與耶穌隨後的退隱禱告。'
      }
    ],
    cantoneseExplanations: [
      {
        phrase: '主若肯，必能叫我潔淨了',
        meaningEn: 'If you are willing, you can make me clean',
        meaningZh: '只要主肯動手，我一定有得救',
        cantoneseExplanation: '呢句說話展現出病人對耶穌有極大嘅信心。佢唔係懷疑耶穌「可唔可以」（能力），而係將決定權交託畀耶穌「肯唔肯」（主權）。',
        theologyEn: 'The correct posture of faith: recognizing Christ\'s absolute power while submitting entirely to His sovereign will.',
        theologyZh: '信心正確的姿態：承認基督擁有無所不能的治癒力，同時將決定權完全降服於主的主權與心意。'
      },
      {
        phrase: '耶穌動了慈心，伸手摸他',
        meaningEn: 'Moved with compassion, He touched him',
        meaningZh: '耶穌心疼佢，伸手摸一個邊緣人',
        cantoneseExplanation: '喺當時，摸痲瘋病人係犯規同會變污糟嘅。但耶穌無避開，反而主動去摸佢，用實際行動安慰呢個長年無被任何人觸摸過嘅靈魂。',
        theologyEn: 'Christ does not contract uncleanliness from sinners; rather, His holiness actively cleanses and overcomes human corruption.',
        theologyZh: '基督的聖潔不會被罪人傳染或污染；相反，祂主動的聖潔觸摸會吞噬並消除人的疾病與罪惡不潔。'
      }
    ]
  },
  'heal-peter-mother-in-law': {
    topicId: 'heal-peter-mother-in-law',
    coreHighlightsEn: [
      { title: 'Domestic Miracle', content: 'Jesus works inside a private home, demonstrating His lordship over the quiet, everyday struggles of His disciples.' },
      { title: 'Immediate Service', content: 'The completeness of the healing is shown by her rising immediately to host and serve them, bypassing normal convalescence.' },
      { title: 'Respect for Family', content: 'By healing Peter\'s mother-in-law, Jesus honors the family unit and supports the household of His leading disciple.' }
    ],
    coreHighlightsZh: [
      { title: '家庭生活中的神蹟', content: '神蹟發生在私人住宅，顯示耶穌不僅在公開場合行事，也關切並解決跟隨者隱秘的家庭重擔。' },
      { title: '康復與事奉的相連', content: '岳母痊癒後沒有休息或調養，而是「立刻起來服事他們」，這見證了神蹟的醫治旨在使人投入事奉。' },
      { title: '尊榮門徒的家庭', content: '耶穌透過醫治彼得的岳母，尊榮並扶持了祂核心門徒的家庭，使全家一同經歷恩典。' }
    ],
    gospelComparisons: [
      {
        aspectEn: 'Healing Action',
        aspectZh: '醫治的動作描寫',
        matthewTextEn: 'He touched her hand, and the fever left her.',
        matthewTextZh: '「摸了她的手，熱就退了。」',
        markTextEn: 'He came and took her by the hand and lifted her up.',
        markTextZh: '「進前拉著她的手，扶她起來，熱就退了。」（注重肢體觸摸與扶持的動作）。',
        lukeTextEn: 'He stood over her and rebuked the fever (medical personification).',
        lukeTextZh: '「站在她旁邊，斥責那熱病，熱就退了。」（路加作為醫生，將熱病擬人化，用斥責的方式驅除疾病）。'
      }
    ],
    cantoneseExplanations: [
      {
        phrase: '正害重熱病躺著',
        meaningEn: 'Lying sick with a high fever',
        meaningZh: '發高燒病到落唔到床',
        cantoneseExplanation: '熱病喺古代可能係致命嘅傳染病。形容彼得岳母當時燒得好犀利，成個人癱軟喺床上面，完全失去活動能力。',
        theologyEn: 'Fever in the ancient world was seen as a severe force draining life. Jesus\' control over it asserts His authority over physical decay.',
        theologyZh: '在古代，熱病常被視為消耗生命的邪惡力量。耶穌對發熱溫度的掌控，展示了祂對人體物理運作的絕對主權。'
      },
      {
        phrase: '就起來服事他們',
        meaningEn: 'She rose and began to serve them',
        meaningZh: '即刻起返身去招呼客人',
        cantoneseExplanation: '一般人發完大燒，起碼要躺幾日恢復體力。但彼得岳母一得醫治就即刻起返身招呼耶穌，證明醫治非常徹底。',
        theologyEn: 'Servant leadership is the natural response to experiencing Christ\'s healing power. We are restored to serve God and others.',
        theologyZh: '服事是經歷基督醫治恩典後的自然反應。身體得康復、靈性得甦醒的終極目的，是為了能起來服事主與人。'
      }
    ]
  },
  'heal-multitude-sunset': {
    topicId: 'heal-multitude-sunset',
    coreHighlightsEn: [
      { title: 'The Boundary of Sabbath', content: 'People waited until sunset (the end of Sabbath) to carry their sick, showing their strict adherence to law and Jesus\' grace waiting for them.' },
      { title: 'Individual Care', content: 'Luke records that Jesus laid hands on "every one of them," showing His personal and intimate care for each individual.' },
      { title: 'Messianic Secret', content: 'Jesus rebuked the demons, forbidding them to speak His identity, avoiding superficial messianic excitement.' }
    ],
    coreHighlightsZh: [
      { title: '安息日過後的蜂擁', content: '群眾等到日落（安息日結束）才抬病人前來，顯示他們守律法的嚴謹，以及耶穌默默在夜色中接待大眾的恩慈。' },
      { title: '一對一的親密關懷', content: '路加特別指出耶穌「按手在他們各人身上」，表明祂的醫治不是集體批量處理，而是對每個靈魂細緻的愛。' },
      { title: '彌賽亞身份的保護', content: '耶穌禁止污鬼開口洩露祂的身份，避免大眾產生錯誤的政治性彌賽亞狂熱，堅持十字架的謙卑道路。' }
    ],
    gospelComparisons: [
      {
        aspectEn: 'Theological Focus & Prophecy',
        aspectZh: '神學聚焦與先知預言',
        matthewTextEn: 'Quotes Isaiah 53:4: "He took our illnesses and bore our diseases" (Focus on substitutionary suffering).',
        matthewTextZh: '引用以賽亞書 53:4「祂代替我們的軟弱，擔當我們的疾病」，強調耶穌是代替性承受人類痛苦的「受苦僕人」。',
        markTextEn: 'Focuses on the busyness of the mission, "all the city was gathered at the door," and the silence imposed on demons.',
        markTextZh: '聚焦於事工的繁忙，形容「合城的人都聚集在門前」，並記錄耶穌嚴厲禁鬼發聲。',
        lukeTextEn: 'Specifies that Jesus laid His hands on every single one of them, stressing individual attention.',
        lukeTextZh: '醫生手筆。特別描寫醫治方法是「按手在他們各人身上」，展示對個別病患的極大愛心。'
      }
    ],
    cantoneseExplanations: [
      {
        phrase: '日落的時候',
        meaningEn: 'At sunset',
        meaningZh: '天黑太陽落山嗰陣',
        cantoneseExplanation: '猶太人嘅安息日係由星期五日落到星期六日落。日落代表安息日正式完結，大家終於可以搬運病人，所以成個鎮嘅人都湧去彼得門口。',
        theologyEn: 'The transition from law to grace. Under the law, people were restricted; once the day ended, they flooded to the source of life.',
        theologyZh: '律法限制與恩典釋放的轉折點。群眾因安息日的律法規定而不敢行動；安息日一結束，他們便迫不及待地奔向生命的源頭。'
      }
    ]
  },
  'heal-centurion-servant': {
    topicId: 'heal-centurion-servant',
    coreHighlightsEn: [
      { title: 'The Authority of the Word', content: 'The centurion recognized that Jesus\' word carried spiritual authority equivalent to military chain of command.' },
      { title: 'Praise of Gentile Faith', content: 'Jesus marvels at this Roman soldier, declaring His faith superior to anyone in covenant Israel.' },
      { title: 'Distance Overcome', content: 'The healing takes place instantly across space, demonstrating Jesus\' omnipresent divine sovereignty.' }
    ],
    coreHighlightsZh: [
      { title: '話語的權能主權', content: '百夫長將耶穌的話語比作軍隊的絕對命令，體認到耶穌在靈界擁有無上君王般的指揮權。' },
      { title: '外邦人信心的讚許', content: '耶穌對羅馬軍官的信心大加讚賞，稱其超越了擁有神聖應許與聖經啟示的以色列選民。' },
      { title: '跨越空間的醫治', content: '耶穌甚至不用到場，僅憑宣告便在瞬間遙控醫治了僕人，顯明祂的能力不受物理空間限制。' }
    ],
    gospelComparisons: [
      {
        aspectEn: 'The Intermediary Party',
        aspectZh: '請求醫治的對接方式',
        matthewTextEn: 'The centurion comes directly to Jesus and talks to Him face-to-face.',
        matthewTextZh: '馬太記述百夫長親自來到耶穌跟前，與耶穌面對面進行了信心對話。',
        markTextEn: 'Not recorded in Mark.',
        markTextZh: '馬可福音未收錄此神蹟。',
        lukeTextEn: 'The centurion sends Jewish elders first, then friends, out of deep humility.',
        lukeTextZh: '更具細節。路加寫道，百夫長出於謙卑，先託猶太長老去求耶穌，快到家時又託朋友去說不用進屋，體現極高層次的謙敬。'
      }
    ],
    cantoneseExplanations: [
      {
        phrase: '我當不起你到我舍下',
        meaningEn: 'I am not worthy to have you come under my roof',
        meaningZh: '我唔高攀得起你親自嚟我屋企',
        cantoneseExplanation: '舍下即係屋企。一個有權勢嘅羅馬軍官，對住猶太民間拉比話：「我唔配你入我屋企」，呢種謙卑喺當時極其罕見。',
        theologyEn: 'A profound recognition of holiness vs. sinfulness. The Roman officer senses the divine glory of Christ and his own spiritual unworthiness.',
        theologyZh: '罪人對神聖聖潔的敬畏自省。百夫長意識到耶穌神聖尊貴的身份，自覺不配讓這位聖潔的主進入外邦不潔之人的居所。'
      },
      {
        phrase: '只要你說一句話',
        meaningEn: 'Only say the word',
        meaningZh: '你只要開口講一句就夠喇',
        cantoneseExplanation: '百夫長認為耶穌掌管疾病，好似將軍指揮士兵一樣，行都唔使行，講一句話，靈界同病魔就會乖乖聽話。',
        theologyEn: 'The highest level of faith: trusting in the supreme authority of the Word of Christ without needing physical signs or presence.',
        theologyZh: '信心的最高境界：單單信靠基督話語的絕對權威，完全不需要肉眼的憑據、物理的觸摸或主耶穌的肉身臨在。'
      }
    ]
  },
  'heal-paralytic': {
    topicId: 'heal-paralytic',
    coreHighlightsEn: [
      { title: 'Action of Faith', content: 'Mark and Luke record in detail the action of the friends digging through the roof and lowering the mat. Seeing "their" faith, Jesus worked.' },
      { title: 'Forgiveness & Healing', content: 'Jesus first addresses the root problem of the human soul (forgiveness) before curing the physical suffering (healing).' },
      { title: 'Jesus\' Divinity', content: 'Scribes and Pharisees believed "only God can forgive sins." Jesus proved His divine authority by commanding the paralytic to walk instantly.' }
    ],
    coreHighlightsZh: [
      { title: '信心的行動', content: '馬可和路加福音詳細記錄了朋友們「拆房頂、縋褥子」的舉動。耶穌看見「他們」的信心，便動了工。' },
      { title: '赦罪與醫治', content: '耶穌先解決人靈魂的根本問題（赦罪），再解決肉體的痛苦（醫治）。' },
      { title: '耶穌的神性', content: '文士和法利賽人認為「只有神能赦罪」。耶穌透過讓癱子立刻行走，證明自己確實擁有來自神的赦罪權柄。' }
    ],
    gospelComparisons: [
      {
        aspectEn: 'Scene & Location',
        aspectZh: '場景與地點',
        matthewTextEn: 'Capernaum ("his own city"). Very brief, no house or crowd details.',
        matthewTextZh: '最精簡。只說是「自己的城」（即迦百農），完全沒有提到「屋子」或「人多」的背景。',
        markTextEn: 'Capernaum. In a house, door crowded with no room left.',
        markTextZh: '最生動、最具現場感。明確指出是「在屋子裡」，且形容「連門前都沒有空地」。',
        lukeTextEn: 'Pharisees and teachers of the law sitting by from Galilee, Judea, and Jerusalem. Emphasizes official religious scrutiny.',
        lukeTextZh: '最具神學與政治背景。特別交代台下坐著「從加利利各鄉村和猶太並耶路撒冷來的法利賽人和律法教師」，表明耶穌面對高規格的審查團。'
      },
      {
        aspectEn: 'Friends\' Actions',
        aspectZh: '朋友抬癱子的細節',
        matthewTextEn: '"Some people brought a paralytic lying on a bed." Omits all roof digging details.',
        matthewTextZh: '極簡略。只用了一句「有人用褥子抬著一個癱子到耶穌跟前來」，完全省略了拆房頂的過程。',
        markTextEn: 'Explicitly carried by four men. Tearing open the roof and lowering the mat.',
        markTextZh: '最細緻。明確寫出是由「四個人」抬來的。詳細描寫動作：「拆了房頂，既拆通了，就把癱子連所躺臥的褥子都縋下來。」',
        lukeTextEn: 'Lowered through the tiles (tiles = outer Greek/Roman style house structure fitting Gentile readers).',
        lukeTextZh: '同樣上房頂。特別提到「從瓦間（through the tiles）」縋下來，更符合路加寫信給外邦讀者（提阿非羅）時，外邦人所熟悉的希臘羅馬式瓦片屋頂結構。'
      },
      {
        aspectEn: 'Term for the Bed',
        aspectZh: '床/褥子的用詞',
        matthewTextEn: 'Klinē (generic term for a bed or couch).',
        matthewTextZh: '使用「褥子」(Klinē) —— 泛指一般的床或臥榻。',
        markTextEn: 'Krabbatos (poor man\'s straw mat or sleeping pad).',
        markTextZh: '使用「褥子」(Krabbatos) —— 這是基層平民、窮人或病人用來躺臥的「草薦」或「攜帶式睡墊」，符合其樸實的文風。',
        lukeTextEn: 'Klinidion (literary/medical term for a small cot/examination bed).',
        lukeTextZh: '使用「床」(Klinidion/Klinē) —— 路加是醫生，他的用詞比較文學、文雅，指「小病床」或「診察榻」。'
      },
      {
        aspectEn: 'Jesus\' Address',
        aspectZh: '耶穌對癱子的稱呼',
        matthewTextEn: '"Son/My child" (warm and fatherly).',
        matthewTextZh: '對癱子說：「小子，放心吧！」這是一個充滿為父心腸、極其親切和溫柔的稱呼。',
        markTextEn: '"Son/My child" (warm and fatherly).',
        markTextZh: '對癱子說：「小子，你的罪赦了。」同樣溫柔親切。',
        lukeTextEn: '"Friend/Man" (relatively objective and formal).',
        lukeTextZh: '對癱子說：「這個人，你的罪赦了。」用詞相對客觀和莊重。'
      },
      {
        aspectEn: 'Crowd\'s Reaction',
        aspectZh: '眾人最後反應',
        matthewTextEn: 'Amazed, glorified God who gave such authority to men.',
        matthewTextZh: '眾人「驚奇」，並歸榮耀與神，因為祂將這樣的權柄賜給「人」（強調人子耶穌在世上的代理權柄）。',
        markTextEn: 'Amazed, glorified God, saying "We never saw anything like this!".',
        markTextZh: '眾人「驚奇」，歸榮耀與神，並驚嘆說：「我們從來沒有見過這樣的事！」（強調神蹟的奇特與前所未見）。',
        lukeTextEn: 'Amazed, glorified God, filled with holy fear/awe, saying "We have seen paradoxes (paradoxa) today".',
        lukeTextZh: '最豐富。眾人不僅「驚奇」和「歸榮耀與神」，還多了「滿心懼怕」，並說：「我們今日看見非常的事了（Paradoxa，超越常理的奇事）」。'
      }
    ],
    cantoneseExplanations: [
      {
        phrase: '眾人都驚奇',
        meaningEn: 'Everyone was amazed',
        meaningZh: '全場睇到目瞪口呆',
        cantoneseExplanation: '喺場嘅所有人，包括普通百姓、甚至係原本嚟找碴嘅文士同法利賽人，一見到個癱子竟然可以即刻起返身、自己搬走張床，個個都嚇到呆咗、讚嘆不已。',
        theologyEn: 'The Greek root implies a state of being mentally disoriented by raw divine power. Withered muscles restoring instantly defies natural law.',
        theologyZh: '希臘原文意指「理智抽離、失去常態」的極度震撼。一個癱瘓多年、肌肉已萎縮的病人，在瞬間完全行得返，徹底顛覆了群眾對常理的認知。'
      },
      {
        phrase: '也歸榮耀與神',
        meaningEn: 'And glorified God',
        meaningZh: '認同上帝嘅能力',
        cantoneseExplanation: '大家驚完之後，就知道呢件事絕對唔係魔術或者騙局，而係真真正正出於上帝嘅大能，於是紛紛開口讚美神、將榮耀歸畀天父。',
        theologyEn: 'Miracles were never designed for self-aggrandizement, but to draw attention to the Father. The crowds correctly trace the miracle back to its source.',
        theologyZh: '耶穌行神蹟的目的從來不是要自己出名，而是引導人去認識神。群眾的反應證明這件神蹟成功將目光重新引回天父身上。'
      },
      {
        phrase: '並且滿心懼怕',
        meaningEn: 'And were filled with holy fear/awe',
        meaningZh: '對神聖威嚴嘅敬畏',
        cantoneseExplanation: '呢度嘅「懼怕」唔係睇恐怖片嗰種驚，而係一種「毛骨悚然、肅然起敬」嘅敬畏感（Holy Fear）。因為佢哋意識到眼前呢位耶穌唔單止識醫病，佢頭先仲開口「赦免」咗個癱子嘅罪，而只有神有權赦罪。罪人突然發現自己同至高無上、聖潔嘅神同處一室，自然會產生一種本能嘅戰兢同敬畏。',
        theologyEn: 'Holy fear is the natural human reaction when confronted by the manifest presence of God. If Jesus forgives sins, He operates with the authority of the Almighty.',
        theologyZh: '這是一種對神聖大能與臨在的「敬畏之情」（Holy Fear）。當人類驚覺耶穌不僅能醫病，更是以神蹟實證了祂擁有惟獨神才擁有的「赦罪權限」時，對造物主油然而生的震懾。'
      },
      {
        phrase: '我們今日看見非常的事了',
        meaningEn: 'We have seen extraordinary things today',
        meaningZh: '見證歷史性嘅一刻',
        cantoneseExplanation: '佢哋話：「我哋今日真係見到一件完全超乎想像、不可思議嘅大事呀！」',
        theologyEn: "\'Extraordinary things\' translates 'paradoxa' (the root of paradox), meaning contrary to received opinion or logic. The people confess that standard religious logic has been transcended by Jesus.",
        theologyZh: '「非常的事」原文為 paradoxa（英文 paradox「悖論/悖理」的字根），意指「違反常規、超越經驗」的事。群眾親口承認，舊有的規條與框架已被耶穌帶來的恩典和權能徹底打破。'
      }
    ]
  },
  'heal-withered-hand': {
    topicId: 'heal-withered-hand',
    coreHighlightsEn: [
      { title: 'Sabbath Mercy over Rituals', content: 'Jesus demonstrates that doing good and saving life is the true intent of the Sabbath, challenging strict legalistic restrictions.' },
      { title: 'Hardness of Heart Reflected', content: 'The Pharisees watched Jesus closely not out of devotion, but to find a reason to accuse Him, showing their spiritual blindness.' },
      { title: 'Creative Restoration Power', content: 'With a simple command to "Stretch out your hand," Jesus restores the withered hand instantly, showing His sovereign power.' }
    ],
    coreHighlightsZh: [
      { title: '安息日憐憫重於規條', content: '耶穌表明，在安息日行善和拯救生命才是安息日的真正本意，以此挑戰死板的律法教條。' },
      { title: '宗教領袖心硬的寫照', content: '法利賽人窺探耶穌並非出於敬虔，而是想尋找把柄來控告祂，這暴露了他們屬靈上的盲目。' },
      { title: '創造性的復原大能', content: '耶穌僅憑一句「伸出手來」的口頭命令，便使那隻枯乾的手瞬間復原，彰顯了祂的主權與創造性大能。' }
    ],
    gospelComparisons: [
      {
        aspectEn: 'Setting & Hand Details',
        aspectZh: '場景與手部細節',
        matthewTextEn: 'Capsulized setting, simply a man with a withered hand in their synagogue.',
        matthewTextZh: '場景最為精簡。僅提到「在那裡有一個人枯乾了一隻手」，並未詳細交代手部的左右。',
        markTextEn: 'Jesus enters the synagogue, a man with a withered hand is there. Emphasizes opponents watching Him.',
        markTextZh: '強調反對者的「窺探」。提到耶穌進了會堂，眾人窺探祂是否在安息日醫治，以便控告祂。',
        lukeTextEn: 'Specifies it was his "right hand" and mentions scribes and Pharisees watching Him.',
        lukeTextZh: '最精準的醫生視角。特別註明病人枯乾的是「右手」（右手對工作和生活更關鍵），同樣提到文士和法利賽人的窺探。'
      },
      {
        aspectEn: 'The Pit Analogy',
        aspectZh: '掉入坑中之羊的比喻',
        matthewTextEn: 'Contains the unique analogy of a sheep falling into a pit on the Sabbath and being lifted out.',
        matthewTextZh: '獨家收錄。耶穌用「羊在安息日掉在坑裡，難道不拉牠上來嗎」的比喻，說明人比羊貴重得多，因此安息日行善是合法的。',
        markTextEn: 'No sheep analogy; instead, Jesus asks a provocative direct question to the crowd.',
        markTextZh: '省略此比喻。改為耶穌直接發問：「在安息日行善行惡，救命害命，哪樣是可以的呢？」',
        lukeTextEn: 'No sheep analogy; Jesus asks the same provocative question as Mark.',
        lukeTextZh: '省略此比喻。同樣收錄了耶穌對文士和法利賽人所發出的「行善行惡、救命害命」之質問。'
      },
      {
        aspectEn: 'Jesus\' Emotion',
        aspectZh: '耶穌的情感反應',
        matthewTextEn: 'Focuses entirely on Jesus\' rational argument and command.',
        matthewTextZh: '未描寫情感。著重於耶穌的理性辯論以及「伸出手來」的命令。',
        markTextEn: 'Specifically notes Jesus looked around at them with anger, grieved at their hardness of heart.',
        markTextZh: '最生動的情感描寫。特別記錄耶穌「怒目周圍看他們，憂愁他們的心剛硬」，展示了聖潔的憤怒與哀痛。',
        lukeTextEn: 'Notes Jesus looked around at them all, but omits the explicit anger and grief words.',
        lukeTextZh: '簡化情感。僅提到耶穌「周圍看著他們眾人」，隨即吩咐病人伸出手來，省略了「怒目」與「憂愁」的形容詞。'
      },
      {
        aspectEn: 'The Final Conspiracy',
        aspectZh: '最後密謀的動作',
        matthewTextEn: 'Pharisees went out and plotted how they might destroy Him.',
        matthewTextZh: '指出法利賽人出去商議「怎樣可以除滅耶穌」。',
        markTextEn: 'Pharisees immediately conspired with the Herodians against Him.',
        markTextZh: '最突出的政治結盟。特別記錄法利賽人一出去，就同「希律一黨的人」商議如何除滅耶穌（宗教與政治宿敵因對抗耶穌而聯手）。',
        lukeTextEn: 'They were filled with fury/madness and discussed what they might do to Jesus.',
        lukeTextZh: '強調敵人的情緒。形容他們「滿心大怒（Anoia，意為失去理性的狂怒）」，彼此商議怎樣處置耶穌。'
      }
    ],
    cantoneseExplanations: [
      {
        phrase: '枯乾了一隻手',
        meaningEn: 'A withered hand',
        meaningZh: '右手萎縮、完全用唔到力',
        cantoneseExplanation: '形容嗰個病人隻手（路加寫明係右手）因病萎縮、肌肉無力、完全伸直唔到，生活同生計都受到極大影響。',
        theologyEn: 'Indicates severe muscular atrophy or paralysis. In that culture, a withered right hand meant the loss of manual labor and dignity.',
        theologyZh: '這代表嚴重的肌肉萎縮或神經癱瘓。在當時社會，失去右手右手意味著失去勞動能力、生計以及基本的社交尊嚴。'
      },
      {
        phrase: '憂愁他們的心剛硬',
        meaningEn: 'Grieved at their hardness of heart',
        meaningZh: '為佢哋嘅冷酷無情而痛心',
        cantoneseExplanation: '耶穌見到呢班法利賽人只顧守死板嘅規條，對一個有需要嘅病人完全無憐憫之心，覺得又嬲又難過。「剛硬」係指心腸冷酷好似舊石頭咁。',
        theologyEn: 'Combines holy anger (indignation against injustice) and grief (sorrow over spiritual blindness). God is personally affected by human coldness.',
        theologyZh: '結合了對不公義的聖潔憤怒，以及對靈魂盲目的悲傷。表明神會因人類自我中心、缺乏憐憫的冷酷心腸而感到痛苦。'
      },
      {
        phrase: '滿心大怒',
        meaningEn: 'Filled with rage/madness',
        meaningZh: '慶到爆、完全失去理智',
        cantoneseExplanation: '法利賽人同文士見到耶穌公然挑戰佢哋嘅權威，重當眾治好個病人，激到佢哋怒火中燒、直情失控想諗計害死耶穌。',
        theologyEn: 'The Greek \'anoia\' implies a state of senseless, irrational fury. The religious elite valued their traditions more than the miraculous restoration of human life.',
        theologyZh: '希臘原文 anoia 意指「失去理性的瘋狂怒火」。宗教精英對傳統條規的偏執，使他們在見證生命復原的神蹟時，產生了要除滅耶穌的瘋狂殺意。'
      }
    ]
  },
  'raise-widow-son': {
    topicId: 'raise-widow-son',
    coreHighlightsEn: [
      { title: 'Pure Grace', content: 'Unlike other miracles where people seek Jesus, here Jesus initiates the miracle purely out of divine compassion.' },
      { title: 'The Power of the Word', content: 'By speaking to the dead body ("Young man, arise"), Jesus shows that the dead hear the voice of the Son of God.' },
      { title: 'Social Restoration', content: 'Jesus "gave him to his mother," showing that His miracles aim to restore broken family bonds and social safety nets.' }
    ],
    coreHighlightsZh: [
      { title: '純然的主動恩典', content: '與其他病人主動求助的神蹟不同，拿因城的復活完全是耶穌見到哀哭的寡婦後，主動發起的主權憐憫。' },
      { title: '生命話語的呼喊', content: '耶穌直接向冰冷的屍體說話（「少年人，我吩咐你起來」），證明死亡在生命之主的話語面前必須退去。' },
      { title: '家庭親情的恢復', content: '耶穌將復活的少年「交給他母親」，展示出神蹟不單是能力的彰顯，更是為了重聚破碎的親情與社會關懷。' }
    ],
    gospelComparisons: [
      {
        aspectEn: 'Synoptic Uniqueness',
        aspectZh: '同觀福音收錄特點',
        matthewTextEn: 'Not recorded in Matthew.',
        matthewTextZh: '馬太福音未收錄此神蹟。',
        markTextEn: 'Not recorded in Mark.',
        markTextZh: '馬可福音未收錄此神蹟。',
        lukeTextEn: 'Unique to Luke. Emphasizes the themes of mercy to widows, outcasts, and the poor, fitting Luke\'s social theology.',
        lukeTextZh: '路加福音獨家收錄。高度契合路加福音關注弱勢群體、孤兒寡婦的社會關懷神學主題。'
      }
    ],
    cantoneseExplanations: [
      {
        phrase: '動了慈心，對她說不要哭',
        meaningEn: 'Moved with compassion, He said: "Do not weep"',
        meaningZh: '耶穌好心疼佢，安慰佢唔好喊',
        cantoneseExplanation: '「慈心」指發自內臟深處嘅痛心。耶穌見到呢位寡婦無咗唯一嘅依靠，真係慘上加慘，於是未等任何人開口，就主動行埋去安慰佢，叫佢唔好再喊。',
        theologyEn: 'Shows the deep emotional nature of God. Jesus does not stand aloof from human grief; He shares it and acts to reverse it.',
        theologyZh: '顯明神真切的同理心。耶穌不是冷眼旁觀人類命運的旁觀者，祂感同身受人的痛苦，並主動介入扭轉悲劇。'
      }
    ]
  },
  'calm-storm': {
    topicId: 'calm-storm',
    coreHighlightsEn: [
      { title: 'The Sleep of Faith', content: 'Jesus sleeping on a cushion during the storm demonstrates perfect peace and utter trust in the Father\'s keeping.' },
      { title: 'Authority over Creation', content: 'By rebuking the wind and waves, Jesus is shown as the creator Yahweh who alone rules the roaring seas.' },
      { title: 'Rebuking Unbelief', content: 'Jesus rebukes the disciples\' fear as a lack of faith, showing that fear is the direct opposite of trusting God.' }
    ],
    coreHighlightsZh: [
      { title: '信心安息的沉睡', content: '耶穌在狂風暴雨中安然沉睡，展示了祂對天父保守的完美平安與全然信靠，與門徒的恐慌形成強烈對比。' },
      { title: '大自然的造物主權', content: '耶穌用話語斥責狂風和大浪，表明祂就是舊約中那位唯一能平息狂浪、掌管宇宙大能的造物主雅威。' },
      { title: '對小信與恐懼的斥責', content: '耶穌將門徒的極度恐懼直接歸因於「沒有信心」，指出恐懼實質上是對神善意與能力的懷疑。' }
    ],
    gospelComparisons: [
      {
        aspectEn: 'Disciples\' Desperate Cry',
        aspectZh: '門徒求救的口氣差異',
        matthewTextEn: '"Save us, Lord; we are perishing." (Focus on worshipful petition).',
        matthewTextZh: '「主啊，救我們，我們喪命啦！」（態度較為恭敬，帶有主僕之尊稱）。',
        markTextEn: '"Teacher, do you not care that we are perishing?" (Focus on panic and slight accusation).',
        markTextZh: '「夫子！我們喪命，你不顧嗎？」（語氣最驚慌，甚至帶有對耶穌不顧他們死活的抱怨與責怪）。',
        lukeTextEn: '"Master, Master, we are perishing!" (Doubled title shows immediate terror).',
        lukeTextZh: '「夫子！夫子！我們喪命啦！」（重複呼喊稱呼，展現十萬火急、危在旦夕的驚恐狀態）。'
      }
    ],
    cantoneseExplanations: [
      {
        phrase: '門徒來醒了他，話我們喪命啦',
        meaningEn: 'The disciples woke Him, saying "We are perishing!"',
        meaningZh: '門徒叫醒耶穌話：「我哋就嚟無命喇！」',
        cantoneseExplanation: '形容門徒喺狂風大浪之下，驚到面青口唇白，覺得條船實沉，於是粗暴咁搖醒耶穌，甚至有啲怪責耶穌點解仲訓得着。',
        theologyEn: 'Highlights the weakness of human nature when confronted by immediate mortality. Even eye-witness disciples lost perspective under pressure.',
        theologyZh: '暴露了人類在死亡威脅面前的軟弱本性。即使是天天跟隨主的門徒，在現實的危機風暴中也會瞬間失去屬靈的洞察力。'
      },
      {
        phrase: '住了吧！靜了吧！',
        meaningEn: 'Peace! Be still!',
        meaningZh: '同我停！收聲！',
        cantoneseExplanation: '耶穌斥責風浪嘅希臘原文，意思係「收聲」同「被戴上口箍」（Be muzzled）。就好像耶穌趕鬼嗰陣叫鬼收聲一樣，用命令式降伏自然界。',
        theologyEn: 'The same verb used for exorcism. Creation is treated as a servant that must obey the immediate, sovereign command of the King.',
        theologyZh: '耶穌斥責風浪的用詞與趕鬼相同。這表明大自然在造物主面前只是僕役，必須絕對服從君王帶著權柄的命令。'
      }
    ]
  },
  'exorcise-legion': {
    topicId: 'exorcise-legion',
    coreHighlightsEn: [
      { title: 'The Legion Confession', content: 'The demons identify themselves as "Legion" (matching a Roman military unit of 6,000 soldiers), showing severe oppression.' },
      { title: 'Value of One Soul', content: 'By allowing 2,000 pigs to drown to deliver one man, Jesus shows that a single human soul is worth more than huge commercial assets.' },
      { title: 'Community Fear of Change', content: 'The townspeople asked Jesus to leave because they feared His power and valued their financial interests over human restoration.' }
    ],
    coreHighlightsZh: [
      { title: '「群」鬼附身的壓迫', content: '污鬼自稱「群」（希臘文 Legion，代表羅馬軍團編制約 6,000 人），表明該名男子承受著極其沉重、系統性的屬靈壓制。' },
      { title: '靈魂與物質的價值對比', content: '耶穌容許二千隻豬墜海死亡以換取一個人的得釋放，表明在主眼中，一個靈魂的價值遠超巨大的商業財富。' },
      { title: '物質利益高於人命的盲目', content: '城裡的人因害怕耶穌的大能及痛失豬群的經濟損失，竟央求耶穌離開，暴露出人類寧要財物也不要救恩的悲哀。' }
    ],
    gospelComparisons: [
      {
        aspectEn: 'Number of Possessed Men',
        aspectZh: '被鬼附者的人數記載',
        matthewTextEn: 'Mentions "two demon-possessed men" coming out of the tombs.',
        matthewTextZh: '寫明是「兩個被鬼附的人」從墳塋裡出來迎著祂。',
        markTextEn: 'Focuses on "one man" with an unclean spirit, detailing his severe state.',
        markTextZh: '聚焦於「一個人」，並對他的慘狀（大聲喊叫、用石頭砍自己、鐵鏈鎖不住）做了最細緻的刻畫。',
        lukeTextEn: 'Focuses on "one man" who had not worn clothes or lived in a house for a long time.',
        lukeTextZh: '聚焦於「一個人」，特別指明他「許久不穿衣服，不住房子，只住在墳塋裡」。'
      }
    ],
    cantoneseExplanations: [
      {
        phrase: '坐在耶穌腳前，穿著衣服，心裡明白過來',
        meaningEn: 'Sitting at the feet of Jesus, clothed and in his right mind',
        meaningZh: '著返衫、定返神，乖乖坐在耶穌腳前',
        cantoneseExplanation: '之前呢個人係癲嘅、唔著衫、四處搞事。依家鬼走咗，佢完全恢復正常，好似一個謙卑嘅門徒咁安靜聽耶穌講嘢，對比極大。',
        theologyEn: 'The ultimate purpose of spiritual deliverance: restoring human dignity, sanity, and positioning the believer as a disciple at Christ\'s feet.',
        theologyZh: '屬靈釋放的終極果效：使被扭曲的人性重獲尊嚴、恢復理智與清明，並將得救者重塑為一個坐在主腳前安靜聽道的門徒。'
      }
    ]
  },
  'heal-bleeding-woman': {
    topicId: 'heal-bleeding-woman',
    coreHighlightsEn: [
      { title: 'The Touch of Faith', content: 'The woman believed that even touching the fringe of Jesus\' robe would transfer healing power, showing deep faith.' },
      { title: 'Public Identification', content: 'Jesus stops to identify her, not to shame her, but to heal her emotional isolation and call her "Daughter."' },
      { title: 'Shalom Restored', content: 'Jesus says "Go in peace (Shalom)," showing she is restored physically, socially, and spiritually.' }
    ],
    coreHighlightsZh: [
      { title: '信心的衣角觸摸', content: '婦人深信只需觸摸耶穌的衣裳繸子就能得醫治，展現出不求矚目、只求連屬的神聖信心。' },
      { title: '從黑暗走向光明的確認', content: '耶穌在擁擠中特意尋找她，是為了讓她從暗中摸索走向公開的蒙恩，當眾宣佈她的痊癒以消除社會排斥。' },
      { title: '全面和平（Shalom）的恢復', content: '耶穌稱呼她為「女兒」，並叫她「平平安安地回去」，使她破碎的身體、受創的心靈及宗教地位全面復原。' }
    ],
    gospelComparisons: [
      {
        aspectEn: 'Description of Her Treatment History',
        aspectZh: '對求醫經歷的描寫',
        matthewTextEn: 'Very brief: "a woman who had suffered from a discharge of blood for twelve years."',
        matthewTextZh: '極簡。只寫「有一個女人，患了十二年的血漏」。',
        markTextEn: 'Detailed: she had suffered much under many physicians, spent all she had, and was no better but grew worse.',
        markTextZh: '最寫實。描寫她在好些醫生手裡受了許多的苦，花盡了她所有的，不但沒有好，反倒更重了。',
        lukeTextEn: 'Literary/gentle: she had spent all her living on physicians, and could not be healed by anyone.',
        lukeTextZh: '溫和。寫她「在醫生手裡花盡了她一切養生的，並沒有一人能醫好她」，指明無人能治。'
      }
    ],
    cantoneseExplanations: [
      {
        phrase: '我只摸他的衣裳，就必痊癒',
        meaningEn: 'If I only touch His garment, I will be made well',
        meaningZh: '我只要偷偷摸下佢件衫就一定會好番',
        cantoneseExplanation: '血漏病令呢個女人喺猶太律法下被列為「永久不潔」。所以佢唔敢公然求醫，只能夠偷偷地喺人群後面摸衣角。',
        theologyEn: 'The purity of Christ is contagious. Instead of her uncleanliness defiling Jesus, Jesus\' holiness flows out to restore her.',
        theologyZh: '基督的聖潔具有「傳染性」。按照律法是不潔傳染潔淨，但在基督裡卻是祂的主動聖潔流出，反向潔淨了婦人的不潔與血漏。'
      }
    ]
  },
  'raise-jairus-daughter': {
    topicId: 'raise-jairus-daughter',
    coreHighlightsEn: [
      { title: 'Do Not Fear, Only Believe', content: 'Jesus challenges Jairus to maintain faith even when the situation advances from sickness to death.' },
      { title: 'Sleep of Death', content: 'Jesus declares the child is "sleeping," showing that in His eyes, death is temporary and easily reversed.' },
      { title: 'Talitha Cumi', content: 'Jesus speaks in Aramaic, demonstrating His gentle, fatherly authority as He pulls her back to life.' }
    ],
    coreHighlightsZh: [
      { title: '超越死亡的信心挑戰', content: '在傳來女兒死訊的絕望時刻，耶穌發出偉大的宣告「不要怕，只要信！」，將信心推向超越死亡的維度。' },
      { title: '死亡在主眼中是睡覺', content: '耶穌宣告女孩「不是死了，是睡著了」，表明在生命源頭的面前，肉身的死亡只是短暫且極易被喚醒的狀態。' },
      { title: '溫柔的「大利大古米」', content: '耶穌用當時親切的阿拉姆語呼喚「閨女，起來！」，如同父親清晨喚醒熟睡的女兒一般溫柔。' }
    ],
    gospelComparisons: [
      {
        aspectEn: 'Initial Request Context',
        aspectZh: '父親起初求醫時女兒的狀況',
        matthewTextEn: 'Jairus says: "My daughter has just died, but come and lay your hand on her..."',
        matthewTextZh: '最緊湊。父親一來就說「我女兒剛死了，求你去按手在她身上...」。',
        markTextEn: 'Jairus says: "My little daughter is at the point of death. Come and lay your hands on her..."',
        markTextZh: '進程清晰。父親說「我的小女兒快要死了，求你來按手在她身上」，隨後在路中才傳來死訊。',
        lukeTextEn: 'Notes it was his only daughter, about twelve years of age, and she was dying.',
        lukeTextZh: '人文關懷。路加特別指出「這是他的獨生女，約有十二歲，快要死了」，增添了父親絕望與悲痛的色彩。'
      }
    ],
    cantoneseExplanations: [
      {
        phrase: '大利大古米',
        meaningEn: 'Talitha cumi (Aramaic command)',
        meaningZh: '女仔，我叫你起返身',
        cantoneseExplanation: '呢句係當時日常用語，通常係媽媽叫醒訓緊覺嘅細路女用嘅。耶穌用呢句說話，充滿溫暖、毫無儀式，溫柔咁拉佢起返身。',
        theologyEn: 'Illustrates the personal, tender, and effortless authority of God over death. Raising the dead is as simple as waking a sleeping child.',
        theologyZh: '彰顯了天主對死亡不費吹灰之力的溫柔主權。叫醒死人就如同父母叫醒沉睡的孩子一樣自然、溫暖與簡單。'
      }
    ]
  },
  'exorcise-mute-demoniac': {
    topicId: 'exorcise-mute-demoniac',
    coreHighlightsEn: [
      { title: 'Restoration of Speech', content: 'By casting out the demon, Jesus restores the man\'s social identity and ability to worship God through speech.' },
      { title: 'Amazed Crowds', content: 'The crowds confess that such miracles are unprecedented in the entire history of covenant Israel.' },
      { title: 'The Beelzebul Slander', content: 'Pharisees attribute Jesus\' divine power to Beelzebul, showing their fatal spiritual blindness.' }
    ],
    coreHighlightsZh: [
      { title: '說話與社交能力的恢復', content: '耶穌藉著趕鬼，開啟了被封閉的啞巴之口，使其重新獲得發聲表達、參與社交與讚美上帝的權力。' },
      { title: '群眾驚嘆前所未見', content: '選民群眾親眼見證後由衷發出讚嘆，承認在以色列漫長歷史中，從未見過如此具有直接權能的神蹟。' },
      { title: '法利賽人惡意的誹謗', content: '宗教領袖將神的作為惡意扭曲為「靠鬼王趕鬼」，暴露出他們為維護自身權威的屬靈瞎眼。' }
    ],
    gospelComparisons: [
      {
        aspectEn: 'Synoptic Parallel',
        aspectZh: '福音書平行記載',
        matthewTextEn: 'Recorded in Matthew 9:32-34; later repeated in a similar dispute in Matthew 12 / Luke 11.',
        matthewTextZh: '收錄於馬太福音 9:32-34；與後來馬太 12 章及路加 11 章「別西卜爭議」的背景相近。',
        markTextEn: 'Not recorded in Mark.',
        markTextZh: '馬可福音未收錄此獨立神蹟。',
        lukeTextEn: 'A similar account appears in Luke 11:14-15.',
        lukeTextZh: '路加福音 11:14-15 記載了類似的趕鬼使啞巴說話的神蹟，並引發了相同的別西卜爭論。'
      }
    ],
    cantoneseExplanations: [
      {
        phrase: '鬼出去，啞巴就說出話來',
        meaningEn: 'When the demon was cast out, the mute man spoke',
        meaningZh: '鬼一被趕走，啞巴即刻開到口講野',
        cantoneseExplanation: '表明個啞巴不能說話，根源係受邪靈壓制。鬼一走，捆綁解除，佢即時能說話，大家都覺得神奇。',
        theologyEn: 'Demonstrates the holistic saving work of Jesus, who liberates the physical body by addressing the spiritual root of demonic oppression.',
        theologyZh: '展示了耶穌全人救贖的事工。祂透過解除屬靈層面的魔鬼壓制，直接恢復了肉體層面的生理機能，重塑神的造物。'
      }
    ]
  },
  'feed-5000': {
    topicId: 'feed-5000',
    coreHighlightsEn: [
      { title: 'The Test of Faith', content: 'Jesus tests Philip and the disciples by asking them to feed the crowd, exposing their reliance on human logic and calculations.' },
      { title: 'The Child\'s Offering', content: 'Jesus multiplies the small lunch of five barley loaves and two fish, showing that God uses tiny, humble offerings to accomplish massive tasks.' },
      { title: 'The Messianic Feast', content: 'Jesus replicates the manna in the wilderness, pointing to Himself as the ultimate Bread of Life that satisfies forever.' }
    ],
    coreHighlightsZh: [
      { title: '門徒信心的試煉', content: '耶穌故意發問「我們從哪裡買餅」，藉此考驗門徒，暴露了他們只看銀錢預算、依賴人世邏輯的盲點。' },
      { title: '孩童奉獻的倍增', content: '耶穌接過並倍增了小孩子卑微的五餅二魚便餐，表明上帝喜悅並使用人看為微不足道的主動奉獻。' },
      { title: '新約曠野的筵席', content: '耶穌在曠野分餅，呼應了摩西降下嗎哪的歷史，並以「十二籃」零碎象徵對以色列十二個支派的豐盛供應。' }
    ],
    gospelComparisons: [
      {
        aspectEn: 'Details on the Bread & Provisions',
        aspectZh: '食物來源與細節描寫',
        matthewTextEn: '"We have here only five loaves and two fish" (No child mentioned).',
        matthewTextZh: '簡明。門徒直接說「我們這裡只有五個餅、兩條魚」，未提及食物的來源者是誰。',
        markTextEn: 'Jesus tells them: "Go and see." They find out they have five loaves and two fish. Grouped people in hundreds and fifties on green grass.',
        markTextZh: '注重秩序與場景。描寫眾人一班一班地坐下，有的一百，有的五十，並特別提到坐在「青草地」上。',
        lukeTextEn: 'Emphasizes sitting down in groups of about fifty each.',
        lukeTextZh: '井然有序。耶穌吩咐門徒叫眾人一排一排地坐下，每排大約五十個人。',
        jhnTextEn: 'Uniquely identifies a young lad (paidarion) who brought "five barley loaves" (poorer class food) and two fish. Identifies Andrew as the finder.',
        jhnTextZh: '細節最為豐富。獨家寫出食物是由一個「孩童」帶來的，且註明是「大麥餅」（當時平民窮人的粗糧）。明確指出是安得烈找到這孩童的。'
      }
    ],
    cantoneseExplanations: [
      {
        phrase: '分開五個餅、兩條魚',
        meaningEn: 'Divided the five loaves and two fish',
        meaningZh: '分開五個大麥餅同兩條小鹹魚',
        cantoneseExplanation: '「大麥餅」係最平嘅基層粗糧；「魚」原文通常指醃製嘅小鹹魚。耶穌用呢啲寒酸嘅野食餵飽幾萬人，完全超乎想像。',
        theologyEn: 'Barley loaves represent poverty and low status. God takes the humble, cheap things of the world to demonstrate His sovereign wealth and glory.',
        theologyZh: '大麥餅代表貧寒與卑微。上帝特意揀選並使用世上貧寒、粗糙的物品，去成就極其宏大豐盛的神聖奇蹟，顯明祂的榮耀。'
      }
    ]
  },
  'walk-on-water': {
    topicId: 'walk-on-water',
    coreHighlightsEn: [
      { title: 'The Divine I AM', content: 'Jesus\' declaration "It is I" (Ego Eimi) is a direct claim to the divine name Yahweh, who alone tramples the waves.' },
      { title: 'Peter\'s Bold step', content: 'Matthew uniquely records Peter walking on water, teaching that faith requires keeping eyes on Christ rather than the storm.' },
      { title: 'Instant Harboring', content: 'John records that as soon as Jesus entered the boat, it immediately reached its destination, showing sovereignty over space.' }
    ],
    coreHighlightsZh: [
      { title: '「我是」的神聖宣告', content: '耶穌在風浪中宣告「是我」（Ego Eimi），這正是舊約上帝神聖啟示的名字「我是」，顯明祂是主宰。' },
      { title: '彼得的海面行走試煉', content: '馬太獨家收錄彼得憑信心走在水面、因看風浪而下沉的過程，警示信心必須聚焦於基督。' },
      { title: '超越空間的瞬間抵岸', content: '約翰福音特別記錄「船立刻到了他們所要去的地方」，暗示了耶穌平息風浪，更能超越地理空間的限制。' }
    ],
    gospelComparisons: [
      {
        aspectEn: 'Peter\'s Water Walking Adventure',
        aspectZh: '彼得踏水嘗試的記述',
        matthewTextEn: 'Uniquely records Peter asking to come, walking on water, sinking, crying "Lord save me", and Jesus catching him.',
        matthewTextZh: '獨家收錄。彼得求耶穌讓他走過去、彼得踏水、害怕下沉、耶穌伸手拉住他並斥責他小信的過程。',
        markTextEn: 'Omits Peter\'s walking. Mentions Jesus "meant to pass by them" (alluding to the divine passing by/manifestation in Job/Exodus).',
        markTextZh: '省略彼得情節。但特別描述耶穌「好像要走過他們去」（此處呼應舊約耶和華顯現時從旁經過的神顯神學）。',
        lukeTextEn: 'Entire miracle is not recorded in Luke.',
        lukeTextZh: '路加福音完全沒有收錄這件神蹟。'
      }
    ],
    cantoneseExplanations: [
      {
        phrase: '你們放心！是我，不要怕！',
        meaningEn: 'Take heart; it is I. Do not be afraid.',
        meaningZh: '定啲嚟！係我呀，唔使驚！',
        cantoneseExplanation: '波濤洶湧嘅黑夜入面，門徒以為見鬼，嚇到大叫。耶穌用一句「是我」安慰佢哋，叫佢哋個心定落嚟。',
        theologyEn: 'The Greek "Ego Eimi" matches God\'s revelation to Moses at the burning bush. Jesus is the Creator Yahweh present in their storm.',
        theologyZh: '希臘文 Ego Eimi 直接對應舊約出埃及記中神向摩西啟示的自有永有聖名。耶穌以此向門徒宣告：祂就是與他們同在風雨中的主。'
      }
    ]
  },
  'feed-4000': {
    topicId: 'feed-4000',
    coreHighlightsEn: [
      { title: 'Gentile Ingathering', content: 'Unlike the Jewish feeding of 5000, this takes place in Gentile Decapolis, showing the gospel is for all nations.' },
      { title: 'The Seven Baskets', content: 'Seven large baskets (Spyridas) remain, representing spiritual completeness and the 70 nations of the Gentile world.' },
      { title: 'Patient Compassion', content: 'Jesus highlights that the crowd had been with Him for three days, showing His deep concern for their physical well-being.' }
    ],
    coreHighlightsZh: [
      { title: '外邦世界的救恩席位', content: '此神蹟發生在以非猶太人為主的低加波利地區，表明天國的生命之糧與救恩筵席同樣對外邦人開放。' },
      { title: '「七」與大筐子的象徵', content: '剩下的零碎裝滿七個大筐子，象徵普世萬民的完全飽足。' },
      { title: '體貼肉體需要的耐心', content: '耶穌因群眾同祂待了三天而動慈心，表明祂不僅關注靈性教導，也極其在乎人類身體的飢餓與生存需要。' }
    ],
    gospelComparisons: [
      {
        aspectEn: 'Contrast with Feeding of 5,000',
        aspectZh: '與「五餅二魚」的關鍵字詞對比',
        matthewTextEn: 'Uses "seven loaves", "few small fish", and "seven large baskets" (spyridas). Places it after healing in Decapolis.',
        matthewTextZh: '使用「七個餅」、「幾條小魚」和「七個大筐子」(Spyridas)。在馬太福音中，此事件緊隨外邦地區的大量醫治之後。',
        markTextEn: 'Uses same distinct terms, contrasting "kophinos" (5,000 baskets) with "spyrise" (4,000 baskets) in Mark 8:19-20.',
        markTextZh: '同樣使用這些特定詞彙。後來在馬可 8:19-20 中，耶穌親自出題考門徒，將五餅二魚剩下的「籃子」與七餅二魚剩下的「筐子」做了字詞上的區分。',
        lukeTextEn: 'Not recorded in Luke.',
        lukeTextZh: '路加福音未收錄此獨立神蹟。'
      }
    ],
    cantoneseExplanations: [
      {
        phrase: '裝滿了七個筐子',
        meaningEn: 'Filled seven large baskets',
        meaningZh: '執返七個大竹筐嘅零碎',
        cantoneseExplanation: '呢度嘅「筐子」同五餅二魚嘅「籃子」唔同，係指一種可以裝得落一個人嘅大型編織竹筐，分量極大。',
        theologyEn: 'Spyridas is a Gentile-style large hamper. It underlines that the provision for the Gentile world is abundant, complete (number 7), and substantial.',
        theologyZh: 'Spyridas 是外邦人常用的大竹筐。這再次修復了上帝為外邦世界所預備的恩典不僅分量巨大，且在靈性上是完全的（數字 7）。'
      }
    ]
  },
  'heal-bethesda-invalid': {
    topicId: 'heal-bethesda-invalid',
    coreHighlightsEn: [
      { title: 'The Question of Desire', content: 'Jesus asks: "Do you want to be healed?", challenging the invalid to look beyond his passive lifestyle and self-pity.' },
      { title: 'Exposing Empty Hope', content: 'The man was looking at the pool and superstitious waiting; Jesus bypassed the pool to heal him directly by His Word.' },
      { title: 'Sabbath Controversy', content: 'By ordering the man to carry his mat on the Sabbath, Jesus deliberately challenges dead religious regulations.' }
    ],
    coreHighlightsZh: [
      { title: '「你要痊癒嗎」的詰問', content: '耶穌直截了當地詢問病了三十八年的癱子，挑戰他突破長期的自憐、被動心態與對命運的妥協。' },
      { title: '破除迷信與虛假盼望', content: '病人長年寄望於池水攪動的傳說；耶穌完全繞過池水，直接以帶有權能的話語使他康復，引導他看向神。' },
      { title: '安息日條規的主動挑戰', content: '耶穌吩咐他在安息日拿著褥子行走，刻意打破宗教權威的繁瑣規條，重申祂才是安息日的主。' }
    ],
    gospelComparisons: [
      {
        aspectEn: 'Synoptic Parallel',
        aspectZh: '同觀福音對照',
        matthewTextEn: 'Not recorded in Synoptics.',
        matthewTextZh: '馬太福音未收錄。',
        markTextEn: 'Not recorded in Synoptics.',
        markTextZh: '馬可福音未收錄。',
        lukeTextEn: 'Not recorded in Synoptics.',
        lukeTextZh: '路加福音未收錄。'
      },
      {
        aspectEn: 'Johannine Theology of the Signs',
        aspectZh: '約翰福音獨家神學記述',
        matthewTextEn: 'N/A',
        matthewTextZh: '無',
        markTextEn: 'N/A',
        markTextZh: '無',
        lukeTextEn: 'Specifies Bethesda pool details, the 38-year duration, and the profound legal/theological debate on Jesus\' unity of work with the Father ("My Father is working... and I am working").',
        lukeTextZh: '詳細記述了池子周圍的廊子、癱子三十八年的患病史，以及因這件神蹟引發耶穌宣稱自己與天父平等工作的神學辯論。'
      }
    ],
    cantoneseExplanations: [
      {
        phrase: '你要痊癒嗎？',
        meaningEn: 'Do you want to be healed?',
        meaningZh: '你想唔想好番呀？',
        cantoneseExplanation: '問一個病咗三十八年嘅人「想唔想好」，好似多此一問。但其實好多長期病人已經適應咗乞食、自憐嘅生活，耶穌要佢重新燃起改變生命嘅決心。',
        theologyEn: 'Jesus addresses the human will. True restoration requires the willing abandonment of a lifestyle defined by passive defeat and victimhood.',
        theologyZh: '耶穌在挑戰人的自由意志。真正的生命翻轉與屬靈痊癒，需要人主動地告別那以受害者自居的被動與沉淪生活。'
      }
    ]
  },
  'heal-born-blind': {
    topicId: 'heal-born-blind',
    coreHighlightsEn: [
      { title: 'Rejecting Karmic Retribution', content: 'Jesus refutes that blindness is caused by personal or parental sin, shifting the focus to a stage for God\'s works.' },
      { title: 'The Clay & Siloam Wash', content: 'Jesus uses physical mud and commands a wash in Siloam (Sent), requiring active obedience from the blind man.' },
      { title: 'Spiritual Sight vs Blindness', content: 'The miracle sets up a contrast where the blind man gains spiritual sight while the religious elite spiral into spiritual blindness.' }
    ],
    coreHighlightsZh: [
      { title: '拒絕因果報應的神學', content: '耶穌否定了生來瞎眼是因犯罪的傳統報應論，宣告這是要成為顯明神榮耀作為的舞台。' },
      { title: '泥土抹眼與西羅亞的順服', content: '耶穌用泥抹眼並吩咐他去西羅亞清洗，這要求瞎子必須付諸信心的順服行動才能經歷神蹟。' },
      { title: '屬靈視力與瞎眼的逆轉', content: '神蹟引發了強烈對比：瞎眼的人在質詢中信心遞進，最終拜耶穌為神；而自稱看得到的法利賽人卻陷入屬靈的黑暗瞎眼。' }
    ],
    gospelComparisons: [
      {
        aspectEn: 'Synoptic Comparison',
        aspectZh: '同觀福音平行對照',
        matthewTextEn: 'Not recorded in Synoptics.',
        matthewTextZh: '馬太福音未收錄。',
        markTextEn: 'Similar spit/mud technique used in blind healing at Bethsaida (Mark 8:22-26), but this born-blind Jerusalem account is unique to John.',
        markTextZh: '馬可福音 8:22-26 記載過類似用唾沫抹眼醫治瞎子的漸進過程，但耶路撒冷醫治生來瞎眼者的事件是約翰福音獨有的。',
        lukeTextEn: 'Not recorded in Synoptics.',
        lukeTextZh: '路加福音未收錄。'
      }
    ],
    cantoneseExplanations: [
      {
        phrase: '去西羅亞池子裡去洗',
        meaningEn: 'Go wash in the Pool of Siloam',
        meaningZh: '去西羅亞池洗乾淨對眼',
        cantoneseExplanation: '耶穌將泥抹喺佢眼度，佢睇唔到野仲滿眼泥沙，要行一段路去西羅亞池洗。如果佢無信心，一定會覺得被整蠱；但他信而順服，洗完就重見光明。',
        theologyEn: 'Siloam means "Sent". Washing in Siloam symbolizes washing in the Sent One (Christ). Faith is validated through active, physical obedience.',
        theologyZh: '西羅亞意為「奉差遣」。前往西羅亞池清洗，象徵在「奉差遣者」裡面洗淨。信心的真實性是透過具體順服的行動來證明的。'
      }
    ]
  },
  'raise-lazarus': {
    topicId: 'raise-lazarus',
    coreHighlightsEn: [
      { title: 'The Four-Day Delay', content: 'Jesus delayed His arrival until Lazarus had been dead four days, proving that He overcomes even biological decay.' },
      { title: 'The Tears of God', content: '"Jesus wept" shows His perfect humanity and deep grief over the tragedy of death affecting those He loved.' },
      { title: 'The Resurrection and Life', content: 'Jesus declares He is not just a future hope, but the present reality of resurrection and eternal life.' }
    ],
    coreHighlightsZh: [
      { title: '死去四天的絕對死亡', content: '耶穌刻意等到拉撒路安葬四天、身體已開始發臭才到場，徹底粉碎了一切假死的質疑，證明祂對生命的主權。' },
      { title: '造物主的流淚悲憫', content: '「耶穌哭了」展示了主完美的人性與對死亡蹂躪人類的極度憤慨與哀慟。' },
      { title: '復活與生命的實體', content: '耶穌宣告「復活在我，生命也在我」，表明復活不是末日遙遠的教義，而是此時此刻在祂門徒面前的活生生主體。' }
    ],
    gospelComparisons: [
      {
        aspectEn: 'Synoptic Absence',
        aspectZh: '同觀福音未收錄之謎',
        matthewTextEn: 'Not recorded. Probably omitted because the Synoptics focus on Galilee and to protect Bethany family during early persecution.',
        matthewTextZh: '未收錄。神學界普遍認為同觀福音書寫成較早，為保護當時仍面臨猶太公會緝拿的馬大、馬利亞一家而略過。',
        markTextEn: 'Not recorded.',
        markTextZh: '未收錄。',
        lukeTextEn: 'Not recorded, though Mary and Martha are introduced as characters in Luke 10.',
        lukeTextZh: '未收錄。雖然路加 10 章介紹過馬大和馬利亞這對姊妹，但未提及拉撒路及其復活的神蹟。'
      }
    ],
    cantoneseExplanations: [
      {
        phrase: '拉撒路出來！',
        meaningEn: 'Lazarus, come out!',
        meaningZh: '拉撒路，出嚟！',
        cantoneseExplanation: '耶穌企喺墳墓門口大聲叫拉撒路。神學家話，耶穌必須指名道姓，如果唔係，祂身上強大嘅生命之能會令全個墳場嘅死人都一齊復活。',
        theologyEn: 'The direct call of the Creator. Christ speaks to the dead as if they are merely in the next room, demonstrating effortless power over the grave.',
        theologyZh: '造物主直接的召喚。基督對死人說話，如同對隔壁房間的人說話一樣簡單，顯明祂的話語就是喚醒生命的最高命令。'
      }
    ]
  },
  'heal-blind-bartimaeus': {
    topicId: 'heal-blind-bartimaeus',
    coreHighlightsEn: [
      { title: 'Cry of Faith', content: 'Bartimaeus identified Jesus as "Son of David" (Messianic title), persistent despite crowd\'s rebukes.' },
      { title: 'Throwing the Cloak', content: 'Bartimaeus threw off his beggar\'s cloak, symbolizing his abandonment of his old beggar lifestyle in anticipation of healing.' },
      { title: 'Following on the Way', content: 'Instantly healed, Bartimaeus did not run off to enjoy his sight but followed Jesus on the road to Jerusalem.' }
    ],
    coreHighlightsZh: [
      { title: '大衛子孫的信心呼喊', content: '巴底買公開喊出「大衛的子孫」的彌賽亞君王頭銜，在群眾的責備中依然堅持不懈地求救。' },
      { title: '丟棄外衣的決心', content: '巴底買在被召時丟下衣服，象徵著他憑信心告別舊有的討飯生活，完全期盼生命的改變。' },
      { title: '重見光明後的跟隨', content: '他眼睛一看見，沒有獨自離去，而是立刻在通往耶路撒冷（十字架道路）的路上跟隨了耶穌。' }
    ],
    gospelComparisons: [
      {
        aspectEn: 'Number & Location of Blind Men',
        aspectZh: '瞎子的人數與位置差異',
        matthewTextEn: 'Two blind men healed as they were leaving Jericho.',
        matthewTextZh: '記載為「兩個瞎子」，發生在他們出耶里哥的時候。',
        markTextEn: 'One blind man (Bartimaeus, son of Timaeus) healed as they were leaving Jericho. Most detailed.',
        markTextZh: '最詳細。指明是「一個瞎子」（有名字：提買的兒子巴底買），發生在出耶里哥的時候。',
        lukeTextEn: 'One blind man (unnamed) healed as Jesus "drew near" to Jericho.',
        lukeTextZh: '記載為「一個瞎子」（未提名字），發生在耶穌「將近耶里哥」的時候。'
      }
    ],
    cantoneseExplanations: [
      {
        phrase: '就丟下衣服，跳起來，走到耶穌那裡',
        meaningEn: 'Threw off his cloak, sprang up and came to Jesus',
        meaningZh: '即刻揼低件大褸，彈起，跑去耶穌度',
        cantoneseExplanation: '件「衣服」係討飯人晚上保暖、白天接錢嘅唯一資產。巴底買連大褸都唔要，證明佢已經有破釜沉舟、一去不回頭嘅信心。',
        theologyEn: 'The cloak represents the old identity and security of a beggar. Casting it off signifies repentance and expectation of a brand-new life in Christ.',
        theologyZh: '外衣代表討飯人的舊身份與唯一的安全感。將其丟棄象徵著徹底脫去舊人、拒絕往日的生活模式，憑信心領受在基督裡的全新人生。'
      }
    ]
  },
  'curse-fig-tree': {
    topicId: 'curse-fig-tree',
    coreHighlightsEn: [
      { title: 'Object Lesson of Judgment', content: 'The fig tree with leafy appearance but no fruit represents Israel and any formal religion showing outward compliance but no heart fruit.' },
      { title: 'The Power of Prayer', content: 'Jesus uses the withered tree to teach that praying in faith can move even mountains of opposition.' },
      { title: 'Sovereign Authority', content: 'Jesus\' command immediately changes the physical state of the tree, showing His word brings blessing or judgment.' }
    ],
    coreHighlightsZh: [
      { title: '徒有其表之生命的審判', content: '無花果樹葉子茂密卻毫無果子，象徵徒有宗教外表、虛禮儀式，卻缺乏公義與仁愛果子的偽善以色列信仰體系。' },
      { title: '移山倒海的信心禱告', content: '耶穌藉著枯乾的樹，教導門徒若有信心且不懷疑，不僅能使樹枯乾，更能命令代表重重阻礙的「大山」挪開投進海裡。' },
      { title: '審判與祝福的權柄', content: '這是耶穌事工中唯一一個帶有審判性的神蹟，顯明祂的話語既是救恩的源頭，也是終極審判的判詞。' }
    ],
    gospelComparisons: [
      {
        aspectEn: 'Timing of Cursing and Withering',
        aspectZh: '咒詛與枯乾的時間進程差異',
        matthewTextEn: 'The fig tree withered "at once" (instantly) after the curse, and the disciples saw it and marvelled immediately.',
        matthewTextZh: '最緊湊。無花果樹被咒詛後立刻枯乾了，門徒當場看見並大為驚奇。',
        markTextEn: 'Jesus curses the tree on day one; the next morning (day two), as they passed by, the disciples saw it withered from the roots.',
        markTextZh: '時間線清晰。第一天耶穌對樹發出咒詛；第二天清晨門徒再次經過時，才發現那棵樹連根都枯乾了，彼得進而提問。',
        lukeTextEn: 'This miracle is not recorded in Luke.',
        lukeTextZh: '路加福音完全沒有收錄此神蹟。'
      }
    ],
    cantoneseExplanations: [
      {
        phrase: '連根都枯乾了',
        meaningEn: 'Withered away to its roots',
        meaningZh: '由頭到腳連條根都死晒',
        cantoneseExplanation: '形容一般植物枯萎係由葉開始黃，但無花果樹受咒詛之後，係直接由地底嘅根部徹底乾死，生命力完全被連根拔起。',
        theologyEn: 'Represents the finality of divine judgment on institutional hypocrisy. When God judges, the facade of false vitality is destroyed from its very foundation.',
        theologyZh: '象徵上帝對虛偽宗教外表的審判是徹底且不可逆的。偽裝的生命力在審判面前，將會從最根基處完全崩潰。'
      }
    ]
  }
};
