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
