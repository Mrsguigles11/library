
const table = document.querySelector(".table");
const submitButton = document.querySelector(".submit_button");
const bookNameInput = document.querySelector("#book_name")
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readYesOption = document.querySelector("#yes");
const readNoOption = document.querySelector("#no");

let myLibrary = [];

class Book {

    constructor(title, author, pages, read, index) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.index = index;
    }

    toggleRead() {
        if (this.read === "Yes") {
            this.read = "No";
        }
        else {
            this.read = "Yes";
        }
    }
}


function addBookToLibrary (book) {
    myLibrary.push(book);
}

function removeBookFromLibrary (index) {
    myLibrary.splice(index, 1);
}

function addBookToTable (book) {
    let row = document.createElement("tr");
    table.appendChild(row);
    let deleteButton = document.createElement("img");
    deleteButton.setAttribute("src", "./img/delete.svg");
    deleteButton.setAttribute("class", "delete_button");
    deleteButton.onclick = function () { 
        row.remove();
        removeBookFromLibrary(book.index);};
    let toggleButton = document.createElement("img");
    toggleButton.setAttribute("src", "./img/swap-horizontal.svg");
    toggleButton.setAttribute("class", "toggle_button");
    for (const key in book) {
        if (key === "read") {
            let dataCell = document.createElement("td");
            dataCell.setAttribute("class", "read_td");
            row.appendChild(dataCell);
            dataCell.textContent = `${book[key]}`;
            dataCell.appendChild(toggleButton);
            dataCell.appendChild(deleteButton);
            toggleButton.onclick = function () { 
                book.toggleRead();
                dataCell.textContent = `${book[key]}`;
                dataCell.appendChild(toggleButton);
                dataCell.appendChild(deleteButton);};
            }
        else if ((key !== "index") && (key !== "toggleRead")) {
            let dataCell = document.createElement("td");
            row.appendChild(dataCell);
            dataCell.textContent = `${book[key]}`; }
        }
     }

submitButton.addEventListener('click', () => {
    let readValue = "";
    if (readYesOption.checked === true) {
        readValue = "Yes";
    }
    else {
        readValue = "No";
    }

    const newBook = new Book(bookNameInput.value, authorInput.value, pagesInput.value, readValue, myLibrary.length);
    addBookToLibrary(newBook); 
    addBookToTable(newBook);
    bookNameInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readYesOption.checked = true;
    readNoOption.checked = false;
})


