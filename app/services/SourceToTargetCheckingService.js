// @flow

import type { TTranslationModel } from 'models/TranslationModel';
import BaseExerciseChecking from 'services/BaseExerciseChecking';

// TODO
export default class SourceToTargetCheckingService extends BaseExerciseChecking {
    check({ translation, estimatedTranslation }: { translation: TTranslationModel, estimatedTranslation: string }) {
        const sourceValue = translation.targetWord.value;
        return sourceValue === estimatedTranslation.trim().toLowerCase();
    }
}
