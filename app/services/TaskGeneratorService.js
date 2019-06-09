// @flow

import { observable, action } from 'mobx';
import type { TTranslation } from 'models/TranslationModel';
import type { TTranslationExerciseRating } from 'models/TranslationExerciseRatingModel';
import type { TExerciseType } from 'constants/ExerciseType';
import type { TLanguages } from 'constants/Languages';
import TranslationModel from 'models/TranslationModel';
import TranslationExerciseRatingModel from 'models/TranslationExerciseRatingModel';

export type TTask = {
    translation: TTranslation,
    rating: ?TTranslationExerciseRating
};

export class TaskGeneratorService {
    @observable _task: ?TTask = null;
    _translationModel: TranslationModel;
    _ratingModel: TranslationExerciseRatingModel;

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

    getTask() {
        return this._task;
    }

    @action generateTask({ exerciseType, lang }: { exerciseType: TExerciseType, lang: TLanguages }) {
        const taskList = this._translationModel.findMany({
            lang
        });
        const randomIndex = Math.floor(Math.random() * taskList.length);
        const translation = taskList[randomIndex];
        const rating = this._ratingModel.findOne({
            exerciseType,
            translationId: translation.id
        });

        this._task = {
            translation,
            rating
        };
    }
}
