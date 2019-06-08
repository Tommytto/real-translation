// @flow
import * as React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Color from 'style/Color';
import Spacing from 'style/Spacing';
import Typography from 'style/Typography';
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
        backgroundColor: Color.WHITE
    },
    primary: {
        backgroundColor: Color.BLUE_10
    }
});

const textThemes = StyleSheet.create({
    default: {
        color: Color.BLUE_10
    },
    primary: {
        color: Color.WHITE
    }
});
