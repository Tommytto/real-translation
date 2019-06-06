import React from 'react';
import LinearGradient from "react-native-linear-gradient";
import COLOR from "../../style/colors";
import {StyleSheet} from "react-native";
import Spacing from "../../style/spacing";

type TProps = {
    children: React.Node
};

export default function HomeLayout({ children }: TProps) {
    return (
        <LinearGradient
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            colors={[COLOR.SKY_BLUE_50, COLOR.BLUE_40]}
            style={style.container}
        >
            {children}
        </LinearGradient>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: Spacing.s10,
        paddingTop: 2 * Spacing.s10,
    }
});