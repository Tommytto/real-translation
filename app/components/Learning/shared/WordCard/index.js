// @flow
import React, { useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../../../shared/Text';
import Color from 'style/Color';
import type { TExerciseState } from 'constants/ExerciseState';
import { ExerciseState } from 'constants/ExerciseState';
import * as Progress from 'react-native-progress';
import PlatformHelpers from 'helpers/platform';

type TProps = {
    string: string,
    translationAnswer?: string,
    rating: number,
    exerciseState: TExerciseState
};

export default function WordCard({ translationAnswer, rating, exerciseState, string }: TProps) {
    const prevString = useRef(string);
    useEffect(() => {
        prevString.current = string;
    }, [string]);
    let progressColor = Color.BLUE_10;
    if (exerciseState === ExerciseState.SUCCESS) {
        progressColor = Color.GREEN_30;
    } else if (exerciseState === ExerciseState.ERROR) {
        progressColor = Color.RED_30;
    }
    function renderAnswer() {
        if (exerciseState === ExerciseState.PROGRESS) {
            return null;
        }
        return (
            <Text size="50" color="green">
                {translationAnswer}
            </Text>
        );
    }

    return (
        <View style={[styles.container, styles[exerciseState]]}>
            <Progress.Bar
                animated={string === prevString.current}
                progress={rating / 100}
                borderWidth={0}
                color={progressColor}
                width={250}
                borderRadius={0}
            />
            <View style={styles.topContainer}>
                <Text size="30" color="black">
                    {string}
                </Text>
            </View>
            <View style={styles.bottomContainer}>{renderAnswer()}</View>
        </View>
    );
}

WordCard.defaultProps = {
    exerciseState: ExerciseState.PROGRESS
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
        width: 250,
        marginTop: PlatformHelpers.isIOS ? 100 : 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderWidth: 2,
        backgroundColor: Color.WHITE
    },
    topContainer: {
        flex: 2,
        justifyContent: 'center'
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    [ExerciseState.PROGRESS]: {
        borderColor: Color.TRANSPARENT
    },
    [ExerciseState.SUCCESS]: {
        borderColor: Color.GREEN_30
    },
    [ExerciseState.ERROR]: {
        borderColor: Color.RED_30
    }
});
