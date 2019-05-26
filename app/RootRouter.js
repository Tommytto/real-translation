// @flow
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import HelloScreen from './screens/HelloScreen';
import SignUpScreen from './screens/SignUpScreen';
import TextRecognizerScreen from './screens/TextRecognizerScreen';
import Spacing from './style/spacing';
import COLOR from './style/colors';

const AppStack = createStackNavigator({
    Home: HomeScreen,
    TextRecognizer: TextRecognizerScreen
});

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
        defaultNavigationOptions: {
            headerTransparent: true,
            headerStyle: {
                marginLeft: Spacing.s5,
            },
            headerTintColor: COLOR.WHITE
        }
    }
);

export default createAppContainer(
    createSwitchNavigator(
        {
            Hello: HelloStack,
            App: AppStack
        },
        {
            initialRouteName: 'Hello'
        }
    )
);
