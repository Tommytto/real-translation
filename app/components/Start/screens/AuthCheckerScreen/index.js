// @flow
import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import useService from 'logic/hooks/use-service';
import type { NavigationScreenProp, NavigationState } from 'react-navigation';

type TProps = {
    navigation: NavigationScreenProp<NavigationState>
};

function AuthCheckerScreen({ navigation }: TProps) {
    const authService = useService('authService');
    useEffect(() => {
        (async () => {
            // if (!authService.isLoggedIn()) {
            //     await authService.auth();
            // }
            //
            if (authService.isLoggedIn()) {
                navigation.navigate('App');
            } else {
                navigation.navigate('Start');
            }
        })();
    });

    return <ActivityIndicator size="large" color="#0000ff" />;
}

export default AuthCheckerScreen;
