// @flow
import React from 'react';
import HomeLayout from '../../../shared/HomeLayout';
import type { NavigationScreenProp } from 'react-navigation';
import TextExercise from '../../components/TextExercise';
import { ExerciseType } from 'constants/ExerciseType';
import type { TExerciseType } from 'constants/ExerciseType';
import type { TLanguages } from 'constants/Languages';
import Color from 'style/Color';

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
        [ExerciseType.TEXT]: TextExercise
    };
    const exerciseInfo = navigation.state.params;
    const ExerciseComponent = config[exerciseInfo.exerciseType];
    return (
        <HomeLayout>
            <ExerciseComponent {...exerciseInfo} />
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
