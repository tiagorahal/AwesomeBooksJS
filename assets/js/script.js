class Book {
  constructor() {
    this.bookArray = [];
    this.bookArray = Object.entries(window.localStorage);
    this.html = [];
  }

  addBooks() {
    this.bookName = document.getElementById('name-book').value;
    this.bookAuthor = document.getElementById('author-book').value;
    localStorage.setItem(this.bookName, this.bookAuthor);
  }

  display() {
    this.bookArray.forEach(([key, value]) => {
      this.html.push(`<div class='book'><p class='book-title'>${key}</p><p class='book-author'>${value}</p><button class='remove'>Remove</button><br><br></div>`);
    });
    document.getElementById('book-list').innerHTML = this.html.join(' ');
  }


}

const book = new Book();
book.display();

function removeBooks(i) {
  const title = i.firstChild.innerText;
  Object.fromEntries(bookArray);
  localStorage.removeItem(title);
  bookArray = Object.entries(window.localStorage);
  i.remove();
}



// bookArray.forEach(([key, value]) => {
//   html.push(`<div class='book'><p class='book-title'>${key}</p><p class='book-author'>${value}</p><button class='remove'>Remove</button><br><br></div>`);
// });

// document.getElementById('book-list').innerHTML = html.join(' ');

for (let i = 0; i < document.getElementsByClassName('remove').length; i += 1) {
  const bookTitle = document.getElementsByClassName('remove')[i].parentElement;
  document.getElementsByClassName('remove')[i].addEventListener('click', () => { removeBooks(bookTitle); });
}


