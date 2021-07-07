class Book {
  constructor() {
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
      this.html.push(`<div class='book'><p class='book-title m-0'>${key}</p><p class='book-author m-0'>${value}</p><button class='remove' onclick="book.removeBooks('${key}')">Remove</button><br><br></div>`);
    });
    document.getElementById('book-list').innerHTML = this.html.join(' ');
  }

  removeBooks(i) {
    localStorage.removeItem(i);
    this.bookArray = Object.entries(window.localStorage);
    window.location.reload();
  }
}

const book = new Book();
book.display();
