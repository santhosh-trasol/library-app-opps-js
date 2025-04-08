

const library = new Library();



const formEl = document.querySelector("form");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const bookEl = document.getElementById("titleInput").value.trim();
    const authorEl = document.getElementById("authorInput").value.trim();

    if (bookEl && authorEl) {
        const addedBook = new Book(bookEl, authorEl);
        library.addBook(addedBook);
        renderLibrary()
    }

    document.getElementById("titleInput").value = "";
    document.getElementById("authorInput").value = "";

})

function markRead(index) {
    library.getBook()[index].markAsRead();
    renderLibrary()
}

function removeBook(index) {
    library.removeBook(index);
    renderLibrary();
}

function renderLibrary() {
    const bookListEl = document.querySelector(".added-book-list");
    bookListEl.innerHTML = "";
    library.getBook().forEach((book, index) => {
        bookListEl.innerHTML += `
        <li>
            <p class="fw-semibold ${book.isRead() ? "text-decoration-line-through" : ""}"> ${book.title} Book By ${book.author}</p>
            <div>
                <button type="button" class="btn btn-success btn-sm fw-semibold" onclick="markRead(${index})">Mark as Read</button>
                <button type="button" class="btn btn-danger btn-sm fw-semibold" onclick="removeBook(${index})">Remove</button>
            </div>
        </li>
    `
    });

}
