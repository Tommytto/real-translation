import React from 'react';
import LinearGradient from "react-native-linear-gradient";
import {StyleSheet} from "react-native";
import Color from "style/Color";
import Spacing from "style/Spacing";

type TProps = {
    children: React.Node
};

export default function HomeLayout({ children }: TProps) {
    return (
        <LinearGradient
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            colors={[Color.SKY_BLUE_50, Color.BLUE_40]}
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
        paddingTop: 2 * Spacing.s10,
    }
});
