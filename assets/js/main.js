



const library = new Library();
library.loadFromStorage();
renderLibrary();

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const bookEl = document.getElementById("titleInput").value.trim();
    const authorEl = document.getElementById("authorInput").value.trim();

    if (bookEl && authorEl) {
        const addedBook = new Book(bookEl, authorEl);
        library.addBook(addedBook);
        library.saveToStorage();
        renderLibrary();
    }

    document.getElementById("titleInput").value = "";
    document.getElementById("authorInput").value = "";
});


function toggleReadStatus(index) {
    const books = library.getBook();
    if (books[index]) {
        books[index].toggleRead();
        library.saveToStorage();
        renderLibrary();
    }
}


function removeBook(index) {
    library.removeBook(index);
    library.saveToStorage();
    renderLibrary();
}



function renderLibrary(filteredBooks = library.getBook()) {
    const bookListEl = document.querySelector(".added-book-list");
    bookListEl.innerHTML = "";

    if (filteredBooks.length === 0) {
        bookListEl.innerHTML = `<li><p class="text-muted">No books found.</p></li>`;
        document.getElementById("bookCount").textContent = 0;
        return;
    }

    filteredBooks.forEach((book) => {
        const realIndex = library.getBook().indexOf(book); // 🔥 Get the actual index from the full list

        bookListEl.innerHTML += `
            <li>
                <p class="fw-semibold ${book.isRead() ? "text-decoration-line-through" : ""}">
                    ${book.title} Book By ${book.author}
                </p>
                <div>
                    <button type="button" class="btn btn-${book.isRead() ? "warning" : "success"} btn-sm fw-semibold" onclick="toggleReadStatus(${realIndex})">${book.isRead() ? 'Mark as Unread' : 'Mark as Read'}</button>
                    <button type="button" class="btn btn-danger btn-sm fw-semibold" onclick="removeBook(${realIndex})">Remove</button>
                </div>
            </li>
        `;
    });

    document.getElementById("bookCount").textContent = filteredBooks.length;

    const readedBooksCount = filteredBooks.filter( book => book.isRead()).length;

    document.getElementById('readedBooks').textContent = readedBooksCount;

    

    // document.getElementById('readedBooks').textContent = 
}



const searchBook = document.querySelector("#searchBook");

searchBook.addEventListener('input', () => {
    const enterBook = searchBook.value.trim();
    const filteredBooks = library.searchBook(enterBook);
    renderLibrary(filteredBooks);
});



