let bookArray = [];


function addBooks() {
  let bookName = document.getElementById('name-book').value;
  let bookAuthor = document.getElementById('author-book').value;
  let bookObject = {name: bookName , author: bookAuthor};
  
  bookArray.push(bookObject);
  console.log(bookArray);
}



