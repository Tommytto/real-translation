// @flow
import React, { useMemo, useState } from 'react';
import useService from 'logic/hooks/use-service';
import TextInputExercise from 'components/Learning/components/shared/TextInputExercise';
import { EXERCISE_TYPE } from 'constants/ExerciseType';
import { Alert } from 'react-native';

type TProps = {};

function SourceToTargetExercise() {
    const checkingService = useService('sourceToTargetCheckingService');
    const translationRandomizer = useService('translationRandomizerService');
    const learningRatingService = useService('learningRatingService');
    const [translation, setTranslation] = useState(() =>
        translationRandomizer.getRandomTranslation(EXERCISE_TYPE.SOURCE_TO_TARGET)
    );

    function onSubmit(estimatedTranslation) {
        const isSuccess = checkingService.check({ translation, estimatedTranslation });
        if (isSuccess) {
            learningRatingService.upRating(translation.sourceWord);
        } else {
            learningRatingService.downRating(translation.sourceWord);
        }
        Alert.alert('Success: ' + isSuccess + ', ' + translation.sourceWord.rating, "my alert", [
            {
                text: 'OK',
                onPress: () =>
                    setTranslation(translationRandomizer.getRandomTranslation(EXERCISE_TYPE.SOURCE_TO_TARGET))
            }
        ]);
    }
    return <TextInputExercise onSubmit={onSubmit} source={translation.sourceWord.value} />;
}

export default React.memo(SourceToTargetExercise);
