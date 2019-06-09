// @flow
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TextInput from 'components/shared/TextInput';
import Button from 'components/shared/Button';
import type { TExerciseState } from 'constants/ExerciseState';
import { ExerciseState } from 'constants/ExerciseState';

type TProps = {
    exerciseState: TExerciseState,
    onSubmit: (string) => void,
    onChangeText: () => void
};

export default function TextInputExercise({ exerciseState, onChangeText, onSubmit }: TProps) {
    const [translation, setTranslation] = useState('');
    function handleChangeText(text) {
        setTranslation(text);
        onChangeText();
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                error={exerciseState === ExerciseState.ERROR}
                onChangeText={handleChangeText}
                placeholder="Input text"
            />
            <Button onPress={() => onSubmit(translation)}>Submit</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: 250
    }
});
