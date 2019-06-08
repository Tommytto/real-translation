// @flow
import React, { useMemo, useState } from 'react';
import useService from 'logic/hooks/use-service';
import TextInputExercise from 'components/Learning/components/shared/TextInputExercise';
import { EXERCISE_TYPE } from 'constants/ExerciseType';
import { Alert } from 'react-native';

type TProps = {};

function TargetToSourceExercise() {
    const checkingService = useService('targetToSourceCheckingService');
    const translationRandomizer = useService('translationRandomizerService');
    const learningRatingService = useService('learningRatingService');
    const [translation, setTranslation] = useState(() =>
        translationRandomizer.getRandomTranslation(EXERCISE_TYPE.TARGET_TO_SOURCE)
    );

    function onSubmit(estimatedTranslation) {
        const isSuccess = checkingService.check({ translation, estimatedTranslation });
        if (isSuccess) {
            learningRatingService.upRating(translation.targetWord);
        } else {
            learningRatingService.downRating(translation.targetWord);
        }
        Alert.alert('Success: ' + isSuccess + ', ' + translation.targetWord.rating, 'my alert', [
            {
                text: 'OK',
                onPress: () =>
                    setTranslation(translationRandomizer.getRandomTranslation(EXERCISE_TYPE.TARGET_TO_SOURCE))
            }
        ]);
    }
    return <TextInputExercise onSubmit={onSubmit} source={translation.targetWord.value} />;
}

export default React.memo(TargetToSourceExercise);
