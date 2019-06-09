export const ExerciseState = Object.freeze({
    PROGRESS: 'PROGRESS',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR'
});

export type TExerciseState = $Values<ExerciseState>;
