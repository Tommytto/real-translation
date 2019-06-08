import { createStackNavigator } from 'react-navigation';
import HomeScreen from 'components/Home/screens/HomeScreen';
import LearningScreen from 'components/Learning/screens/LearningScreen';
import TextRecognizerScreen from 'components/Recognition/screens/TextRecognizerScreen';
import NavigationStyle from 'style/NavigationStyle';

const AppRouter = createStackNavigator(
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
        defaultNavigationOptions: NavigationStyle.transparentHeader
    }
);

export default AppRouter;
