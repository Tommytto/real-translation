// @flow
import React, { useEffect, useState } from 'react';
import useService from 'logic/hooks/use-service';
import TextInputExercise from 'components/Learning/components/shared/TextInputExercise';
import { ExerciseType } from 'constants/ExerciseType';
import { View, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';
import { action } from 'mobx';
import compose from 'helpers/compose';
import type { TLanguages } from 'constants/Languages';
import { TaskGeneratorService } from 'services/TaskGeneratorService';
import { ExerciseState } from 'constants/ExerciseState';
import WordCard from 'components/Learning/shared/WordCard';
import Button from 'components/shared/Button';
import useExerciseState from 'components/Learning/components/logic/use-exercise-state';
import useTaskSet from 'components/Learning/components/logic/use-task-set';
import useNavigation from 'logic/hooks/use-navigation';

type TProps = {
    langTo: TLanguages,
    langFrom: TLanguages
};

function TextExercise({ langTo, langFrom }: TProps) {
    const checkingService = useService('exerciseCheckingService');
    const navigation = useNavigation();

    const { exerciseState, setProgressState, setErrorState, setSuccessState } = useExerciseState(
        ExerciseState.PROGRESS
    );
    const [translationAnswer, setTranslationAnswer] = useState();
    const [{ value: task, done }, nextTask] = useTaskSet({
        exerciseType: ExerciseType.TEXT,
        lang: langFrom
    });

    if (done) {
        navigation.navigate('Home');
        return;
    }

    function onSubmit(estimatedTranslation) {
        if (!task) {
            return;
        }
        const { success, answerList } = checkingService.check({
            wordId: task.translation.id,
            estimatedTranslation,
            exerciseType: ExerciseType.TEXT,
            langTo
        });
        setTranslationAnswer(answerList.join(','));
        if (success) {
            setSuccessState();
        } else {
            setErrorState();
        }
    }

    const handleNextPress = action(() => {
        nextTask();
        setProgressState();
        setTranslationAnswer();
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

    return (
        <View style={styles.container}>
            <WordCard
                translationAnswer={translationAnswer}
                exerciseState={exerciseState}
                rating={task && task.ratingEntity ? task.ratingEntity.rating : 0}
                string={task ? task.translation.value : ''}
            />
            <View style={styles.bottomPart}>
                <TextInputExercise exerciseState={exerciseState} onSubmit={onSubmit} onChangeText={setProgressState} />
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
        alignSelf: 'flex-end'
    }
});

export default compose(observer)(TextExercise);
