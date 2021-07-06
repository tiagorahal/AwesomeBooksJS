let bookArray = [];
let html =[];
let myStorage = window.localStorage;
bookArray = Object.entries(myStorage);

function addBooks() {
  let bookName = document.getElementById('name-book').value;
  let bookAuthor = document.getElementById('author-book').value;
  localStorage.setItem(bookName, bookAuthor)
}

function removeBooks(i) {
  let title = i.firstChild.innerText;
  console.log(title);
  Object.fromEntries(bookArray);
  localStorage.removeItem(title);
  bookArray = Object.entries(myStorage);
  console.log(html);
  i.remove();
}

const result = bookArray.forEach(([key, value]) => {
  html.push("<div class='book'><p class='book-title'>" + key + "</p><p class='book-author'>" + value + "</p>" + "<button class='remove'>Remove</button><br><br></div>") });
  
document.getElementById('book-list').innerHTML = html.join(" ");

for (let i = 0; i < document.getElementsByClassName('remove').length ; i++) {
  let bookTitle = document.getElementsByClassName('remove')[i].parentElement;
  document.getElementsByClassName('remove')[i].addEventListener('click', function() { removeBooks(bookTitle); } );
}
