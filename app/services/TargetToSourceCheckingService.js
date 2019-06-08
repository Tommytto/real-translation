// @flow

import type { TTranslationModel } from 'models/TranslationModel';
import BaseExerciseChecking from 'services/BaseExerciseChecking';

export default class TargetToSourceCheckingService extends BaseExerciseChecking {
    check({ translation, estimatedTranslation }: { translation: TTranslationModel, estimatedTranslation: string }) {
        const source = translation.sourceWord.value;
        return source === estimatedTranslation.trim().toLowerCase();
    }
}
