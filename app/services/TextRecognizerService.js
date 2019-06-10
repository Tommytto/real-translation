// @flow

import { ExerciseType } from 'constants/ExerciseType';

export default class TextRecognizerService {
    constructor({ translationModel, translationRelationModel, ratingModel }) {
        this.translationModel = translationModel;
        this.translationRelationModel = translationRelationModel;
        this.ratingModel = ratingModel;
    }
    addTranslations(translationList) {
        console.log(translationList);
        const prepared = translationList
            .map(([source, target]) => [
                { ...source, value: source.value.toLowerCase() },
                { ...target, value: target.value.toLowerCase() }
            ])
            .filter(([source, target]) => source.value !== target.value)
            .reduce((result, wordPair) => {
                const alreadyExist = result.some(([source, target]) => {
                    return source.value === wordPair[0].value && target.value === wordPair[1].value;
                });
                if (alreadyExist) {
                    return result;
                }
                return [...result, wordPair];
            }, []);

        console.log(prepared);
        prepared.forEach(([source, target]) => {
            const word1 = this.translationModel.addOne({
                lang: source.lang.toLowerCase(),
                value: source.value
            });
            const word2 = this.translationModel.addOne({
                lang: target.lang.toLowerCase(),
                value: target.value
            });
            this.translationRelationModel.addOne({
                wordId1: word1.id,
                wordId2: word2.id
            });
            Object.values(ExerciseType).forEach((exerciseType) => {
                this.ratingModel.addMany([
                    {
                        exerciseType,
                        translationId: word1.id,
                        rating: 0
                    },
                    {
                        exerciseType,
                        translationId: word2.id,
                        rating: 0
                    }
                ]);
            });
        }, []);
    }
}
