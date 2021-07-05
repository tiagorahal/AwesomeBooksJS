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
  bookArray = Object.entries(myStorage);
}

let html =[]
let result = bookArray.forEach(([key, value]) => {
  html.push("<p> Book:\n" + key + "<br>Author:\n" + value + "</p>" + "<button id='remove-element'>Remove</button><br><br>") });


document.getElementById('book-list').innerHTML = html.join(" ");
