let bookArray = [];


function addBooks() {
  let bookName = document.getElementById('name-book').value;
  let bookAuthor = document.getElementById('author-book').value;
  localStorage.setItem(bookName, bookAuthor)
}

myStorage = window.localStorage;

alert(myStorage)

