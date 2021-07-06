class Book {
  constructor() {
    this.bookarray = Object.entries(window.localStorage);
    this.html = [];
  }

  addBooks() {
    this.bookName = document.getElementById('name-book').value;
    this.bookAuthor = document.getElementById('author-book').value;
    localStorage.setItem(this.bookName, this.bookAuthor);
  }

  

}

const book = new Book();

// let bookArray = [];
// const html = [];
// bookArray = Object.entries(window.localStorage);

// eslint-disable-next-line no-unused-vars
// function addBooks() {
//   const bookName = document.getElementById('name-book').value;
//   const bookAuthor = document.getElementById('author-book').value;
//   localStorage.setItem(bookName, bookAuthor);
// }

function removeBooks(i) {
  const title = i.firstChild.innerText;
  Object.fromEntries(bookArray);
  localStorage.removeItem(title);
  bookArray = Object.entries(window.localStorage);
  i.remove();
}



bookArray.forEach(([key, value]) => {
  html.push(`<div class='book'><p class='book-title'>${key}</p><p class='book-author'>${value}</p><button class='remove'>Remove</button><br><br></div>`);
});

document.getElementById('book-list').innerHTML = html.join(' ');

for (let i = 0; i < document.getElementsByClassName('remove').length; i += 1) {
  const bookTitle = document.getElementsByClassName('remove')[i].parentElement;
  document.getElementsByClassName('remove')[i].addEventListener('click', () => { removeBooks(bookTitle); });
}


