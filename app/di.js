// @flow
import * as React from 'react';
import AuthService from 'services/AuthService';
import TranslateApi from 'services/rest/TranslateApi';
import { Provider } from 'mobx-react';
import TransportApi from 'services/rest/TransportApi';
import AuthApi from 'services/rest/AuthApi';
import TranslationExerciseRatingModel from 'models/TranslationExerciseRatingModel';
import TranslationModel from 'models/TranslationModel';
import TranslationRelationModel from 'models/TranslationRelationModel';
import ExerciseCheckingService from 'services/ExerciseCheckingService';
import { TaskGeneratorService } from 'services/TaskGeneratorService';
import TranslationHelperService from 'services/TranslationHelperService';
import TextRecognizerService from 'services/TextRecognizerService';

const models = {
    ratingModel: new TranslationExerciseRatingModel(),
    translationModel: new TranslationModel(),
    translationRelationModel: new TranslationRelationModel()
};

const { ratingModel, translationModel, translationRelationModel } = models;

const storeData = {};

const services = {
    exerciseCheckingService: new ExerciseCheckingService({
        translationModel,
        translationRelationModel,
        ratingModel,
        translationHelper: new TranslationHelperService(models)
    }),
    taskGeneratorService: new TaskGeneratorService({
        translationModel,
        ratingModel
    }),
    authService: new AuthService({ authApi: new AuthApi({ transport: new TransportApi() }) }),
    translationApi: new TranslateApi({ transport: new TransportApi() }),
    textRecognizerService: new TextRecognizerService(models)
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
    },
    {
        value: 'city',
        lang: 'en'
    },
    // {
    //     value: 'город',
    //     lang: 'ru'
    // },
    // {
    //     value: 'bad',
    //     lang: 'en'
    // },
    // {
    //     value: 'плохо',
    //     lang: 'ru'
    // }
];

const transList = translationModel.addMany(translationList);
const transRelations = [
    {
        wordId1: transList[0].id,
        wordId2: transList[1].id
    },
    {
        wordId1: transList[2].id,
        wordId2: transList[3].id
    },
    {
        wordId1: transList[4].id,
        wordId2: transList[5].id
    },
    // {
    //     wordId1: transList[6].id,
    //     wordId2: transList[7].id
    // },
    // {
    //     wordId1: transList[8].id,
    //     wordId2: transList[9].id
    // }
];
translationRelationModel.addMany(transRelations);
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
