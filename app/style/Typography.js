import PlatformHelpers from 'helpers/platform';
export default class Typography {
    text10 = {
        fontSize: 64,
        fontWeight: '100',
        lineHeight: Math.floor(64 * 1.4),
        fontFamily: 'Rubik-Regular'
    };
    text20 = {
        fontSize: 50,
        fontWeight: '100',
        lineHeight: Math.floor(50 * 1.4),
        fontFamily: 'Rubik-Regular'
    };
    text30 = {
        fontSize: 36,
        fontWeight: PlatformHelpers.isAndroid ? '100' : '200',
        lineHeight: Math.floor(36 * 1.3),
        fontFamily: 'Rubik-Regular'
    };
    text40 = {
        fontSize: 28,
        fontWeight: '300',
        lineHeight: PlatformHelpers.isAndroid ? Math.floor(28 * 1.4) : Math.floor(28 * 1.21),
        fontFamily: 'Rubik-Regular'
    };
    text50 = {
        fontSize: PlatformHelpers.isAndroid ? 24 : 22,
        fontWeight: '300',
        lineHeight: PlatformHelpers.isAndroid ? Math.floor(24 * 1.17) : Math.floor(22 * 1.27),
        fontFamily: 'Rubik-Regular'
    };
    text60 = {
        fontSize: 20,
        fontWeight: '300',
        lineHeight: Math.floor(20 * 1.2),
        fontFamily: 'Rubik-Regular'
    };
    text70 = {
        fontSize: PlatformHelpers.isAndroid ? 16 : 17,
        fontWeight: '300',
        lineHeight: PlatformHelpers.isAndroid ? Math.floor(16 * 1.38) : Math.floor(17 * 1.29),
        fontFamily: 'Rubik-Regular'
    };
    text80 = {
        fontSize: PlatformHelpers.isAndroid ? 14 : 15,
        fontWeight: '300',
        lineHeight: PlatformHelpers.isAndroid ? Math.floor(14 * 1.33) : Math.floor(15 * 1.33),
        fontFamily: 'Rubik-Regular'
    };
    text90 = {
        fontSize: PlatformHelpers.isAndroid ? 12 : 13,
        fontWeight: '300',
        lineHeight: PlatformHelpers.isAndroid ? Math.floor(12 * 1.33) : Math.floor(13 * 1.38),
        fontFamily: 'Rubik-Regular'
    };
    text100 = {
        fontSize: PlatformHelpers.isAndroid ? 10 : 11,
        fontWeight: '300',
        lineHeight: PlatformHelpers.isAndroid ? Math.floor(10 * 1.18) : Math.floor(11 * 1.18),
        fontFamily: 'Rubik-Regular'
    };
}
