// @flow
import React, { useMemo } from 'react';
import HomeLayout from '../../../shared/HomeLayout';
import { View, StyleSheet } from 'react-native';
import WordCard from '../../shared/WordCard';
import type { NavigationScreenProp, NavigationState } from 'react-navigation';
import TextInput from '../../../shared/TextInput';
import useService from 'logic/hooks/use-service';
import { EXERCISE_TYPE } from 'constants/ExerciseType';
import TargetToSourceExercise from '../../components/TargetToSourceExercise';
import SourceToTargetExercise from '../../components/SourceToTargetExercise';
type TProps = {
    navigation: NavigationScreenProp<NavigationState>
};

const LearningScreen = ({ navigation }: TProps) => {
    console.log(navigation);
    const config = {
        [EXERCISE_TYPE.TARGET_TO_SOURCE]: TargetToSourceExercise,
        [EXERCISE_TYPE.SOURCE_TO_TARGET]: SourceToTargetExercise
    };
    const Compon = config[navigation.state.params.type[0]];
    return (
        <HomeLayout>
            <Compon />
        </HomeLayout>
    );
};

const styles = StyleSheet.create({
    container: {}
});

export default LearningScreen;
