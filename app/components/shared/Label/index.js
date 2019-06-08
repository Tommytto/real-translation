// @flow
import * as React from 'react';
import { StyleSheet } from 'react-native';
import Spacing from 'style/spacing';
import Text from '../Text';

type TProps = {
    children: React.Node
};

export default function Label({ children }: TProps) {
    return <Text size="80">{children}</Text>;
}

const style = StyleSheet.create({
    input: {
        paddingTop: Spacing.s6
    }
});
