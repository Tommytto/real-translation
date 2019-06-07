// @flow
import type {TTranslationListStore} from "../stores/TranslationListStore";

export default class TranslationRandomizer {
    translationListStore: TTranslationListStore;

    constructor({translationListStore}: {translationListStore: TTranslationListStore}) {
        this.translationListStore = translationListStore;
    }

    getRandomTranslation() {
        const translationCount = this.translationListStore.translationList.length;
        const randomId = Math.floor(Math.random() * translationCount);
        return this.translationListStore.translationData[randomId]
    }
}