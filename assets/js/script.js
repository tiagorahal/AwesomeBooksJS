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
      this.html.push(`<div class='book d-flex col-12 p-2'><div class='d-flex col-9 col-md-10 text-container'><p class='book-title m-0'>${key} by</p><p class='book-author m-0'>&nbsp;${value}</p></div><button class='remove offset-md-1' onclick="book.removeBooks('${key}')">Remove</button></div>`);
    });
    document.getElementById('book-list').innerHTML = this.html.join(' ');
  }

  removeBooks(i) {
    localStorage.removeItem(i);
    this.bookArray = Object.entries(window.localStorage);
    window.location.reload();
  }

  navList() {    
    document.getElementById('add-container').style.display = "none";
    document.getElementById('contact-container').style.display = "none";
    document.getElementById('list-container').style.display = "block";
  }

  navAdd() {    
    document.getElementById('contact-container').style.display = "none";
    document.getElementById('list-container').style.display = "none";
    document.getElementById('add-container').style.display = "block";
  }

  navContact() {    
    document.getElementById('add-container').style.display = "none";
    document.getElementById('list-container').style.display = "none";
    document.getElementById('contact-container').style.display = "block";
  }
}

const book = new Book();
book.display();

const timenow = luxon.DateTime.now();

document.getElementById('time-tag-now').innerHTML= timenow.toLocaleString({ month: 'long', day: 'numeric', year: 'numeric', minute: '2-digit', hour: 'numeric', second:'numeric' });