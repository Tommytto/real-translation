// @flow
import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import type { PressEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import Text from '../Text';

type TProps = {
    title: string,
    icon?: string,
    onPress?: (e: PressEvent) => void,
    theme?: $Keys<typeof themes>
};

export default function ExerciseBlock({ title, onPress, theme = 'blue' }: TProps) {
    return (
        <TouchableOpacity style={[styles.container, themes[theme]]} onPress={onPress}>
            <View>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50
    }
});

const themes = StyleSheet.create({
    blue: {},
    aquamarine: {}
});
