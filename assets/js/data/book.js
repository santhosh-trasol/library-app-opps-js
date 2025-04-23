// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//         this.read = false;
//     }
//     isRead() {
//         return this.read;
//     }
//     markAsRead() {
//         return this.read = true;
//     }
// }

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.read = false;
    }
    isRead() {
        return this.read;
    }
    toggleRead() {
        return this.read = !this.read;
    }
}