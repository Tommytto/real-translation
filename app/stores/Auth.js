// @flow
import { observable, action } from 'mobx';

export default class AuthStore {
    @observable name = '';
    @observable isLoading = false;

    @action setName(name) {
        this.name = name;
    }
}
