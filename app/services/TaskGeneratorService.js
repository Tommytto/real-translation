// @flow

import type { TTranslation } from 'models/TranslationModel';
import type { TExerciseType } from 'constants/ExerciseType';
import type { TLanguages } from 'constants/Languages';
import TranslationModel from 'models/TranslationModel';
import TranslationExerciseRatingModel from 'models/TranslationExerciseRatingModel';
import type { TTranslationExerciseRating } from 'models/TranslationExerciseRatingModel';

export type TTask = {
    translation: TTranslation,
    ratingEntity: ?TTranslationExerciseRating
};

export type TGeneratorProps = {
    exerciseType: TExerciseType,
    lang: TLanguages
};

export class TaskGeneratorService {
    _translationModel: TranslationModel;
    _ratingModel: TranslationExerciseRatingModel;

    static defaultTaskSetSize = 5;

    constructor({
        translationModel,
        ratingModel
    }: {
        translationModel: TranslationModel,
        ratingModel: TranslationExerciseRatingModel
    }) {
        this._translationModel = translationModel;
        this._ratingModel = ratingModel;
    }

    // generateTask({ exerciseType, lang }: { exerciseType: TExerciseType, lang: TLanguages }) {
    //     const taskList = this._translationModel.findMany({
    //         lang
    //     });
    //
    //     const rating = this._ratingModel.findOne({
    //         exerciseType,
    //         translationId: translation.id
    //     });
    //
    //     return {
    //         translation,
    //         ratingEntity: rating
    //     };
    // }

    *generateTaskSet({ exerciseType, lang }: TGeneratorProps): Generator<TTask, void, any> {
        const translationList = this._translationModel.findMany({ lang }).filter((translation) => {
            const ratingEntity = this._ratingModel.findOne({
                exerciseType,
                translationId: translation.id
            });
            return ratingEntity && ratingEntity.rating < 100;
        });

        const taskSetIds = [];
        const taskSetSize = Math.min(TaskGeneratorService.defaultTaskSetSize, translationList.length);

        while (taskSetIds.length !== taskSetSize) {
            const randomIndex = Math.floor(Math.random() * translationList.length);
            const translation = translationList[randomIndex];

            const alreadyInSet = taskSetIds.some((translationId) => translationId === translation.id);
            if (!alreadyInSet) {
                taskSetIds.push(translation.id);
                const ratingEntity = this._ratingModel.findOne({
                    exerciseType,
                    translationId: translation.id
                });
                yield {
                    translation,
                    ratingEntity
                };
            }
        }
    }
}
