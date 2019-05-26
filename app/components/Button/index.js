// @flow
import * as React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import COLOR from '../../style/colors';
import Spacing from '../../style/spacing';
import Typography from '../../style/typography';

type TProps = {
    theme?: $Keys<typeof buttonThemes>,
    children: React.Node,
}

export default function Button({ children, theme = 'default', ...props }: TProps) {
    return (
        <TouchableOpacity activeOpacity={0.5} style={[styles.button, buttonThemes[theme]]} {...props}>
            <Text style={[Typography.text70, textThemes[theme]]}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        padding: Spacing.s3,
        alignItems: 'center',
        marginBottom: 10,
    }
});

const buttonThemes = StyleSheet.create({
    default: {
        backgroundColor: COLOR.WHITE
    },
    primary: {
        backgroundColor: COLOR.BLUE_10
    }
});

const textThemes = StyleSheet.create({
    default: {
        color: COLOR.BLUE_10
    },
    primary: {
        color: COLOR.WHITE
    }
});
