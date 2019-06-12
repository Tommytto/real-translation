// @flow
import React from 'react';
import HomeLayout from '../../../shared/HomeLayout';
import type { NavigationScreenProp } from 'react-navigation';
import TextExercise from '../../components/TextExercise';
import Exercise from '../../components/Exercise';
import { ExerciseType } from 'constants/ExerciseType';
import type { TExerciseType } from 'constants/ExerciseType';
import type { TLanguages } from 'constants/Languages';
import Color from 'style/Color';
import BlockExercise from 'components/Learning/components/BlockExercise';

type TProps = {
    navigation: NavigationScreenProp<{
        params: {
            exerciseType: TExerciseType,
            langTo: TLanguages,
            langFrom: TLanguages
        }
    }>
};

const LearningScreen = ({ navigation }: TProps) => {
    const config = {
        [ExerciseType.TEXT]: TextExercise,
        [ExerciseType.BLOCK]: BlockExercise
    };
    const exerciseInfo = navigation.state.params;
    const ExerciseComponent = config[exerciseInfo.exerciseType];
    return (
        <HomeLayout>
            <Exercise {...exerciseInfo} ActionComponent={ExerciseComponent} />
        </HomeLayout>
    );
};

LearningScreen.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('headerTitle', 'Word translations'),
    headerStyle: {
        backgroundColor: Color.WHITE
    },
    headerTintColor: Color.BLUE_10,
    headerTitleStyle: {
        color: Color.BLUE_10,
        fontWeight: 'bold'
    }
});

export default LearningScreen;
