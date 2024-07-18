const express = require("express")
const app = express();

let books = [
    { id: 1, title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling', publishedYear: 1997 },
    { id: 2, title: 'The Plot Against America', author: 'Philip Roth', publishedYear: 2004 },
    { id: 3, title: 'Zadig', author: 'Voltaire', publishedYear: 1748 },
    { id: 4, title: 'Bel Ami', author: 'Guy de Maupassant', publishedYear: 1885 }
];

app.listen(5500, () => {
    console.log('The server is running on port 5500');
});

app.get("/books", (req, res) => {
    console.log("Request received for /book-api/books");
    res.json(books);
});

app.get("/books/:id", (req, res) =>{
    const {id} = req.params;
    const id_book = books.find((item)=> item.id == id);
    if (!id_book) return res.status(404).send('Book not found')
    res.status(202).json(id_book)
})

