// @flow
import * as React from 'react';
import AuthStore from './services/Auth';
import TranslationStore from './services/TranslationListStore';
import ExerciseTypeStore from './services/ExerciseTypeStore';
import TranslateApi from './services/TranslateApi';
import { Provider } from 'mobx-react/native';
import TranslationRandomizer from './services/TranslationRandomizer';

const storeData = {
    authStore: new AuthStore(),
    translationListStore: new TranslationStore(),
    exerciseTypeStore: new ExerciseTypeStore()
};

//TODO Remove
storeData.translationListStore.addTranslationList([
    {
        source: {
            value: 'hello',
            lang: 'en'
        },
        target: {
            value: 'привет',
            lang: 'ru'
        }
    },
    {
        source: {
            value: 'world',
            lang: 'en'
        },
        target: {
            value: 'мир',
            lang: 'ru'
        }
    },
    {
        source: {
            value: 'good',
            lang: 'en'
        },
        target: {
            value: 'хорошо',
            lang: 'ru'
        }
    }
]);

const services = {
    translationApi: new TranslateApi(),
    translationRandomizer: new TranslationRandomizer({ translationListStore: storeData.translationListStore })
};

export type TServiceName = $Keys<typeof services>;
export type TService = $ObjMap<typeof services, <V>(serviceItem: V) => V>;

export const ServiceContext = React.createContext<TService>(services);

export function ServiceProvider({ children }: { children: React.Node }) {
    return <ServiceContext.Provider value={services}>{children}</ServiceContext.Provider>;
}
export function StoreProvider({ children }: { children: React.Node }) {
    return <Provider {...storeData}>{children}</Provider>;
}
