// @flow
import Model from 'models/Model';
import type { TExerciseType } from 'constants/ExerciseType';

export type TTranslationExerciseRating = {
    id: string,
    exerciseType: TExerciseType,
    translationId: string,
    rating: number
};
export default class TranslationExerciseRatingModel extends Model<TTranslationExerciseRating> {}
