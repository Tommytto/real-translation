import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import HelloScreen from './screens/HelloScreen';
import SignUpScreen from './screens/SignUpScreen';
import TextRecognizerScreen from './screens/TextRecognizerScreen';

const AppStack = createStackNavigator({
    Home: HomeScreen,
    TextRecognizer: TextRecognizerScreen
});

const HelloStack = createStackNavigator({
    Hello: HelloScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen
});

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
