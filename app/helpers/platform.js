import { Platform, Dimensions, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;
const { height, width } = Dimensions.get('window');

const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';
const screenWidth = width;
const screenHeight = height;
const isSmallScreen = isIOS ? screenWidth <= 320 : screenWidth <= 360;
const isShortScreen = screenHeight <= 600;
let statusBarHeight = isIOS ? 20 : StatusBarManager.HEIGHT; // eslint-disable-line
const isIphoneX = isIOS && !Platform.isPad && !Platform.isTVOS && (screenHeight === 812 || screenWidth === 812);

// override guesstimate height with the actual height from StatusBarManager
if (isIOS) {
    StatusBarManager.getHeight((data) => (statusBarHeight = data.height));
}
const PlatformHelpers = {
    isAndroid,
    isIOS,
    screenWidth,
    screenHeight,
    isSmallScreen,
    isShortScreen,
    statusBarHeight,
    isIphoneX
};

export default PlatformHelpers;
