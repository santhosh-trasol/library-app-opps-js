// class Library {
//     constructor() {
//         this.books = [];
//     }

//     addBook(book) {
//         this.books.push(book);
//     }

//     getBook() {
//         return this.books;
//     }

//     removeBook(index) {
//         if (index >= 0 && index < this.books.length) {
//             this.books.splice(index, 1)
//         }
//     }
// }

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
            this.books.splice(index, 1);
        }
    }

    searchBook(query) {
        query = query.toLowerCase();
        return this.books.filter(book =>
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query)
        );
    }

    saveToStorage() {
        localStorage.setItem("bookLibrary", JSON.stringify(this.books));
    }

    loadFromStorage() {
        const data = JSON.parse(localStorage.getItem("bookLibrary"));
        if (Array.isArray(data)) {
            this.books = data.map(book => {
                const b = new Book(book.title, book.author);
                if (book.read) b.toggleRead();
                return b;
            });
        }
    }
}