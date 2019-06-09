// @flow
import * as React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Color from 'style/Color';
import Spacing from 'style/Spacing';
import Typography from 'style/Typography';
import type { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheet';

type TProps = {
    theme: $Keys<typeof buttonThemes>,
    children: React.Node,
    icon: boolean,
    style?: ViewStyle
};

export default function Button({ icon, style, children, theme, ...props }: TProps) {
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

Button.defaultProps = {
    theme: 'default',
    icon: false
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        padding: Spacing.s3,
        alignItems: 'center'
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
    },
    outlinePrimary: {
        backgroundColor: Color.TRANSPARENT,
        borderColor: Color.BLUE_10
    },
    success: {
        backgroundColor: Color.GREEN_30
    },
    outlineSuccess: {
        backgroundColor: Color.TRANSPARENT,
        borderColor: Color.GREEN_30
    },
    danger: {
        backgroundColor: Color.RED_30
    },
    outlineDanger: {
        backgroundColor: Color.TRANSPARENT,
        borderColor: Color.RED_30
    }
});

const textThemes = StyleSheet.create({
    default: {
        color: Color.BLUE_10
    },
    primary: {
        color: Color.WHITE
    },
    outlinePrimary: {
        color: buttonThemes.outlinePrimary.borderColor
    },
    success: {
        color: Color.WHITE
    },
    outlineSuccess: {
        color: buttonThemes.outlineSuccess.borderColor
    },
    danger: {
        color: Color.WHITE
    },
    outlineDanger: {
        color: buttonThemes.outlineDanger.borderColor
    }
});
