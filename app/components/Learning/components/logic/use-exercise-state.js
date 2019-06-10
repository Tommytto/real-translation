// @flow
import { useState } from 'react';
import { ExerciseState } from 'constants/ExerciseState';
import type { TExerciseState } from 'constants/ExerciseState';

export default function useExerciseState(initialValue: ?TExerciseState = ExerciseState.PROGRESS) {
    const [state, setState] = useState(initialValue);
    return {
        exerciseState: state,
        setErrorState: () => setState(ExerciseState.ERROR),
        setSuccessState: () => setState(ExerciseState.SUCCESS),
        setProgressState: () => setState(ExerciseState.PROGRESS)
    };
}
