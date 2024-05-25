export interface AverageReadingTime {
    words: number;
    averageTime: number;
}

export interface AnalyzedValues {
    words: number;
    characters: number;
    sentences: number;
    paragraphs: number;
    pronouns: number;
    averageReadingTime: number;
    longestWord: string;
}

export type AppContextType = {
    text: string;
    setText: (text: string) => void;
    analyzedValues: Partial<AnalyzedValues>;
    setAnalyzedValues: (values: Partial<AnalyzedValues>) => void;
};
