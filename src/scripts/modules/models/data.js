import Ship from './ship.js';
import Truck from './truck.js';
import Cost from './cost.js';
import localStorageService from '../services/local-storage-service.js';


export default class Data {
    constructor() {
        this.shipList = [];
        this.truckList = [];
        this.costList = [];
    }

    save() {
        localStorageService.set('shipList', JSON.stringify(this.shipList));
        localStorageService.set('truckList', JSON.stringify(this.truckList));
        localStorageService.set('costList', JSON.stringify(this.costList));
    }

    restore() {
        this.shipList = this.restoreClasses('shipList', Ship);
        this.truckList = this.restoreClasses('truckList', Truck);
        this.costList = this.restoreClasses('costList', Cost);
    }

    restoreClasses(key, className) {
        const result = [];
        if (localStorageService.get(key)) {
            const objectList = JSON.parse(localStorageService.get(key));
            objectList.forEach((object) => {
                // eslint-disable-next-line new-cap
                const model = new className();
                result.push(Object.assign(model, object));
            });
        }
        return result;
    }
}
