// @flow
import * as React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import COLOR from 'style/colors';
import Typography from 'style/typography';

type TProps = {
    children: React.Node,
    color?: $Keys<typeof textColorStyle>,
    size?: $Keys<typeof textSizeStyle>,
    weight?: $Keys<typeof textWeightStyles>,
    style?: Object
};

export default function Text({ children, style, weight, size = '40', color = 'white' }: TProps) {
    const textStyle = [styles.text, textSizeStyle[size], textColorStyle[color]];
    if (weight) {
        textStyle.push(textWeightStyles[weight]);
    }
    if (style) {
        textStyle.push(style);
    }
    return <RNText style={textStyle}>{children}</RNText>;
}

const styles = StyleSheet.create({
    text: {}
});

const textWeightStyles = StyleSheet.create({
    bold: {
        fontWeight: 'bold'
    },
    'semi-bold': {
        fontWeight: '600'
    }
});

const textSizeStyle = StyleSheet.create({
    '10': Typography.text10,
    '20': Typography.text20,
    '30': Typography.text30,
    '40': Typography.text40,
    '50': Typography.text50,
    '60': Typography.text60,
    '70': Typography.text70,
    '80': Typography.text80,
    '90': Typography.text90,
    '100': Typography.text100
});

const textColorStyle = StyleSheet.create({
    black: {
        color: COLOR.BLACK
    },
    white: {
        color: COLOR.WHITE
    }
});
