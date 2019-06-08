// @flow
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './components/Start/SignInScreen';
import HelloScreen from './components/Start/HelloScreen';
import SignUpScreen from './components/Start/SignUpScreen';
import TextRecognizerScreen from './screens/TextRecognizerScreen';
import Spacing from './style/spacing';
import COLOR from './style/colors';
import LearningScreen from './screens/LearningScreen';
import type {NavigationState} from 'react-navigation';

const defaultNavigationOptions = {
    headerTransparent: true,
    headerStyle: {
        marginLeft: Spacing.s5
    },
    headerTintColor: COLOR.WHITE
};


const AppStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                header: null
            }
        },
        Learning: LearningScreen,
        TextRecognizer: TextRecognizerScreen
    },
    {
        defaultNavigationOptions
    }
);

const HelloStack = createStackNavigator(
    {
        Hello: {
            screen: HelloScreen,
            navigationOptions: {
                header: null
            }
        },
        SignIn: SignInScreen,
        SignUp: SignUpScreen
    },
    {
        defaultNavigationOptions
    }
);

const RootSwitch = createSwitchNavigator(
    {
        Hello: HelloStack,
        App: AppStack
    },
    {
        initialRouteName: 'Hello'
    }
);

export default createAppContainer<NavigationState,{}>(RootSwitch);
