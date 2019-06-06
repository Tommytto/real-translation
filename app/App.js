// @flow
import React from 'react';
import RootRouter from './RootRouter';
import { Provider as StoreProvider } from 'mobx-react/native';
import AuthStore from "./stores/Auth";
import TranslationStore from "./stores/TranslationList";
import TransportContext, {transportData} from "./logic/contexts/TransportContext";
import ExerciseTypeStore from "./stores/ExerciseType";

const storeData = {
    authStore: new AuthStore(),
    translationStore: new TranslationStore(),
    exerciseTypeStore: new ExerciseTypeStore(),
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
