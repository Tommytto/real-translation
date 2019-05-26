import type {TLanguages} from "../constants/Languages";
import type {TWord} from "./WordModel";
import uuid from "uuid";

export default class TranslationModel {
    sourceWord: TWord;
    targetWord: TWord;
    id: string;
    constructor({sourceWord, targetWord}) {
        this.id = uuid();
        this.sourceWord = sourceWord;
        this.targetWord = targetWord;
    }
}