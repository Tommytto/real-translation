// @flow
import TranslationModel from 'models/TranslationModel';
import TranslationRelationModel from 'models/TranslationRelationModel';
import type { TTranslation } from 'models/TranslationModel';
import type { TLanguages } from 'constants/Languages';
import injectModel from 'logic/decorators/injectModel';

@injectModel(['translationModel', 'translationRelationModel'])
class TranslationHelperService {
    _translationModel: TranslationModel;
    _translationRelationModel: TranslationRelationModel;

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
}

export default TranslationHelperService;
