// @flow
export const ExerciseType = Object.freeze({
    TEXT: 'TEXT',
    BLOCK: 'BLOCK'
});

export type TExerciseType = $Values<typeof ExerciseType>;
