// @flow
import BaseApi from 'services/rest/BaseApi';

export default class AuthApi extends BaseApi {
    // TODO
    // eslint-disable-next-line class-methods-use-this
    auth(data) {
        return this.requestWithJson('https://protected-mountain-11307.herokuapp.com/users/authenticate', {
            body: data
        });
    }

    register(data) {
        return this.requestWithJson('https://protected-mountain-11307.herokuapp.com/users/register', {
            body: data
        });
    }
}

export type TAuthApi = AuthApi;
