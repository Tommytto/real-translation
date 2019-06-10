// @flow
import React, { useEffect, useState } from 'react';
import useService from 'logic/hooks/use-service';
import TextInputExercise from 'components/Learning/components/shared/TextInputExercise';
import { ExerciseType } from 'constants/ExerciseType';
import { View, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';
import compose from 'helpers/compose';
import type { TLanguages } from 'constants/Languages';
import { TaskGeneratorService } from 'services/TaskGeneratorService';
import { ExerciseState } from 'constants/ExerciseState';
import WordCard from 'components/Learning/shared/WordCard';
import Button from 'components/shared/Button';

type TProps = {
    langTo: TLanguages,
    langFrom: TLanguages,
    taskGeneratorService: TaskGeneratorService
};

function TextExercise({ langTo, langFrom }: TProps) {
    const checkingService = useService('exerciseCheckingService');
    const taskGeneratorService = useService('taskGeneratorService');

    const [exerciseState, setExerciseState] = useState(ExerciseState.PROGRESS);
    const [translationAnswer, setTranslationAnswer] = useState();
    const [rating, setRating] = useState(0);
    const task = taskGeneratorService.getTask();
    const exerciseInfo = {
        exerciseType: ExerciseType.TEXT,
        lang: langFrom
    };
    useEffect(() => {
        taskGeneratorService.generateTask(exerciseInfo);
        const { ratingEntity } = taskGeneratorService.getTask();
        setRating(ratingEntity.rating);
        return () => {
            taskGeneratorService.clear();
        };
    }, []);

    function onSubmit(estimatedTranslation) {
        if (!task) {
            return;
        }
        const { success, answer, rating: ratingAfterCheck } = checkingService.check({
            wordId: task.translation.id,
            estimatedTranslation,
            exerciseType: ExerciseType.TEXT,
            langTo
        });
        setTranslationAnswer(answer);
        if (success) {
            setExerciseState(ExerciseState.SUCCESS);
        } else {
            setExerciseState(ExerciseState.ERROR);
        }
        setRating(ratingAfterCheck);
    }

    function onChangeText() {
        setExerciseState(ExerciseState.PROGRESS);
    }

    function handleNextPress() {
        taskGeneratorService.generateTask(exerciseInfo);
        const { ratingEntity } = taskGeneratorService.getTask();
        setRating(ratingEntity.rating);
        setExerciseState(ExerciseState.PROGRESS);
        setTranslationAnswer();
    }

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
                rating={rating}
                string={task ? task.translation.value : ''}
            />
            <View style={styles.bottomPart}>
                <TextInputExercise exerciseState={exerciseState} onSubmit={onSubmit} onChangeText={onChangeText} />
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
