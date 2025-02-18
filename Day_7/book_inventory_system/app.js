import fs from 'fs';
fs.readFile('books.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    
    const lines = data.trim().split('\n');
    const books = lines.slice(1).map(line => {
        const [isbn, title, author, genre, copies] = line.split(',').map(item => item.trim());
        return { isbn, title, author, genre, copies: parseInt(copies) };
    });

    const action = process.argv[2];
    const param = process.argv[3];

    switch (action) {
        case 'list':
            listBooks(param, books);
            break;
        case 'check-availability':
            checkAvailability(param, books);
            break;
        case 'most-books-author':
            findAuthorWithMostBooks(books);
            break;
        default:
            console.log('Invalid command. Use "list <genre>", "check-availability <title>", or "most-books-author".');
    }
});

function listBooks(genre, books) {
    const filteredBooks = books.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
    if (filteredBooks.length === 0) {
        console.log(`No books found in ${genre} genre.`);
    } else {
        console.log(`Books in ${genre} genre:`);
        filteredBooks.forEach(book => console.log(`${book.title} by ${book.author} (ISBN: ${book.isbn}, Copies: ${book.copies})`));
    }
}

function checkAvailability(title, books) {
    const book = books.find(book => book.title.toLowerCase() === title.toLowerCase());
    if (book) {
        console.log(`${book.title} is available with ${book.copies} copies.`);
    } else {
        console.log(`${title} is not available in the inventory.`);
    }
}

function findAuthorWithMostBooks(books) {
    const authorCounts = books.reduce((acc, book) => {
        acc[book.author] = (acc[book.author] || 0) + 1;
        return acc;
    }, {});
    
    const mostBooksAuthor = Object.keys(authorCounts).reduce((a, b) => authorCounts[a] > authorCounts[b] ? a : b);
    console.log(`Author with the most books: ${mostBooksAuthor} (${authorCounts[mostBooksAuthor]} books)`);
}
