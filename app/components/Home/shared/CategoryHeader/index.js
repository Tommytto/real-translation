// @flow
import * as React from "react";
import Text from "../../../shared/Text";
import Spacing from '../../../../style/spacing';
import {StyleSheet} from "react-native";

type TProps = {
    children: React.Node
}

export default function CategoryHeader({children}: TProps) {
    return <Text size="60" weight="semi-bold" style={styles.header}>{children}</Text>
}

const styles = StyleSheet.create({
    header: {
        marginBottom: Spacing.s4,
    }
});