import React, { createContext, useEffect, useState } from 'react';
import { getCharactersCount, getPronounsCount } from '../helper.ts';

interface AnalyzedValues {
    words: number;
    characters: number;
    sentences: number;
    paragraphs: number;
    pronouns: number;
    averageReadingTime: number;
    longestWord: string;
}

const initialAnalyzedValues: Partial<AnalyzedValues> = {
    words: 0,
    characters: 0,
    sentences: 0,
    paragraphs: 0,
    pronouns: 0,
    averageReadingTime: 0,
    longestWord: '',
};

type AppContextType = {
    text: string;
    setText: (text: string) => void;
    analyzedValues: Partial<AnalyzedValues>;
    setAnalyzedValues: (values: Partial<AnalyzedValues>) => void;
};

const initialContextValue: AppContextType = {
    text: '',
    setText: () => {
        return;
    },
    analyzedValues: initialAnalyzedValues,
    setAnalyzedValues: () => {
        return;
    },
};

export const AppContext = createContext<AppContextType>(initialContextValue);

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [text, setText] = useState<string>('');
    const [analyzedValues, setAnalyzedValues] = useState<
        Partial<AnalyzedValues>
    >(initialAnalyzedValues);

    useEffect(() => {
        if (text.length !== 0) {
            setAnalyzedValues((values) => ({
                ...values,
                words: text.split(' ').length,
                characters: getCharactersCount(text.trim().split(' ')),
                sentences: text.includes('.') ? text.split('.').length : 0,
                paragraphs:
                    text.includes('.') &&
                        text.split('.').length >= text.split(/\r\n|\r|\n/).length
                        ? text.split(/\r\n|\r|\n/).length
                        : 0,
                pronouns: getPronounsCount(text),
            }));
        } else {
            setAnalyzedValues(initialAnalyzedValues)
        }
    }, [text]);

    return (
        <AppContext.Provider
            value={{ text, setText, analyzedValues, setAnalyzedValues }}
        >
            {children}
        </AppContext.Provider>
    );
};
