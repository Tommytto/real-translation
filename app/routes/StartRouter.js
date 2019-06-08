import { createStackNavigator } from 'react-navigation';
import HelloScreen from 'components/Start/screens/HelloScreen';
import SignInScreen from 'components/Start/screens/SignInScreen';
import SignUpScreen from 'components/Start/screens/SignUpScreen';
import NavigationStyle from 'style/NavigationStyle';

const StartRouter = createStackNavigator(
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
        defaultNavigationOptions: NavigationStyle.transparentHeader
    }
);

export default StartRouter;
