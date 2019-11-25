export default class ItemWithId {
    constructor() {
        this.id = this.getRandomId();
    }

    getRandomId() {
        function randomString(length) {
            let result = '';
            const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        return `${randomString(5)}-${randomString(5)}-${randomString(5)}`;
    }
}
