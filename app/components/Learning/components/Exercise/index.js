// @flow
import React, { useState } from 'react';
import useService from 'logic/hooks/use-service';
import type { TExerciseType } from 'constants/ExerciseType';
import { ExerciseType } from 'constants/ExerciseType';
import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import compose from 'helpers/compose';
import type { TLanguages } from 'constants/Languages';
import { ExerciseState } from 'constants/ExerciseState';
import WordCard from 'components/Learning/shared/WordCard';
import Button from 'components/shared/Button';
import useExerciseState from 'components/Learning/components/logic/use-exercise-state';
import useTaskSet from 'components/Learning/components/logic/use-task-set';
import useNavigation from 'logic/hooks/use-navigation';

type TProps = {
    langTo: TLanguages,
    exerciseType: TExerciseType,
    ActionComponent: React.Component,
    langFrom: TLanguages
};

function Exercise({ langTo, langFrom, exerciseType, ActionComponent }: TProps) {
    const checkingService = useService('exerciseCheckingService');
    const navigation = useNavigation();

    const { exerciseState, setProgressState, setErrorState, setSuccessState } = useExerciseState(
        ExerciseState.PROGRESS
    );
    const [taskIteration, nextTask] = useTaskSet({
        exerciseType,
        langFrom,
        langTo
    });

    const { value: task, done } = taskIteration;

    if (done) {
        navigation.navigate('Home');
        return;
    }

    function onSubmit(estimatedTranslation) {
        if (!task) {
            return;
        }
        const { success } = checkingService.check({
            wordId: task.translation.id,
            estimatedTranslation,
            exerciseType,
            langTo
        });
        if (success) {
            setSuccessState();
        } else {
            setErrorState();
        }
    }

    const handleNextPress = action(() => {
        nextTask();
        setProgressState();
    });

    function renderNextButton() {
        if (exerciseState === ExerciseState.PROGRESS) {
            return null;
        }

        return (
            <Button style={styles.nextButton} theme="success" onPress={handleNextPress}>
                Next
            </Button>
        );
    }

    const actionComponentProps = {
        exerciseState,
        task: task.translation,
        answer: task.answer,
        lang: langTo,
        check: onSubmit
    };
    return (
        <View style={styles.container}>
            <WordCard
                translationAnswer={task.answer.value}
                exerciseState={exerciseState}
                rating={task && task.ratingEntity ? task.ratingEntity.rating : 0}
                string={task ? task.translation.value : ''}
            />
            <View style={styles.bottomPart}>
                <ActionComponent {...actionComponentProps} />
                {renderNextButton()}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    bottomPart: {
        flex: 2,
        justifyContent: 'space-between'
    },
    nextButton: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        alignSelf: 'flex-end'
    }
});

export default compose(observer)(Exercise);
