const express = require("express");
const app = express();
app.use(express.json());


app.listen(5000, () => {
    console.log("run on 5000");
  });


let books = [
   { id: 1, title: 'Harry Potter and the Philosopher Stone', author: 'J.K. Rowling', publishedYear: 1997 },
   { id: 2, title: 'The Plot Against America', author: 'Philip Roth', publishedYear: 2004 },
   { id: 3, title: 'Zadig', author: 'Voltaire', publishedYear: 1748 },
   { id: 4, title: 'Bel Ami', author: 'Guy de Maupassant', publishedYear: 1885 }
];


app.get('/api/books', (req, res) => {
    res.json(books)
})


app.get('/api/books/:bookId', (req, res) => {
    const {bookId} = req.params
    const id_book = books.findIndex((item) => item.id == bookId)
    if(!id_book) return res.status(404).json({ message: "Book not found" });
    res.json({ data: books[id_book], status: "202" })
})

app.post('/api/books', (req, res) => {
    const {title, author, publishedYear} = req.body
    if (!title || !author || !publishedYear) {
        return res.status(400).json({ message: "Title, author and published year are required" });
    }
    const new_book = {
        id: books.length +1,
        title : title,
        author: author,
        publishedYear : publishedYear
    }
    books.push(new_book)
    res.json({books, status:"201 created"})
})

