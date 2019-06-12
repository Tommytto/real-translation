// @flow

import { ExerciseType } from 'constants/ExerciseType';
import TranslationModel from 'models/TranslationModel';
import TranslationRelationModel from 'models/TranslationRelationModel';
import TranslationExerciseRatingModel from 'models/TranslationExerciseRatingModel';
import type { TWordPair } from 'services/types';
import injectModel from 'logic/decorators/injectModel';

@injectModel(['translationModel', 'translationRelationModel', 'ratingModel'])
class TranslationService {
    _translationModel: TranslationModel;
    _translationRelationModel: TranslationRelationModel;
    _ratingModel: TranslationExerciseRatingModel;

    addTranslations(translationList: TWordPair[]) {
        translationList.forEach(([source, target]) => {
            const word1 = this._translationModel.addOne({
                lang: source.lang,
                value: source.value
            });
            const word2 = this._translationModel.addOne({
                lang: target.lang,
                value: target.value
            });
            this._translationRelationModel.addOne({
                wordId1: word1.id,
                wordId2: word2.id
            });
            (Object.values(ExerciseType): any).forEach((exerciseType) => {
                this._ratingModel.addMany([
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

export default TranslationService;
