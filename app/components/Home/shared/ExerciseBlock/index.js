// @flow
import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import type { PressEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import Text from '../../../shared/Text';
import COLOR from 'style/colors';
import Spacing from 'style/spacing';

type TProps = {
    title: string,
    info?: string,
    icon?: string,
    onPress?: (e: PressEvent) => void,
    backgroundColor?: string
};

export default function ExerciseBlock({ title, info, onPress, backgroundColor = COLOR.SKY_BLUE_30 }: TProps) {
    function renderInfo() {
        if (!info) {
            return null;
        }
        return <Text size="80" style={styles.info}>{info}</Text>;
    }
    return (
        <TouchableOpacity activeOpacity={0.6} style={[styles.container, {backgroundColor}]} onPress={onPress}>
            <Text size="70" weight="semi-bold" style={styles.title}>
                {title}
            </Text>
            {renderInfo()}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        borderRadius: 6,
        padding: Spacing.s5,
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    title: {},
    info: {
        marginTop: Spacing.s1
    }
});
