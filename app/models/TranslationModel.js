// @flow
import Model from 'models/Model';
import type { TLanguages } from 'constants/Languages';

export type TTranslation = {
    id: string,
    value: string,
    lang: TLanguages
};
export default class TranslationModel extends Model<TTranslation> {}
