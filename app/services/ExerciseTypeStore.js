// @flow
import ExerciseTypeModel from '../models/ExerciseTypeModel';
import {EXERCISE_TYPE} from "../constants/ExerciseType";

export default class ExerciseTypeStore {
    exerciseTypeList = {
        [EXERCISE_TYPE.SOURCE_TO_TARGET]: new ExerciseTypeModel({
            id: EXERCISE_TYPE.SOURCE_TO_TARGET,
            name: 'SourceToTargetExercise'
        }),
        [EXERCISE_TYPE.TARGET_TO_SOURCE]: new ExerciseTypeModel({
            id: EXERCISE_TYPE.TARGET_TO_SOURCE,
            name: 'TargetToSourceExercise'
        })
    };
}

export type TExerciseTypeStore = ExerciseTypeStore;