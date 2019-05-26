// @flow
import PlatformHelpers from '../helpers/platform';
class Spacing {
    s1: number;
    s2: number;
    s3: number;
    s4: number;
    s5: number;
    s6: number;
    s7: number;
    s8: number;
    s9: number;
    s10: number;
    constructor() {
        this.s1 = PlatformHelpers.isIOS ? 3 : 4;
        this.s2 = PlatformHelpers.isIOS ? 6 : 8;
        this.s3 = PlatformHelpers.isIOS ? 9 : 12;
        this.s4 = PlatformHelpers.isIOS ? 12 : 16;
        this.s5 = PlatformHelpers.isIOS ? 15 : 20;
        this.s6 = PlatformHelpers.isIOS ? 18 : 24;
        this.s7 = PlatformHelpers.isIOS ? 21 : 28;
        this.s8 = PlatformHelpers.isIOS ? 24 : 32;
        this.s9 = PlatformHelpers.isIOS ? 27 : 36;
        this.s10 = PlatformHelpers.isIOS ? 30 : 40;
    }
}

export default new Spacing();
