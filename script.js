
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
            if (key !== "index") {
            let dataCell = document.createElement("td");
            row.appendChild(dataCell);
            dataCell.textContent = `${book[key]}`; }
        }
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("class", "delete_button");
    deleteButton.onclick = function () { 
        row.remove();
        removeBookFromLibrary(book.index);};
    row.appendChild(deleteButton);
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



