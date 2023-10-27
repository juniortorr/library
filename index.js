const libraryContainer = document.querySelector('.libraryContainer');
const newEntryBtn = document.querySelector('.newEntryBtn');
const submit = document.querySelector('.submit');
const popup = document.querySelector('.popUp');
const closeBtn = document.querySelector('.close');
const form = document.querySelector('form');
const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const emptyCheck = document.querySelectorAll('.emptyCheck');
const checkMark = document.querySelectorAll('.checkmark');
let myLibrary = [];
// create a function to create  a prototype for books to follow

function Book(name, author, pages){
    this.name = name;
    this.author = author;
    this.pages = pages;
}

const daisyJones = new Book('Daisy Jones & the Six', 'Taylor Jenkins Reed', '254')
const robinHood = new Book('Robin Hood', 'Howard Plye', '984');
const starWars = new Book('Heir to the Empire', 'Timothy Zahn', '434')
const divergent =  new Book('Divergent', 'Veronica Roth', '487')

myLibrary.push(daisyJones);
myLibrary.push(robinHood);
myLibrary.push(divergent);
myLibrary.push(starWars);


// create function that will create a card for each book

function createCard(book) {
    const card = document.createElement('div');
    card.classList.add('card')
    libraryContainer.append(card);
    const title = document.createElement('h1');
    title.textContent = `Title: ${book.name}`;
    const author = document.createElement('h2');
    author.textContent = `Author: ${book.author}`;
    const pageNumber = document.createElement('h2')
    pageNumber.textContent = `Pages: ${book.pages}`;
    const readCheck = document.createElement('div');
    const read = document.createElement('h2');
    readCheck.classList.add('readCheck');
    read.textContent = 'Completed:'
    const img1 = document.createElement('img');
    img1.setAttribute('src', 'imgs/emptyCheckbox.png');
    img1.classList.add('emptyCheck');
    const img2 = document.createElement('img');
    img2.setAttribute('src', 'imgs/checkmark.png');
    img2.classList.add('checkmark');
    img2.classList.add('hidden')
    img1.addEventListener('click', () => showCheckMark(img1, img2));
    img2.addEventListener('click', () => showCheckMark(img2, img1));
    readCheck.append(read);
    readCheck.append(img1);
    card.append(title);
    card.append(author); 
    card.append(pageNumber);
    card.append(readCheck);
    readCheck.append(img2)  
}

function showCheckMark (hide, show) {
    hide.classList.add('hidden')
    show.classList.remove('hidden');
}
 
// create a function that will add a book to a library
function addBook(newBook) {
    myLibrary.push(newBook);
    createCard(newBook);
}
// create a function that will remove the hidden class on the popup 

newEntryBtn.addEventListener('click', () => {
    popup.classList.remove('hidden')
})
closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
})

// create a function to toggle checkmark

function toggleCheck() {
    const newChecks = document.querySelectorAll('.emptyCheck')
    const newCheck2 = document.querySelectorAll('.checkmark')
    // newChecks.forEach((check) => {
    //     check.classList.toggle('hidden');
    // })
    // newCheck2.forEach((check) => {
    //     check.classList.toggle('hidden');
    // })
}

// add event listener to submit button 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value);
    addBook(formBook);
    popup.classList.add('hidden');
    console.log(myLibrary)
})

myLibrary.forEach((libraryBook) => {
    createCard(libraryBook)
})


