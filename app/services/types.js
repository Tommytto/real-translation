import type { TLanguages } from 'constants/Languages';

export type TWord = {
    value: string,
    lang: TLanguages
};
export type TWordPair = [TWord, TWord];
