// @flow
import type {TTranslationListStore} from "./TranslationListStore";

export default class TranslationRandomizer {
    translationListStore: TTranslationListStore;

    constructor({translationListStore}: {translationListStore: TTranslationListStore}) {
        this.translationListStore = translationListStore;
    }

    getRandomTranslation = () => {
        const {translationList, translationData} = this.translationListStore;
        const translationCount = translationList.length;
        const randomIndex = Math.floor(Math.random() * translationCount);

        return translationData[translationList[randomIndex]]
    }
}