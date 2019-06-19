// @flow
import * as React from 'react';
import { StyleSheet } from 'react-native';
import Spacing from 'style/Spacing';
import Color from 'style/Color';
import LinearGradient from 'react-native-linear-gradient';
import PlatformHelpers from 'helpers/platform';

type TProps = {
    children: React.Node
};

export default function LoginLayout({ children }: TProps) {
    return (
        <LinearGradient
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            colors={[Color.SKY_BLUE_50, Color.CYAN_20]}
            style={style.container}
        >
            {children}
        </LinearGradient>
    );
}

const style = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFill,
        padding: Spacing.s10,
        paddingTop: PlatformHelpers.isIOS ? 150 : 2 * Spacing.s10
    }
});
