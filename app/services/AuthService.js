// @flow
import { observable, action } from 'mobx';
import type { TAuthApi } from 'services/rest/AuthApi';

export type TUser = $Exact<{
    name: string,
    id: string,
    email: string
}>;

export default class AuthService {
    _name: string = '';
    _email: string = '';
    _id: string = '';
    _isLoading: boolean = false;
    _authApi: TAuthApi;

    constructor({ authApi }: { authApi: TAuthApi }) {
        this._authApi = authApi;
    }

    _setUser({ name, id, email }: TUser) {
        this._name = name;
        this._id = id;
        this._email = email;
    }

    _setIsLoading(isLoading: boolean) {
        this._isLoading = isLoading;
    }

    getName() {
        return this._name;
    }

    getIsLoading() {
        return this._isLoading;
    }

    isLoggedIn() {
        return !!this._id;
    }

    async auth() {
        this._setIsLoading(true);
        const userInfo = await this._authApi.auth();
        this._setIsLoading(false);

        this._setUser(userInfo);
    }
}

export type TAuthService = AuthService;
