// @flow

import type { TTranslation } from 'models/TranslationModel';
import type { TExerciseType } from 'constants/ExerciseType';
import type { TLanguages } from 'constants/Languages';
import TranslationModel from 'models/TranslationModel';
import TranslationExerciseRatingModel from 'models/TranslationExerciseRatingModel';
import type { TTranslationExerciseRating } from 'models/TranslationExerciseRatingModel';
import type { Task } from 'react-native/Libraries/Interaction/TaskQueue';
import injectModel from 'logic/decorators/injectModel';
import injectSharedService from 'logic/decorators/injectSharedService';
import TranslationHelperService from 'services/TranslationHelperService';

export type TTask = {
    translation: TTranslation,
    ratingEntity: ?TTranslationExerciseRating
};

export type TGeneratorProps = {
    exerciseType: TExerciseType,
    lang: TLanguages
};

@injectModel(['translationModel', 'ratingModel'])
@injectSharedService(['translationHelper'])
class TaskGeneratorService {
    _translationModel: TranslationModel;
    _ratingModel: TranslationExerciseRatingModel;
    _translationHelper: TranslationHelperService;

    static defaultTaskSetSize = 5;

    // TODO переделать с рандома по словам, на рандом по отношениям.
    *generateTaskSet({ exerciseType, langFrom, langTo }: TGeneratorProps): Generator<TTask, void, any> {
        const translationList = this._translationModel.findMany({ lang: langFrom }).filter((translation) => {
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
                    answer: this._translationHelper.findAnswerList({ wordId: translation.id, lang: langTo })[0],
                    ratingEntity
                };
            }
        }
    }

    _getRandomTranslationList(translationList, count) {
        const taskSet = [];
        const taskSetSize = Math.min(count, translationList.length);

        while (taskSet.length !== taskSetSize) {
            const randomIndex = Math.floor(Math.random() * translationList.length);
            const translation = translationList[randomIndex];

            const alreadyInSet = taskSet.some(({ id }) => id === translation.id);
            if (!alreadyInSet) {
                taskSet.push(translation);
            }
        }

        return taskSet;
    }

    getRandomSet({ lang: langFrom, except, count }) {
        const translationList = this._translationModel.findMany(({ lang, value }) => {
            return langFrom === lang && value !== except;
        });

        return this._getRandomTranslationList(translationList, count);
    }
}

export default TaskGeneratorService;
