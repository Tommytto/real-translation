// @flow
import { observable, action } from 'mobx';
import type {TWord} from "../models/WordModel";
import WordModel from "../models/WordModel";
import TranslationModel from "../models/TranslationModel";

type TTranslationInfo = {|
    source: TWord,
    target: TWord
|}
export default class TranslationListStore {
    @observable translationList = [];
    @observable translationData = {};

    @action addTranslation(translationInfo: TTranslationInfo) {
        const translation = this.createTranslation(translationInfo);
        this.translationList.push(translation.id);
        this.translationData[translation.id] = translation;
        return translation;
    }

    createTranslation({source, target}: TTranslationInfo) {
        const sourceWord = new WordModel(source);
        const targetWord = new WordModel(target);
        return new TranslationModel({sourceWord, targetWord});
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

        this.translationList.push(...list);
        this.translationData = {
            ...this.translationData,
            ...data
        };
    }
}

export type TTranslationListStore = TranslationListStore;