// @flow
import Model from 'models/Model';

export type TTranslationRelations = {
    id: string,
    relationList: string[]
};

export default class TranslationRelationModels extends Model<TTranslationRelations> {}
