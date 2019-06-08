// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import useNavigation from 'logic/hooks/use-navigation';
import Color from 'style/Color';
import Spacing from 'style/Spacing';
import { EXERCISE_TYPE } from 'constants/ExerciseType';
import ExerciseBlock from 'components/Home/shared/ExerciseBlock';
import useService from 'logic/hooks/use-service';

function ExerciseBlockList() {
    const navigation = useNavigation();
    const exerciseTypeService = useService('exerciseTypeService');
    const exerciseTypeData = exerciseTypeService.getExerciseTypeData();

    function getPressHandler(type: string) {
        return () => {
            navigation.navigate('Learning', {
                type: [type]
            });
        };
    }

    const config = [
        {
            key: EXERCISE_TYPE.SOURCE_TO_TARGET,
            title: 'English to Russian',
            onPress: getPressHandler(exerciseTypeData[EXERCISE_TYPE.SOURCE_TO_TARGET].id),
            backgroundColor: Color.SKY_BLUE_30,
            info: '12 words available'
        },
        {
            key: EXERCISE_TYPE.TARGET_TO_SOURCE,
            title: 'Russian to English',
            info: '35 words available',
            backgroundColor: Color.TUSCANY_30,
            onPress: getPressHandler(exerciseTypeData[EXERCISE_TYPE.TARGET_TO_SOURCE].id)
        }
    ];
    return (
        <View style={styles.container}>
            {config.map(({ key, ...rest }) => (
                <View style={styles.exerciseBlock} key={key}>
                    <ExerciseBlock {...rest} />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    exerciseBlock: {
        marginBottom: Spacing.s3
    }
});

export default ExerciseBlockList;
