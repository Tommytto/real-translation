// @flow
import * as React from 'react';
import { TextInput as RNTextInput, View, StyleSheet } from 'react-native';
import Spacing from 'style/Spacing';
import Label from '../Label';
import Color from 'style/Color';

type TProps = {
    label?: React.Node
};

export default function TextInput({ label, ...props }: TProps) {
    function renderLabel() {
        if (!label) {
            return null;
        }

        return <Label>{label}</Label>;
    }
    return (
        <View>
            {renderLabel()}
            <RNTextInput style={style.input} {...props} />
        </View>
    );
}

const style = StyleSheet.create({
    input: {
        paddingTop: Spacing.s2,
        paddingBottom: Spacing.s2,
        borderBottomWidth: 2,
        borderBottomColor: Color.WHITE,
        marginBottom: 10,
    }
});
