// @flow
import { observable, action } from 'mobx';
import type { TWord } from '../models/WordModel';
import WordModel from '../models/WordModel';
import TranslationModel from '../models/TranslationModel';
import type { TTranslationModel } from '../models/TranslationModel';

type TTranslationInfo = {|
    source: TWord,
    target: TWord
|};
export default class TranslationService {
    @observable _translationList: string[] = [];
    @observable _translationData: { [string]: TTranslationModel } = {};

    getTranslationList() {
        return this._translationList;
    }

    getTranslationData() {
        return this._translationData;
    }

    @action addTranslation(translationInfo: TTranslationInfo) {
        const translation = this.createTranslation(translationInfo);
        this._translationList.push(translation.id);
        this._translationData[translation.id] = translation;
        return translation;
    }

    createTranslation({ source, target }: TTranslationInfo) {
        const sourceWord = new WordModel(source);
        const targetWord = new WordModel(target);
        return new TranslationModel({ sourceWord, targetWord });
    }

    @action addTranslationList(translationList: TTranslationInfo[]) {
        const { data, list } = translationList.reduce(
            (result, translationInfo) => {
                const translation = this.createTranslation(translationInfo);
                return {
                    data: {
                        ...result.data,
                        [translation.id]: translation
                    },
                    list: [...result.list, translation.id]
                };
            },
            { data: {}, list: [] }
        );

        this._translationList.push(...list);
        this._translationData = {
            ...this._translationData,
            ...data
        };
    }
}

export type TTranslationService = TranslationService;
