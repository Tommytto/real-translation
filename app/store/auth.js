import { observable, action } from 'mobx';

class AuthStore {
    @observable name = '';
    @observable isLoading = false;

    @action setName(name) {
        this.name = name;
    }
}

const authStore = new AuthStore();
export default authStore;
