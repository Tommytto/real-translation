// @flow

import type { $$EntityObject } from 'types/utils';
import uuid from 'uuid';
import { observable } from 'mobx';

export default class Model<GItem: { id: string }> {
    @observable _idList: string[] = [];
    _data: $$EntityObject<GItem> = {};
    EntityClass: any;

    _verifyId(item: $Diff<GItem, { id?: string }>): GItem {
        if (!item.id) {
            let newId;
            while (!newId) {
                const maybeId = uuid();
                if (this._idList.every((itemId) => itemId !== maybeId)) {
                    newId = maybeId;
                }
            }
            // eslint-disable-next-line no-param-reassign
            item.id = newId;
        }
        return ((item: any): GItem);
    }

    addOne(item: $Diff<GItem, { id?: string }>) {
        const Klass = this.EntityClass;
        const entity = Klass ? new Klass(item) : item;
        const verifiedItem = this._verifyId(entity);
        this._idList.push(verifiedItem.id);
        this._data[verifiedItem.id] = verifiedItem;
        return verifiedItem;
    }

    addMany(itemList: $Diff<GItem, { id?: string }>[]): GItem[] {
        // TODO
        // $FlowFixMe
        return itemList.map((item) => this.addOne(item));
    }

    getIdList() {
        return this._idList;
    }

    getData() {
        return this._data;
    }

    getDataList(): GItem[] {
        return ((Object.values(this._data): any): GItem[]);
    }

    findMany(scheme: {} | ((GItem) => boolean)): GItem[] {
        const checker = this._getChecker(scheme);
        return this.getDataList().filter(checker);
    }

    updateOne(scheme: {} | ((GItem) => boolean), schemeToChange: GItem | ((GItem) => GItem)): ?GItem {
        const item = this.findOne(scheme);
        if (!item) {
            return null;
        }
        if (schemeToChange instanceof Function) {
            return schemeToChange(item);
        }
        Object.keys(schemeToChange).forEach((propName) => {
            item[propName] = schemeToChange[propName];
        });

        return item;
    }

    _getChecker(scheme) {
        let checker;
        if (scheme instanceof Function) {
            checker = scheme;
        } else {
            checker = (item) => Object.keys(scheme).every((propName) => item[propName] === scheme[propName]);
        }
        return checker;
    }

    findOne(scheme: {} | ((GItem) => boolean)): ?GItem {
        const checker = this._getChecker(scheme);
        return this.getDataList().find(checker);
    }
}
