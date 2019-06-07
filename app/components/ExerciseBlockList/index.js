// @flow
import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import compose from '../../helpers/compose';
import { inject } from 'mobx-react/native';
import { EXERCISE_TYPE } from '../../stores/ExerciseType';
import useNavigation from '../../logic/hooks/use-navigation';
import type { TExerciseTypeStore } from '../../stores/ExerciseType';
import ExerciseBlock from '../ExerciseBlock';
import Spacing from '../../style/spacing';
import COLOR from "../../style/colors";

type TProps = {
    exerciseTypeStore: TExerciseTypeStore
};

function ExerciseBlockList({ exerciseTypeStore }: TProps) {
    const navigation = useNavigation();
    const config = useRef([
        {
            key: EXERCISE_TYPE.SOURCE_TO_TARGET,
            title: 'English to Russian',
            onPress: () => {
                navigation.navigate(exerciseTypeStore.exerciseTypeList[EXERCISE_TYPE.SOURCE_TO_TARGET].id);
            },
            backgroundColor: COLOR.SKY_BLUE_30,
            info: '12 words available'
        },
        {
            key: EXERCISE_TYPE.TARGET_TO_SOURCE,
            title: 'Russian to English',
            info: '35 words available',
            backgroundColor: COLOR.TUSCANY_30,
            onPress: () => {
                navigation.navigate(exerciseTypeStore.exerciseTypeList[EXERCISE_TYPE.TARGET_TO_SOURCE].id);
            }
        },
    ]);
    return (
        <View style={styles.container}>
            {config.current.map(({ key, ...rest }, i) => {
                return (
                    <View style={styles.exerciseBlock} key={key}>
                        <ExerciseBlock {...rest} />
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    exerciseBlock: {
        marginBottom: Spacing.s3
    }
});

export default compose(inject('exerciseTypeStore'))(ExerciseBlockList);
