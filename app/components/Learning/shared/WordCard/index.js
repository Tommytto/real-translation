// @flow
import React from "react";
import {View, StyleSheet} from "react-native";
import Text from "../../../shared/Text";
import COLOR from "../../../../style/colors";

type TProps = {
    string: string,
}

export default function WordCard({string}: TProps) {
    return <View style={styles.container}><Text size="40" color="black">{string}</Text></View>
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: COLOR.WHITE
    }
});