let bookArray = [];
let myStorage = window.localStorage;

function addBooks() {
  let bookName = document.getElementById('name-book').value;
  let bookAuthor = document.getElementById('author-book').value;
  localStorage.setItem(bookName, bookAuthor)
}

function removeBooks(book) {
  localStorage.removeItem(book);
}

function makeArray() {
  bookArray = Object.entries(myStorage);
  
}

makeArray()

console.log(bookArray);
