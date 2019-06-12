// @flow
import * as React from 'react';
import AuthService from 'services/AuthService';
import { Provider } from 'mobx-react';
import ExerciseCheckingService from 'services/ExerciseCheckingService';
import TranslationService from 'services/TranslationService';
import TaskGeneratorService from 'services/TaskGeneratorService';
import TextRecognitionService from 'services/TextRecognitionService';

const storeData = {};

const services = {
    exerciseCheckingService: new ExerciseCheckingService(),
    taskGeneratorService: new TaskGeneratorService(),
    authService: new AuthService(),
    textRecognitionService: new TextRecognitionService(),
    translationService: new TranslationService()
};

export type TServiceName = $Keys<typeof services>;
export type TServiceConfig = $ObjMap<typeof services, <V>(serviceItem: V) => V>;

export const ServiceContext = React.createContext<TServiceConfig>(services);

export function ServiceProvider({ children }: { children: React.Node }) {
    return <ServiceContext.Provider value={services}>{children}</ServiceContext.Provider>;
}
export function StoreProvider({ children }: { children: React.Node }) {
    return <Provider {...storeData}>{children}</Provider>;
}
