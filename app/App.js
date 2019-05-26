// @flow
import React from 'react';
import RootRouter from './RootRouter';
import { Provider as StoreProvider } from 'mobx-react/native';
import AuthStore from "./stores/Auth";
import TranslateApi from "./services/TranslateApi";
import TranslationStore from "./stores/TranslationList";

const transportData = {
    translationApi: new TranslateApi()
};
const storeData = {
    authStore: new AuthStore(),
    translationStore: new TranslationStore(),
};

export const TransportContext = React.createContext();

export default function App() {
    return (
        <StoreProvider {...storeData}>
            <TransportContext.Provider value={transportData}>
            <RootRouter />
            </TransportContext.Provider>
        </StoreProvider>
    );
}
