// @flow
import type {TLanguages} from "../constants/Languages";
import uuid from "uuid";


export default class WordModel {
    id: string;
    value: string;
    lang: TLanguages;

    constructor({value, lang}: {value: string, lang: TLanguages}) {
        this.id = uuid();
        this.value = value;
        this.lang = lang;
    }
}

type TWord = WordModel;

export type {TWord}