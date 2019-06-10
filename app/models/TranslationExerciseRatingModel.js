// @flow
import Model from 'models/Model';
import type { TExerciseType } from 'constants/ExerciseType';
import { observable } from 'mobx';

export interface TTranslationExerciseRating {
    id: string;
    exerciseType: TExerciseType;
    translationId: string;
    rating: number;
}

class RatingEntity {
    @observable id: string;
    @observable exerciseType: TExerciseType;
    @observable translationId: string;
    @observable rating: number;
    constructor({ id, exerciseType, translationId, rating }: TTranslationExerciseRating) {
        this.id = id;
        this.exerciseType = exerciseType;
        this.translationId = translationId;
        this.rating = rating;
    }
}

export default class TranslationExerciseRatingModel extends Model<RatingEntity> {
    EntityClass = RatingEntity;
}
