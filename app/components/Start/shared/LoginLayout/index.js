// @flow
import * as React from 'react';
import { StyleSheet } from 'react-native';
import Spacing from 'style/spacing';
import COLOR from 'style/colors';
import LinearGradient from 'react-native-linear-gradient';

type TProps = {
    children: React.Node
};

export default function LoginLayout({ children }: TProps) {
    return (
        <LinearGradient
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            colors={[COLOR.SKY_BLUE_50, COLOR.CYAN_20]}
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
        paddingTop: 2 * Spacing.s10
    }
});
