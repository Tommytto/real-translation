// @flow
import * as React from 'react';
import AuthService from 'services/AuthService';
import TranslateApi from 'services/rest/TranslateApi';
import { Provider } from 'mobx-react';
import TransportApi from 'services/rest/TransportApi';
import AuthApi from 'services/rest/AuthApi';
import TranslationExerciseRatingModel from 'models/TranslationExerciseRatingModel';
import TranslationModel from 'models/TranslationModel';
import TranslationRelationModels from 'models/TranslationRelationModels';
import ExerciseCheckingService from 'services/ExerciseCheckingService';
import { TaskGeneratorService } from 'services/TaskGeneratorService';

const models = {
    ratingModel: new TranslationExerciseRatingModel(),
    translationModel: new TranslationModel(),
    translationRelationsModel: new TranslationRelationModels()
};

const { ratingModel, translationModel, translationRelationsModel } = models;

const storeData = {
    taskGeneratorService: new TaskGeneratorService({
        translationModel,
        ratingModel
    })
};

const services = {
    exerciseCheckingService: new ExerciseCheckingService({
        translationModel,
        translationRelationsModel,
        ratingModel
    }),
    authService: new AuthService({ authApi: new AuthApi({ transport: new TransportApi() }) }),
    translationApi: new TranslateApi({ transport: new TransportApi() })
};

// todo remove it
const translationList = [
    {
        value: 'hello',
        lang: 'en'
    },
    {
        value: 'привет',
        lang: 'ru'
    },
    {
        value: 'world',
        lang: 'en'
    },
    {
        value: 'мир',
        lang: 'ru'
    },
    {
        value: 'good',
        lang: 'en'
    },
    {
        value: 'хорошо',
        lang: 'ru'
    }
];

const transList = translationModel.addMany(translationList);
const transRelations = [
    {
        relationList: [transList[0].id, transList[1].id]
    },
    {
        relationList: [transList[2].id, transList[3].id]
    },
    {
        relationList: [transList[4].id, transList[5].id]
    }
];
translationRelationsModel.addMany(transRelations);
transList.forEach((item) => {
    ratingModel.addOne({ rating: 0, exerciseType: 'TEXT', translationId: item.id });
});

export type TServiceName = $Keys<typeof services>;
export type TServiceConfig = $ObjMap<typeof services, <V>(serviceItem: V) => V>;

export const ServiceContext = React.createContext<TServiceConfig>(services);

export function ServiceProvider({ children }: { children: React.Node }) {
    return <ServiceContext.Provider value={services}>{children}</ServiceContext.Provider>;
}
export function StoreProvider({ children }: { children: React.Node }) {
    return <Provider {...storeData}>{children}</Provider>;
}
