// @flow
import type { TLanguages } from 'constants/Languages';
import uuid from 'uuid';

export default class WordModel {
    id: string;
    value: string;
    rating: number;
    lang: TLanguages;

    constructor({ value, lang, rating }: { rating: number, value: string, lang: TLanguages }) {
        this.id = uuid();
        this.value = value;
        this.lang = lang;
        this.rating = rating;
    }
}

type TWord = {
    value: string,
    rating: number,
    lang: TLanguages
};

type TWordModel = WordModel;

export type { TWord, TWordModel };
