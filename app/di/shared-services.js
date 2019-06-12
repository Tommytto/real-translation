// @flow
import TextFilterService from 'services/TextFilterService';
import TransportApi from 'services/rest/TransportApi';
import TranslateApi from 'services/rest/TranslateApi';
import TranslationHelperService from 'services/TranslationHelperService';
import AuthApi from 'services/rest/AuthApi';

const transport = new TransportApi();

export const sharedServices = {
    textFilterService: new TextFilterService(),
    translationHelper: new TranslationHelperService(),
    translateApi: new TranslateApi({ transport }),
    authApi: new AuthApi({ transport })
};

export type TSharedServicesName = $Keys<typeof sharedServices>;
export type TSharedServicesConfig = $ObjMap<typeof sharedServices, <V>(sharedService: V) => V>;
