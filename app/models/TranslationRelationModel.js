// @flow
import Model from 'models/Model';

export type TTranslationRelation = {
    id: string,
    wordId1: string,
    wordId2: string
};

export default class TranslationRelationModel extends Model<TTranslationRelation> {}
