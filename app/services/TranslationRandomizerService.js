// @flow
import type { TTranslationService } from 'services/TranslationService';
import { EXERCISE_TYPE } from 'constants/ExerciseType';

export default class TranslationRandomizerService {
    translationService: TTranslationService;

    constructor({ translationService }: { translationService: TTranslationService }) {
        this.translationService = translationService;
    }

    getRandomTranslation = (type) => {
        const translationList = this.translationService.getTranslationList();
        const translationData = this.translationService.getTranslationData();
        const translationCount = translationList.length;
        let randomTranslation;
        while (!randomTranslation) {
            const randomIndex = Math.floor(Math.random() * translationCount);
            const translation = translationData[translationList[randomIndex]];
            let word;
            if (type === EXERCISE_TYPE.TARGET_TO_SOURCE) {
                word = translation.targetWord;
            } else if (type === EXERCISE_TYPE.SOURCE_TO_TARGET) {
                word = translation.sourceWord;
            }
            if (word.rating !== 100) {
                randomTranslation = translation;
            }
        }

        return randomTranslation;
    };
}
