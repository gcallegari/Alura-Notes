export default class ArrayNotes {
    constructor() {
        this.notes = [];
        this._subscribers = [];
    }
    addNotes(title, text, category) {
        const newNote = new Note(title, text, category);
        this.notes.push(newNote);
    }

    deleteNotes(index) {
        this.notes.splice(index, 1);
    }

    subscribe(func) {
        this._subscribers.push(func);
    }

    notify() {
        this._subscribers.forEach(func => {
            func(this.categories);
        });
    }
}

class Note {
    constructor(title, text, category) {
        this.title = title;
        this.text = text;
        this.category = category;
    }
}