// @flow
import uuid from 'uuid';
import type { TWordModel } from './WordModel';

export default class TranslationModel {
    sourceWord: TWordModel;
    targetWord: TWordModel;
    id: string;
    constructor({ sourceWord, targetWord }) {
        this.id = uuid();
        this.sourceWord = sourceWord;
        this.targetWord = targetWord;
    }
}

export type TTranslationModel = TranslationModel;
const a: number = false;
