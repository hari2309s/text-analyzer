export const getPronounsCount = (text: string): number => {
    let pronounsCount: number = 0;
    const splitText: Array<string> = text.trim().split(' ');

    // console.log('text ', text);
    // console.log('split ', splitText);

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

export const getCharactersCount = (words: string[]): number => {
    const charCount: number = words.reduce(
        (count: number, item: string) => count + item.length,
        0
    );
    return charCount;
};
