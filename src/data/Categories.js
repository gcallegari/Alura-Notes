export default class Categories {
    constructor() {
        this.categories = [];
        this._subscribers = [];
    }
    subscribe(func) {
        this._subscribers.push(func);
    }

    notify() {
        this._subscribers.forEach(func => {
            func(this.categories);
        });
    }

    addCategories(newCategory) {
        this.categories.push(newCategory);
    }
}