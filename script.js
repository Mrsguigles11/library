
const table = document.querySelector(".table");
const submitButton = document.querySelector(".submit_button");
const bookNameInput = document.querySelector("#book_name")
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary (book) {
    myLibrary.push(book);
}

function addBookToTable (book) {
    let row = document.createElement("tr");
    table.appendChild(row);
    for (const key in book) {
            let dataCell = document.createElement("td");
            row.appendChild(dataCell);
            dataCell.textContent = `${book[key]}`;
        }
     }


submitButton.addEventListener('click', () => {
    const newBook = new Book(bookNameInput.value, authorInput.value, pagesInput.value, readInput.value);
    addBookToLibrary(newBook); 
    addBookToTable(newBook);
    bookNameInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.value = "";
})



