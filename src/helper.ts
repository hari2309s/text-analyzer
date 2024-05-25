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

export const removeEmptyItems = (items: string[]) => {
    const emptyIndex = items.findIndex((item) => item.trim() === '');

    if (emptyIndex === -1) return items;

    items.splice(emptyIndex, 1);

    return removeEmptyItems(items);
};

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

export const getLongestWord = (items: string[]) => {
    return items.reduce((item1: string, item2: string) => {
        /* remove characters like [. , ? ! : ; ' " ) ( } {] before loooking for a longest word in the text **/
        return item1.replace(/[,.!?:;'"{}()]/g, '').length >
            item2.replace(/[,.!?:;'"{}()]/g, '').length
            ? item1.replace(/[,.!?:;'"{}()]/g, '')
            : item2.replace(/[,.!?:;'"{}()]/g, '');
    }, '');
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
        const diffWithItem1 = Math.abs(
            averageReadingTimeMapping[i].words - wordsCount
        );
        const diffWithItem2 = Math.abs(
            averageReadingTimeMapping[i + 1].words - wordsCount
        );

        averageReadingTime =
            diffWithItem1 < diffWithItem2
                ? averageReadingTimeMapping[i].averageTime
                : averageReadingTimeMapping[i + 1].averageTime;
    }

    return averageReadingTime;
};
