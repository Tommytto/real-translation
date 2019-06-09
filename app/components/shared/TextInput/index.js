// @flow
import * as React from 'react';
import { TextInput as RNTextInput, View, StyleSheet } from 'react-native';
import Spacing from 'style/Spacing';
import Label from '../Label';
import Color from 'style/Color';

type TProps = {
    error: ?boolean,
    label: ?(React.Node | string)
};

export default function TextInput({ error, label, ...props }: TProps) {
    function renderLabel() {
        if (!label) {
            return null;
        }

        return <Label>{label}</Label>;
    }
    let colorStyle = styles.default;

    if (error) {
        colorStyle = styles.error;
    }

    return (
        <View>
            {renderLabel()}
            <RNTextInput placeholderTextColor={colorStyle.color} style={[styles.input, colorStyle]} {...props} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        paddingTop: Spacing.s2,
        paddingBottom: Spacing.s2,
        borderBottomWidth: 2,
        marginBottom: 10
    },
    default: {
        borderBottomColor: Color.WHITE,
        color: Color.WHITE
    },
    error: {
        borderBottomColor: Color.RED_30,
        color: Color.RED_20
    }
});
