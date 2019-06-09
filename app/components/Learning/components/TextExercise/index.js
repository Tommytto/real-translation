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
import WordCardLayout from 'components/Learning/components/shared/WordCardLayout';

type TProps = {
    langTo: TLanguages,
    langFrom: TLanguages,
    taskGeneratorService: TaskGeneratorService
};

function TextExercise({ taskGeneratorService, langTo, langFrom }: TProps) {
    const checkingService = useService('exerciseCheckingService');
    // const learningRatingService = useService('learningRatingService');

    const [exerciseState, setExerciseState] = useState(ExerciseState.PROGRESS);
    const task = taskGeneratorService.getTask();
    const exerciseInfo = {
        exerciseType: ExerciseType.TEXT,
        lang: langFrom
    };
    useEffect(() => {
        taskGeneratorService.generateTask(exerciseInfo);
    }, []);

    function onSubmit(estimatedTranslation) {
        if (!task) {
            return;
        }
        const isSuccess = checkingService.check({ wordId: task.translation.id, estimatedTranslation, langTo });
        if (isSuccess) {
            setExerciseState(ExerciseState.SUCCESS);
        } else {
            setExerciseState(ExerciseState.ERROR);
        }
    }

    function onChangeText() {
        setExerciseState(ExerciseState.PROGRESS);
    }

    const exerciseActionSlot = (
        <TextInputExercise exerciseState={exerciseState} onSubmit={onSubmit} onChangeText={onChangeText} />
    );

    return (
        <View style={styles.container}>
            <WordCardLayout
                exerciseState={exerciseState}
                source={task ? task.translation.value : ''}
                exerciseActionSlot={exerciseActionSlot}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    }
});

export default compose(
    inject('taskGeneratorService'),
    observer
)(TextExercise);
