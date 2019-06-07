// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';
import COLOR from '../../style/colors';
import Spacing from '../../style/spacing';

type TProps = {
    string: string
};

export default function StringBlock({ string }: TProps) {
    return (
        <View style={styles.block}>
            <Text style={styles.string} size="90">{string}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        borderRadius: 6,
        backgroundColor: COLOR.TUSCANY_50,
        padding: Spacing.s2,
        alignSelf: 'flex-start'
    },
    string: {
    }
});
