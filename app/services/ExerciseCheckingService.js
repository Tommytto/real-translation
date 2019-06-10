// @flow
import type { TLanguages } from 'constants/Languages';
import TranslationRelationModel from 'models/TranslationRelationModel';
import TranslationModel from 'models/TranslationModel';
import TranslationExerciseRatingModel from 'models/TranslationExerciseRatingModel';
import type { TExerciseType } from 'constants/ExerciseType';
import TranslationHelperService from 'services/TranslationHelperService';
import type { TTranslation } from 'models/TranslationModel';

export default class ExerciseCheckingService {
    _translationRelationModel: TranslationRelationModel;
    _translationModel: TranslationModel;
    _ratingModel: TranslationExerciseRatingModel;
    _translationHelper: TranslationHelperService;

    constructor({
        translationModel,
        ratingModel,
        translationRelationModel,
        translationHelper
    }: {
        translationModel: TranslationModel,
        ratingModel: TranslationExerciseRatingModel,
        translationRelationModel: TranslationRelationModel,
        translationHelper: TranslationHelperService
    }) {
        this._translationModel = translationModel;
        this._translationRelationModel = translationRelationModel;
        this._ratingModel = ratingModel;
        this._translationHelper = translationHelper;
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
    }): { success: boolean, answerList: string[], rating: number } {
        const answerList = this._translationHelper.findAnswerList({ wordId, lang: langTo });
        if (!answerList.length) {
            return {
                success: false,
                answerList: [],
                rating: 0
            };
        }
        const success = answerList.some(({ value }) => value === estimatedTranslation.trim());
        const ratingEntity = this._updateRating({ wordId, isSuccess: success, exerciseType });

        return {
            success,
            answerList: answerList.map((item) => item.value),
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
                if (item.rating + step >= 0) {
                    // eslint-disable-next-line no-param-reassign
                    item.rating += step;
                }

                return item;
            }
        );
    }
}
