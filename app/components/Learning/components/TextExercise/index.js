// @flow
import TextInputExercise from 'components/Learning/components/shared/TextInputExercise';
import React from 'react';

export default function TextExercise({ exerciseState, check }) {
    return <TextInputExercise exerciseState={exerciseState} onSubmit={check} />;
}
