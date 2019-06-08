// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../../../shared/Text';
import Color from 'style/Color';
import Spacing from 'style/Spacing';

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
        backgroundColor: Color.TUSCANY_50,
        padding: Spacing.s2,
        alignSelf: 'flex-start'
    },
    string: {
    }
});
