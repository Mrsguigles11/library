
const table = document.querySelector(".table");
const submitButton = document.querySelector(".submit_button");
const bookNameInput = document.querySelector("#book_name")
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readYesOption = document.querySelector("#yes");
const readNoOption = document.querySelector("#no");

class Book {

    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
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


function addBookToTable (book) {
    let row = document.createElement("tr");
    table.appendChild(row);
    let deleteButton = document.createElement("img");
    deleteButton.setAttribute("src", "./img/delete.svg");
    deleteButton.setAttribute("class", "delete_button");
    deleteButton.onclick = function () { 
        row.remove();};
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
        else if (key !== "index") {
            let dataCell = document.createElement("td");
            row.appendChild(dataCell);
            dataCell.textContent = `${book[key]}`; }
        }
     }


submitButton.addEventListener('click', (event) => {

    if (bookNameInput.validity.valueMissing) {
        bookNameInput.setCustomValidity("Please enter a book title!");
        return
    }
    else {
        bookNameInput.setCustomValidity("");
        }


    if (authorInput.validity.valueMissing) {
        authorInput.setCustomValidity("Please enter an author!");
        return
    }
    else {
        authorInput.setCustomValidity("");
        }
        
    
    if (pagesInput.validity.valueMissing) {
        pagesInput.setCustomValidity("Please enter a number!")
        return
    }
    else if (pagesInput.validity.rangeUnderflow) {
        pagesInput.setCustomValidity("Must be more than 10 pages!")
        return
    }
    else {
        pagesInput.setCustomValidity("");
        }

    let readValue = "";
    if (readYesOption.checked === true) {
        readValue = "Yes";
    }
    else {
        readValue = "No";
    }

    const newBook = new Book(bookNameInput.value, authorInput.value, pagesInput.value, readValue); 
    addBookToTable(newBook);
    bookNameInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readYesOption.checked = true;
    readNoOption.checked = false;
})
