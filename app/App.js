// @flow
import React from 'react';
import RootRouter from './RootRouter';
import { Provider } from 'mobx-react/native';
import authStore from './store/auth';

const providerData = {
    authStore
};

export default function App() {
    return (
        <Provider {...providerData}>
            <RootRouter />
        </Provider>
    );
}
