// @flow
import TranslationModel from 'models/TranslationModel';
import TranslationRelationModel from 'models/TranslationRelationModel';
import TranslationExerciseRatingModel from 'models/TranslationExerciseRatingModel';
import type { TTranslation } from 'models/TranslationModel';
import type { TLanguages } from 'constants/Languages';

export default class TranslationHelperService {
    _translationModel: TranslationModel;
    _translationRelationModel: TranslationRelationModel;
    _ratingModel: TranslationExerciseRatingModel;

    constructor({
        translationModel,
        translationRelationModel,
        ratingModel
    }: {
        translationModel: TranslationModel,
        translationRelationModel: TranslationRelationModel,
        ratingModel: TranslationExerciseRatingModel
    }) {
        this._translationModel = translationModel;
        this._translationRelationModel = translationRelationModel;
        this._ratingModel = ratingModel;
    }

    findAnswerList({ wordId, lang }: { wordId: string, lang: TLanguages }): TTranslation[] {
        const translationRelations = this._translationRelationModel.findMany((relation) =>
            this._isWordInRelation(relation, wordId)
        );
        if (!translationRelations) {
            return [];
        }

        return translationRelations
            .map((relation) => {
                const answerId = this._getAnswerId(relation, wordId);
                return this._translationModel.findOne({
                    id: answerId,
                    lang
                });
            })
            .filter((item) => Boolean(item));
    }

    _getAnswerId(relation, wordId): ?string {
        if (relation.wordId1 === wordId) {
            return relation.wordId2;
        }
        if (relation.wordId2 === wordId) {
            return relation.wordId1;
        }
        return null;
    }

    _isWordInRelation(relation, wordId): boolean {
        return relation.wordId1 === wordId || relation.wordId2 === wordId;
    }

    getTranslationDataListById() {}
}
