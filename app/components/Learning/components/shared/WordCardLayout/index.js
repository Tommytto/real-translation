// @flow
import React from 'react';
import type { Node } from 'react';
import { View, StyleSheet } from 'react-native';
import WordCard from 'components/Learning/shared/WordCard';
import TranslationExerciseRatingModel from 'models/TranslationExerciseRatingModel';

type TProps = {
    source: string,
    exerciseState: TranslationExerciseRatingModel,
    exerciseActionSlot: Node
};

export default function WordCardLayout({ source, exerciseState, exerciseActionSlot }: TProps) {
    return (
        <View style={styles.container}>
            <WordCard exerciseState={exerciseState} string={source} />
            {exerciseActionSlot}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
});
