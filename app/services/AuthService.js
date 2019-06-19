// @flow
import type { TAuthApi } from 'services/rest/AuthApi';
import injectSharedService from 'logic/decorators/injectSharedService';
import { observable } from 'mobx';

export type TUser = $Exact<{
    name: string,
    id: string,
    email: string
}>;

@injectSharedService(['authApi'])
class AuthService {
    _name: string = '';
    _email: string = '';
    _id: string = '';
    @observable _isLoading: boolean = false;
    _authApi: TAuthApi;

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

    async auth(data) {
        this._setIsLoading(true);
        const userInfo = await this._authApi.auth(data);
        this._setIsLoading(false);

        if (userInfo) {
            this._setUser(userInfo);
            return true;
        }

        return false;
    }

    async register(data) {
        this._setIsLoading(true);
        const userInfo = await this._authApi.register(data);
        this._setIsLoading(false);

        return Boolean(userInfo.message);
    }
}

export type TAuthService = AuthService;
export default AuthService;
