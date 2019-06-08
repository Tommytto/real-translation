// @flow
import type { TTranslationModel } from 'models/TranslationModel';

export default class BaseExerciseChecking {
    // eslint-disable-next-line no-unused-vars
    static check(params: { translation: TTranslationModel, estimatedTranslation: string }) {
        throw Error('Override method');
    }
}
