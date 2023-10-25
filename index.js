const libraryContainer = document.querySelector('.libraryContainer');
const newEntryBtn = document.querySelector('.newEntryBtn');
let myLibrary = [];

// create a function to create  a prototype for books to follow

function Book(name, author, pages){
    this.name = name;
    this.author = author;
    this.pages = pages;
}

const robinHood = new Book('Robin Hood', 'Howard Plye', '984');
const starWars = new Book('Heir to the Empire', 'Timothy Zahn', '434')
const divergent =  new Book('Divergent', 'Veronica Roth', '487')

myLibrary.push(robinHood);
myLibrary.push(divergent);
myLibrary.push(starWars);

myLibrary.forEach((book) => {
    const card = document.createElement('div');
    card.classList.add('card')
    libraryContainer.append(card);
    const title = document.createElement('h1');
    title.textContent = `Title: ${book.name}`;
    const author = document.createElement('h2');
    author.textContent = `Author: ${book.author}`;
    const pageNumber = document.createElement('h2')
    pageNumber.textContent = `Pages: ${book.pages}`;
    card.append(title);
    card.append(author);
    card.append(pageNumber);
})

// create a function that will add a book to a library

// create a function that will remove the hidden class on the popup 