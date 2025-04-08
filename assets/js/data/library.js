class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    getBook() {
        return this.books;
    }

    removeBook(index) {
        if (index >= 0 && index < this.books.length) {
            this.books.splice(index, 1)
        }
    }
}