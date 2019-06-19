// @flow
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import type { NavigationState } from 'react-navigation';
import StartRouter from 'routes/StartRouter';
import AppRouter from 'routes/AppRouter';
import AuthCheckerScreen from 'components/Start/screens/AuthCheckerScreen';
import HelloScreen from 'components/Start/screens/HelloScreen';
import SignInScreen from 'components/Start/screens/SignInScreen';
import SignUpScreen from 'components/Start/screens/SignUpScreen';
import NavigationStyle from 'style/NavigationStyle';
import HomeScreen from 'components/Home/screens/HomeScreen';
import LearningScreen from 'components/Learning/screens/LearningScreen';
import TextRecognizerScreen from 'components/Recognition/screens/TextRecognizerScreen';

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
