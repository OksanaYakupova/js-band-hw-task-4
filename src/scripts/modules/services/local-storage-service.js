class LocalStorageService {
    constructor() {
        this.prefix = 'JS-Band-';
    }

    set(key, value) {
        localStorage.setItem(this.prefix + key, value);
    }

    get(key) {
        return localStorage.getItem(this.prefix + key);
    }
}

const localStorageService = new LocalStorageService();
Object.freeze(localStorageService);

export default localStorageService;
