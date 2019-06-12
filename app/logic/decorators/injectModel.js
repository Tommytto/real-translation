// @flow

import type { TModelName } from 'di/models';
import { models } from 'di/models';

export default function injectModel(modelNameList: TModelName[]) {
    return (klass) => {
        modelNameList.forEach((modelName) => {
            // eslint-disable-next-line no-param-reassign
            klass.prototype[`_${modelName}`] = models[modelName];
        });
        return klass;
    };
}
