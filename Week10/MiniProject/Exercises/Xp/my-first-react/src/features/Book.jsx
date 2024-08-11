import React from "react";
import { selectBooks, selectAllGenres } from "./selectors";
import { useDispatch, useSelector } from "react-redux";
import {filterGenre} from './slice'


const BookList = () => {
    const books = useSelector(selectBooks)
    const dispatch = useDispatch()
    const selectedGenre = useSelector((state) => state.books.genre); 
    const allGenres = useSelector(selectAllGenres); 


    const genres = books.reduce((acc, book) => {
        if (!acc.includes(book.genre)) {
          acc.push(book.genre);
        }
        return acc;
      }, []);

      const handleGenreChange = (e) => {
        const genre = e.target.value;
        dispatch(filterGenre(genre === "-1" ? "" : genre)); 
    };
      
      const renderBooks = books.map((book) => (
        <article key={book.id}>
            <h3>{book.title}</h3>
            <h5>{book.genre}</h5>
        </article>
    ));
    return(
        <>
        <h2>List of books</h2>
        <select onChange={handleGenreChange} value={selectedGenre || "-1"} className="custom-select">
        <option value="-1">Select Genre</option>
            {allGenres.map((genre, index) => (
                <option key={index} value={genre}>
                    {genre}
                </option>
            ))
            }
      </select>
        <div>
            {renderBooks}
        </div>
        </>
    )
}

export default BookList