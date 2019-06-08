// @flow
import * as React from 'react';
import AuthService from 'services/AuthService';
import TranslationService from 'services/TranslationService';
import ExerciseTypeService from 'services/ExerciseTypeService';
import TranslateApi from 'services/rest/TranslateApi';
import { Provider } from 'mobx-react/native';
import TranslationRandomizerService from 'services/TranslationRandomizerService';
import TransportApi from 'services/rest/TransportApi';
import AuthApi from 'services/rest/AuthApi';
import TargetToSourceCheckingService from 'services/TargetToSourceCheckingService';
import SourceToTargetCheckingService from 'services/SourceToTargetCheckingService';
import LearningRatingService from 'services/LearningRatingService';

const storeData = {
    translationService: new TranslationService()
};

const services = {
    exerciseTypeService: new ExerciseTypeService(),
    authService: new AuthService({ authApi: new AuthApi({ transport: new TransportApi() }) }),
    translationApi: new TranslateApi({ transport: new TransportApi() }),
    targetToSourceCheckingService: new TargetToSourceCheckingService(),
    learningRatingService: new LearningRatingService(),
    sourceToTargetCheckingService: new SourceToTargetCheckingService(),
    translationRandomizerService: new TranslationRandomizerService({ translationService: storeData.translationService })
};

// TODO Remove
storeData.translationService.addTranslationList([
    {
        source: {
            value: 'hello',
            rating: 0,
            lang: 'en'
        },
        target: {
            rating: 0,
            value: 'привет',
            lang: 'ru'
        }
    },
    {
        source: {
            value: 'world',
            rating: 0,
            lang: 'en'
        },
        target: {
            rating: 0,
            value: 'мир',
            lang: 'ru'
        }
    },
    {
        source: {
            rating: 0,
            value: 'good',
            lang: 'en'
        },
        target: {
            value: 'хорошо',
            rating: 0,
            lang: 'ru'
        }
    }
]);

export type TServiceName = $Keys<typeof services>;
export type TServiceConfig = $ObjMap<typeof services, <V>(serviceItem: V) => V>;

export const ServiceContext = React.createContext<TServiceConfig>(services);

export function ServiceProvider({ children }: { children: React.Node }) {
    return <ServiceContext.Provider value={services}>{children}</ServiceContext.Provider>;
}
export function StoreProvider({ children }: { children: React.Node }) {
    return <Provider {...storeData}>{children}</Provider>;
}
