export interface AssessmentPart1 {
    letter: number; // Score
    sentence: number | null; // Score (null if skipped)
    rhyme: number; // Score
    profile: string;
    missedLetters?: string[];
    miscuedWords?: string[];
    task1Details?: { sentence: string; missedWords: string[] }[];
}

export interface AssessmentPart2 {
    time: number;
    wordsRead: number;
    totalWords: number;
    wpm: number;
    accuracy: number;
    comp: number;
    miscues: number[];
    miscuedWordsList: string[];
    obsLevel: string;
    mood: string;
}

export interface AssessmentRecord {
    date: string;
    part1: AssessmentPart1 | null;
    part2: AssessmentPart2 | null;
    finalProfile: string;
}

export interface Learner {
    id: string;
    lrn: string;
    name: string;
    age: number;
    gender: string;
    grade: number;
    language: string;
    notes: string;
    enrollmentDate: string;
    assessments: AssessmentRecord[];
}

export interface User {
    name: string;
    school: string;
    grade: string;
    password?: string;
}

export interface RhymePair {
    pair: string;
    isCorrect: boolean | null;
}

export interface StoryPassage {
    title: string;
    content: string;
    questions: { q: string; a: string }[];
    time: number;
}
