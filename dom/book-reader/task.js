const book = document.getElementsByClassName('book')[0];
const books = document.getElementsByClassName('book__control')[0];
const booksOptions = Array.from(books.children);
console.log(books, booksOptions);
const changeOptions = function(e) {
    e.preventDefault();
    for (let item of booksOptions) {
        item.classList.remove('font-size_active');
        }
    if (e.target.classList.contains('font-size_small')) {
        e.target.classList.add('font-size_active');
        book.classList.add('book_fs-small');
    } else if (e.target.classList.contains('font-size_big')) {
        e.target.classList.add('font-size_active');
        book.classList.add('book_fs-big');
    } else {
        e.target.classList.add('font-size_active');
        book.className = 'book';
    }
};

for(let options of booksOptions) {
    console.log(options);
    options.addEventListener('click', changeOptions);
}