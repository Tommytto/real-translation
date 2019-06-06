// @flow
import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import compose from '../../helpers/compose';
import { inject } from 'mobx-react/native';
import { EXERCISE_TYPE } from '../../stores/ExerciseType';
import useNavigation from '../../logic/hooks/use-navigation';
import type { TExerciseTypeStore } from '../../stores/ExerciseType';
import ExerciseBlock from '../ExerciseBlock';

type TProps = {
    exerciseTypeStore: TExerciseTypeStore
};

function ExerciseBlockList({ exerciseTypeStore }: TProps) {
    const navigation = useNavigation();
    const config = useRef([
        {
            key: EXERCISE_TYPE.SOURCE_TO_TARGET,
            title: 'Переводи слова с русского на английский',
            onPress: () => {
                navigation.navigate(exerciseTypeStore.exerciseTypeList[EXERCISE_TYPE.SOURCE_TO_TARGET].id)
            },
            theme: 'blue'
        },
        {
            key: EXERCISE_TYPE.TARGET_TO_SOURCE,
            title: 'Переводи слова с английского на русский',
            theme: 'aquamarine',
            onPress: () => {
                navigation.navigate(exerciseTypeStore.exerciseTypeList[EXERCISE_TYPE.TARGET_TO_SOURCE].id)
            }
        }
    ]);
    return (
        <View style={styles.container}>
            {config.current.map(({key, ...rest}, i) => {
                return (
                    <View key={key}>
                        <ExerciseBlock {...rest} />
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default compose(inject('exerciseTypeStore'))(ExerciseBlockList);
