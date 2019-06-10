// @flow
import React from 'react';
import RootRouter from 'routes/RootRouter';
import { ServiceProvider, StoreProvider } from './di';

export default function App() {
    return (
        <StoreProvider>
            <ServiceProvider>
                <RootRouter />
            </ServiceProvider>
        </StoreProvider>
    );
}
