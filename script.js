
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

function addBooksToTable () {
    for (const book of myLibrary) {
        let row = document.createElement("tr");
        table.appendChild(row);
        for (const key in book) {
            let dataCell = document.createElement("td");
            row.appendChild(dataCell);
            dataCell.textContent = `${book[key]}`;
        }
    } }
    

const theHobbit = new Book("The Hobbit", "J.R.R Tolkein", "395", "No");
const pathOfDestruction = new Book("Path of Destruction", "Drew Karpyshyn", "450", "Yes");

addBookToLibrary(theHobbit);
addBookToLibrary(pathOfDestruction);



addBooksToTable();

