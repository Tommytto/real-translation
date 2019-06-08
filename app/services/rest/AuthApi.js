// @flow
import BaseApi from 'services/rest/BaseApi';

export default class AuthApi extends BaseApi {
    // TODO
    // eslint-disable-next-line class-methods-use-this
    auth() {
        return new Promise<Object>((resolve) =>
            setTimeout(() => {
                resolve({
                    id: 'asdfasdfasfds',
                    name: 'John Doe',
                    email: 'safasfd@sdfas.asff'
                });
            }, 1000)
        );
    }
}

export type TAuthApi = AuthApi;
