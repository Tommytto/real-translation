// @flow
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import type { NavigationState } from 'react-navigation';
import StartRouter from 'routes/StartRouter';
import AppRouter from 'routes/AppRouter';
import AuthCheckerScreen from 'components/Start/screens/AuthCheckerScreen';

const RootSwitch = createSwitchNavigator(
    {
        AuthChecking: AuthCheckerScreen,
        Start: StartRouter,
        App: AppRouter
    },
    {
        initialRouteName: 'AuthChecking'
    }
);

export default createAppContainer<NavigationState, {}>(RootSwitch);
