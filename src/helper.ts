import { AverageReadingTime } from './types';

export const getPronounsCount = (text: string): number => {
    let pronounsCount: number = 0;
    const splitText: Array<string> = text.trim().split(' ');

    if (
        splitText.includes('he') ||
        splitText.includes('she') ||
        splitText.includes('him') ||
        splitText.includes('her')
    ) {
        pronounsCount +=
            splitText.filter((item) => item === 'he').length +
            splitText.filter((item) => item === 'she').length +
            splitText.filter((item) => item === 'him').length +
            splitText.filter((item) => item === 'her').length;
    }

    return pronounsCount;
};

/** remove empty items added on a new line breaks */
export const removeEmptyItems = (items: string[]) => {
    const newItems: string[] = [...items];

    for (let i = 0; i < items.length; i++) {
        let emptyIndex: number = -1;

        if (items[i].trim() === '') {
            emptyIndex = i;
        }

        if (emptyIndex > -1) {
            newItems.splice(emptyIndex, 1);
        }
    }

    return newItems;
};

/** remove line breaks which stitches words together */
export const removeLineBreaks = (items: string[]) => {
    const breakIndex = items.findIndex((item) => item.match(/\r?\n|\r/g));

    if (breakIndex === -1) return items;

    const newItems = [
        ...items.slice(0, breakIndex),
        ...items[breakIndex].split(/\r?\n|\r/),
        ...items.slice(breakIndex + 1, items.length),
    ];

    return removeLineBreaks(newItems);
};

export const getLongestWord = (items: string[]): string => {
    let longestWord = '';

    for (let i = 0; i < items.length; i++) {
        /** remove characters like [. , ? ! : ; ' " ) ( } {] before loooking for a longest word in the text */
        const strippedItem = items[i].trim().replace(/[,.!?:;'"]/g, '');

        if (strippedItem.length > longestWord.length)
            longestWord = strippedItem;
    }

    return longestWord;
};

export const averageReadingTimeMapping: Array<AverageReadingTime> = [
    { words: 100, averageTime: 1 },
    { words: 250, averageTime: 1 },
    { words: 500, averageTime: 2 },
    { words: 750, averageTime: 3 },
    { words: 1000, averageTime: 4 },
    { words: 1500, averageTime: 6 },
    { words: 2000, averageTime: 8 },
    { words: 3000, averageTime: 12 },
    { words: 5000, averageTime: 21 },
    { words: 10000, averageTime: 42 },
];

export const getAverageReadingTime = (wordsCount: number): number => {
    let averageReadingTime: number = 0;

    for (let i = 0; i < averageReadingTimeMapping.length - 1; i++) {
        if (averageReadingTimeMapping[i].words > wordsCount) {
            averageReadingTime = averageReadingTimeMapping[i].averageTime;
            break;
        }
    }

    return averageReadingTime;
};
