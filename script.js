
const table = document.querySelector(".table");
const submitButton = document.querySelector(".submit_button");
const bookNameInput = document.querySelector("#book_name")
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readYesOption = document.querySelector("#yes");
const readNoOption = document.querySelector("#no");

let myLibrary = [];

function Book(title, author, pages, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
}

Book.prototype.toggleRead = function (book) {
    if (book.read === "Yes") {
        book.read = "No";
    }
    else {
        book.read = "Yes";
    }
    console.log(myLibrary);
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
    for (const key in book) {
        if (key === "read") {
            let dataCell = document.createElement("td");
            row.appendChild(dataCell);
            dataCell.textContent = `${book[key]}`;
            let toggleButton = document.createElement("button");
            toggleButton.textContent = "Toggle";
            dataCell.appendChild(toggleButton);
            toggleButton.onclick = function () {
                book.toggleRead(book); }
            }
        else if ((key !== "index") && (key !== "toggleRead")) {
            let dataCell = document.createElement("td");
            row.appendChild(dataCell);
            dataCell.textContent = `${book[key]}`; }
        }
    let dataCell = document.createElement("td");
    dataCell.setAttribute("class", "delete_td");
    row.appendChild(dataCell);
    let deleteButton = document.createElement("img");
    
    deleteButton.setAttribute("src", "./img/delete.svg");
    deleteButton.setAttribute("class", "delete_button");
    deleteButton.onclick = function () { 
        row.remove();
        removeBookFromLibrary(book.index);};
    dataCell.appendChild(deleteButton);
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



