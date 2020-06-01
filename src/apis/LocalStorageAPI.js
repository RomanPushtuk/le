import { USER_ID } from '../constants';

export class LocalStorageAPI {
    static getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    static setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getUserId() {
        return LocalStorageAPI.getItem(USER_ID);
    }

    static setUserId(id) {
        return LocalStorageAPI.setItem(USER_ID, id);
    }
}
