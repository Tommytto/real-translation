// @flow
import React from 'react';
import RootRouter from './RootRouter';
import { Provider as StoreProvider } from 'mobx-react/native';
import AuthStore from "./stores/Auth";
import TranslationStore from "./stores/TranslationList";
import TransportContext, {transportData} from "./logic/contexts/TransportContext";

const storeData = {
    authStore: new AuthStore(),
    translationStore: new TranslationStore(),
};

export default function App() {
    return (
        <StoreProvider {...storeData}>
            <TransportContext.Provider value={transportData}>
                <RootRouter />
            </TransportContext.Provider>
        </StoreProvider>
    );
}
