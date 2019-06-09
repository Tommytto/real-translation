// @flow
import React, { useState } from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
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
    function handleSubmit() {
        Keyboard.dismiss();
        onSubmit(translation);
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                error={exerciseState === ExerciseState.ERROR}
                onChangeText={handleChangeText}
                value={translation}
                placeholder="Input text"
            />
            <Button onPress={handleSubmit}>Submit</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: 250
    }
});
