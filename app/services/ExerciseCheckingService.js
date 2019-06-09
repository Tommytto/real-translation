// @flow
import type { TLanguages } from 'constants/Languages';
import TranslationRelationModels from 'models/TranslationRelationModels';
import TranslationModel from 'models/TranslationModel';
import TranslationExerciseRatingModel from 'models/TranslationExerciseRatingModel';
import type { TExerciseType } from 'constants/ExerciseType';

export default class ExerciseCheckingService {
    _translationRelationsModel: TranslationRelationModels;
    _translationModel: TranslationModel;
    _ratingModel: TranslationExerciseRatingModel;

    constructor({
        translationModel,
        ratingModel,
        translationRelationsModel
    }: {
        translationModel: TranslationModel,
        ratingModel: TranslationExerciseRatingModel,
        translationRelationsModel: TranslationRelationModels
    }) {
        this._translationModel = translationModel;
        this._translationRelationsModel = translationRelationsModel;
        this._ratingModel = ratingModel;
    }

    // TODO Переделать структуру
    check({
        wordId,
        langTo,
        exerciseType,
        estimatedTranslation
    }: {
        wordId: string,
        langTo: TLanguages,
        exerciseType: TExerciseType,
        estimatedTranslation: string
    }): { success: boolean, answer: string, rating: number } {
        const translationRelations = this._translationRelationsModel.findOne(({ relationList }) =>
            relationList.includes(wordId)
        );
        if (!translationRelations) {
            return {
                success: false,
                answer: '',
                rating: 0
            };
        }
        const translationList = this._translationModel.findMany({
            lang: langTo
        });
        const finalTranslation = translationList.find((translation) =>
            translationRelations.relationList.includes(translation.id)
        );
        const finalValue = finalTranslation ? finalTranslation.value : '';
        const success = finalValue === estimatedTranslation.trim();

        const ratingEntity = this._updateRating({ wordId, isSuccess: success, exerciseType });
        console.log(ratingEntity);
        return {
            success,
            answer: finalValue,
            rating: ratingEntity ? ratingEntity.rating : 0
        };
    }

    _updateRating({
        wordId,
        isSuccess,
        exerciseType
    }: {
        wordId: string,
        exerciseType: TExerciseType,
        isSuccess: boolean
    }) {
        const step = isSuccess ? 25 : -25;
        return this._ratingModel.updateOne(
            {
                translationId: wordId,
                exerciseType
            },
            (item) => {
                if (item.rating + step > 0) {
                    // eslint-disable-next-line no-param-reassign
                    item.rating += step;
                }

                return item;
            }
        );
    }
}
