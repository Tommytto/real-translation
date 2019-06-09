// @flow
import type { TLanguages } from 'constants/Languages';
import TranslationRelationModels from 'models/TranslationRelationModels';
import TranslationModel from 'models/TranslationModel';

export default class ExerciseCheckingService {
    _translationRelationsModel: TranslationRelationModels;
    _translationModel: TranslationModel;

    constructor({
        translationModel,
        translationRelationsModel
    }: {
        translationModel: TranslationModel,
        translationRelationsModel: TranslationRelationModels
    }) {
        this._translationModel = translationModel;
        this._translationRelationsModel = translationRelationsModel;
    }

    check({
        wordId,
        langTo,
        estimatedTranslation
    }: {
        wordId: string,
        langTo: TLanguages,
        estimatedTranslation: string
    }): boolean {
        const translationRelations = this._translationRelationsModel.findOne(({ relationList }) =>
            relationList.includes(wordId)
        );
        if (!translationRelations) {
            return false;
        }
        const translationList = this._translationModel.findMany({
            lang: langTo
        });
        const finalTranslation = translationList.find((translation) =>
            translationRelations.relationList.includes(translation.id)
        );
        return !!finalTranslation && finalTranslation.value === estimatedTranslation.trim();
    }
}
