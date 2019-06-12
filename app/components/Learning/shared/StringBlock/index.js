// @flow
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Text from '../../../shared/Text';
import Color from 'style/Color';
import Spacing from 'style/Spacing';
import { ExerciseState } from 'constants/ExerciseState';

type TProps = {
    string: string,
    selected: boolean
};

export default function StringBlock({ selected, string, state, onPress }: TProps) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.block, selected ? styles[state] : undefined]}>
            <Text style={styles.string} size="70">
                {string}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    block: {
        borderRadius: 6,
        backgroundColor: Color.TUSCANY_50,
        padding: Spacing.s2,
        alignSelf: 'flex-start'
    },
    [ExerciseState.PROGRESS]: {},
    [ExerciseState.ERROR]: {
        backgroundColor: Color.RED_30
    },
    [ExerciseState.SUCCESS]: {
        backgroundColor: Color.GREEN_30
    }
});
