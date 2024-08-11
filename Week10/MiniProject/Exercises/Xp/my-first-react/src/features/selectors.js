export const selectGenre = (state) => state.books.genre;

export const selectBooks = (state) => {
    const genre = selectGenre(state)
    const books = state.books.books

    if(genre) {
        return books.filter(book => book.genre === genre)
    }

    return books 
}

export const selectAllGenres = (state) => {
    const books = state.books.books;
    return [...new Set(books.map(book => book.genre))];
}