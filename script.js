
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary (book) {
    myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkein", "395", "No");

addBookToLibrary(theHobbit);

console.log(myLibrary);