let bookArray = [];
let myStorage = window.localStorage;
bookArray = Object.entries(myStorage);

function addBooks() {
  let bookName = document.getElementById('name-book').value;
  let bookAuthor = document.getElementById('author-book').value;
  localStorage.setItem(bookName, bookAuthor)

}

function removeBooks(book) {
  localStorage.removeItem(book);
}

console.log(bookArray);
