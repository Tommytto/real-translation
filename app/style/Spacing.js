// @flow
import PlatformHelpers from 'helpers/platform';
export default class Spacing {
    static s1: number = PlatformHelpers.isIOS ? 3 : 4;
    static s2: number = PlatformHelpers.isIOS ? 6 : 8;
    static s3: number = PlatformHelpers.isIOS ? 9 : 12;
    static s4: number = PlatformHelpers.isIOS ? 12 : 16;
    static s5: number = PlatformHelpers.isIOS ? 15 : 20;
    static s6: number = PlatformHelpers.isIOS ? 18 : 24;
    static s7: number = PlatformHelpers.isIOS ? 21 : 28;
    static s8: number = PlatformHelpers.isIOS ? 24 : 32;
    static s9: number = PlatformHelpers.isIOS ? 27 : 36;
    static s10: number = PlatformHelpers.isIOS ? 30 : 40;
}
