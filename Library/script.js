const removeButtons = document.querySelectorAll('.remove-button');

removeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const parent = button.parentElement
        parent.remove()
    });
});

const updateReadStatus = document.querySelectorAll('.button-status');

updateReadStatus.forEach(button => {
    button.addEventListener('click', function() {
        const parentContainer = button.parentElement;
        const readStatus = parentContainer.querySelector('.status');

        if (readStatus.textContent === 'Status: Read') {
            readStatus.textContent = 'Status: Unread'
        } else if (readStatus.textContent === 'Status: Unread') {
            readStatus.textContent = 'Status: Read'
        }
    })
});

/*Clicking the add button to allow user to add a book */
const addButton = document.getElementById('add');
const newBook = document.querySelector('.add-new-book');
const exit = document.querySelector('.exit');

addButton.addEventListener('click', function () {
    newBook.style.display = 'block';
});

/*When clicking on the exit button the add book section disappears */
exit.addEventListener('click', function () {
    newBook.style.display = 'none';
});

/* add in here when user clicks read or unread button to unhide and update the value on the page */
const readButton = document.getElementById('Read');
const unReadButton = document.getElementById('Unread');
const readSection = document.getElementById('read-form-group');
const readValue = document.getElementById('read');

readButton.addEventListener('click', function () {
    readSection.style.display = 'block';
    readValue.value = 'Read';
});

unReadButton.addEventListener('click', function () {
    readSection.style.display = 'block';
    readValue.value = 'Unread';
});

/*
user fills the details in
clicks add 
and it becomes a new card on the browser */
const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

const add = document.getElementById('Add');
add.addEventListener('click', addBookToLibrary);

function addBookToLibrary() {
    const titleValue = document.getElementById('title2').value;
    const authorValue = document.getElementById('author2').value;
    const pagesValue = document.getElementById('pages2').value;
    const readLabelValue = document.getElementById('read').value;

    const newBook = new Book(titleValue, authorValue, pagesValue, readLabelValue);

    myLibrary.push(newBook);

    console.log(myLibrary)
}




