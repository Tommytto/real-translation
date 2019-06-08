// @flow
import * as React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import COLOR from '../../../style/colors';
import Spacing from '../../../style/spacing';
import Typography from '../../../style/typography';
import type {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheet";

type TProps = {
    theme?: $Keys<typeof buttonThemes>,
    children: React.Node,
    icon?: boolean,
    style?: ViewStyle,
};

export default function Button({ round, icon, style, children, theme = 'default', ...props }: TProps) {
    const buttonStyle = [styles.button, buttonThemes[theme]];
    if (icon) {
        buttonStyle.push(styles.roundButton);
    }
    if (style) {
        buttonStyle.push(style);
    }
    return (
        <TouchableOpacity activeOpacity={0.5} style={buttonStyle} {...props}>
            <Text style={[Typography.text70, textThemes[theme]]}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        padding: Spacing.s3,
        alignItems: 'center',
    },
    roundButton: {
        height: 64,
        width: 64,
        borderRadius: 32
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
