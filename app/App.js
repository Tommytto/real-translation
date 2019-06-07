// @flow
import React from 'react';
import RootRouter from './RootRouter';
import { Provider as StoreProvider } from 'mobx-react/native';
import AuthStore from "./stores/Auth";
import TranslationListStore from "./stores/TranslationListStore";
import ExerciseTypeStore from "./stores/ExerciseType";
import TranslateApi from "./services/TranslateApi";

const storeData = {
    authStore: new AuthStore(),
    translationListStore: new TranslationListStore(),
    exerciseTypeStore: new ExerciseTypeStore(),
};

const services = {
    translationApi: new TranslateApi(),
};

const ServiceContext = React.createContext<typeof services>(services);

export default function App() {
    return (
        <StoreProvider {...storeData}>
            <ServiceContext.Provider value={services}>
                <RootRouter />
            </ServiceContext.Provider>
        </StoreProvider>
    );
}
