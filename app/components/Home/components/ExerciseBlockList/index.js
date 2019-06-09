// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import useNavigation from 'logic/hooks/use-navigation';
import Color from 'style/Color';
import Spacing from 'style/Spacing';
import { ExerciseType } from 'constants/ExerciseType';
import ExerciseBlock from 'components/Home/shared/ExerciseBlock';
import type { TExerciseType } from 'constants/ExerciseType';
import type { TLanguages } from 'constants/Languages';
import { LANGUAGES } from 'constants/Languages';

function ExerciseBlockList() {
    const navigation = useNavigation();

    function getPressHandler(routeInfo: { exerciseType: TExerciseType, langTo: TLanguages, langFrom: TLanguages }) {
        return () => {
            navigation.navigate('Learning', routeInfo);
        };
    }

    const config = [
        {
            key: 'EnglishToRussian',
            title: 'English to Russian',
            onPress: getPressHandler({ exerciseType: ExerciseType.TEXT, langTo: LANGUAGES.RU, langFrom: LANGUAGES.EN }),
            backgroundColor: Color.SKY_BLUE_30,
            info: '12 words available'
        },
        {
            key: 'RussianToEnglish',
            title: 'Russian to English',
            info: '35 words available',
            backgroundColor: Color.TUSCANY_30,
            onPress: getPressHandler({ exerciseType: ExerciseType.TEXT, langTo: LANGUAGES.EN, langFrom: LANGUAGES.RU })
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
