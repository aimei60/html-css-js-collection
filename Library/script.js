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

function addBookToLibrary() {
    const titleValue = document.getElementById('title2').value;
    const authorValue = document.getElementById('author2').value;
    const pagesValue = document.getElementById('pages2').value;
    const readLabelValue = document.getElementById('read').value;

    const newBook = new Book(titleValue, authorValue, pagesValue, readLabelValue);

    myLibrary.push(newBook);

    console.log(myLibrary)
}
 /*it pushes to the array now need to connect js to html and css so user can push to array/web browser */

function connectLibrary() {
    const bookContainer = document.createElement("div");
    bookContainer.className = "book-container";

    //Title
    const titleDiv = document.createElement("div");
    titleDiv.className = "title";
    const titleValue = document.getElementById('title2').value;
    titleDiv.textContent = `Title: ${titleValue}`

    //Author
    const authorDiv = document.createElement("div");
    authorDiv.className = "author";
    const authorValue = document.getElementById('author2').value;
    authorDiv.textContent = `Author: ${authorValue}`

    //Pages
    const pagesDiv = document.createElement("div");
    pagesDiv.className = "pages";
    const pagesValue = document.getElementById('pages2').value;
    pagesDiv.textContent = `Pages: ${pagesValue}`

    // Read Status
    const statusDiv = document.createElement("div");
    statusDiv.className = "status";
    const readLabelValue = document.getElementById('read').value;
    statusDiv.textContent = `Read Status: ${readLabelValue}`
    
    //Read status button
    const readStatusButton = document.createElement("button");
    readStatusButton.className = "button-status";
    readStatusButton.textContent = "Update Read Status"

    //Remove button
    const removeButton = document.createElement("button");
    removeButton.className = "remove-button";
    removeButton.textContent = "Remove"

    //Update Read Status button add event listener
    readStatusButton.addEventListener('click', () => {
        if (statusDiv.textContent === 'Read Status: Read') {
            statusDiv.textContent = 'Read Status: Unread';
        } else {
            statusDiv.textContent = 'Read Status: Read';
        }
    });

    // Remove button add event listener
    removeButton.addEventListener('click', () => {
        bookContainer.remove();
    });

     /* append all of the above */
     bookContainer.append(titleDiv);
     bookContainer.append(authorDiv);
     bookContainer.append(pagesDiv);
     bookContainer.append(statusDiv);
     bookContainer.append(readStatusButton);
     bookContainer.append(removeButton);
 
     const bookSection = document.querySelector('.book-section');
     bookSection.append(bookContainer);

}

add.addEventListener('click', addBookToLibrary);
add.addEventListener('click', connectLibrary)