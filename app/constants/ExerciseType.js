// @flow
export const EXERCISE_TYPE = Object.freeze({
    SOURCE_TO_TARGET: 'source-to-target',
    TARGET_TO_SOURCE: 'target-to-source'
});

export type TExerciseType = $Values<typeof EXERCISE_TYPE>;
