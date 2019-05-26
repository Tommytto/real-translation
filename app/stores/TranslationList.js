// @flow
import { observable } from 'mobx';
import uuid from 'uuid';

export default class TranslationStore {
    @observable wordList = [];
    @observable wordData = {};

    @action addTranslation(data) {
        const translation = new Translation(data);
        this.wordList.push(translation.id);
        this.wordData[translation.id] = translation;
        return translation;
    }

    @action addTranslationList(translationList) {
        const { data, list } = translationList.reduce(
            (result, translationData) => {
                const translation = new Translation(translationData);
                return {
                    data: {
                        ...result.data,
                        [translation.id]: translation
                    },
                    list: [...result.list, translation.id]
                };
            },
            { data: {}, list: [] }
        );

        this.wordList.push(...list);
        this.wordData = {
            ...this.wordData,
            ...data
        };
    }
}

class Translation {
    id = null;
    value = '';
    translation = '';

    constructor({ value, translation }) {
        this.id = uuid();
        this.value = value;
        this.translation = translation;
    }
}
