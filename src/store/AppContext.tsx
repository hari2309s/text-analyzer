import React, { createContext, useEffect, useState } from 'react';
import {
    getAverageReadingTime,
    getLongestWord,
    getPronounsCount,
    removeEmptyItems,
    removeLineBreaks,
} from '../helper.ts';
import { AnalyzedValues, AppContextType } from '../types.ts';

const initialAnalyzedValues: Partial<AnalyzedValues> = {
    words: 0,
    characters: 0,
    sentences: 0,
    paragraphs: 0,
    pronouns: 0,
    averageReadingTime: 0,
    longestWord: '',
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
                characters: text.length,
                sentences: removeEmptyItems(removeLineBreaks(text.split('.')))
                    .length,
                paragraphs: removeEmptyItems(text.trim().split(/\r?\n|\r/))
                    .length,
                pronouns: getPronounsCount(text),
                longestWord: getLongestWord(removeLineBreaks(text.split(' '))),
                averageReadingTime: getAverageReadingTime(
                    text.split(' ').length
                ),
            }));
        } else {
            setAnalyzedValues(initialAnalyzedValues);
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
