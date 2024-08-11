import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [
      { id: 1, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre: "Fantasy" },
      { id: 2, title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling", genre: "Fantasy" },
      { id: 3, title: "Kane and Abel", author: "Jeffrey Archer", genre: "Fiction" },
      { id: 4, title: "The Prodigal Daughter", author: "Jeffrey Archer", genre: "Fiction" },
      { id: 5, title: "Harry Potter and the Prisoner of Azkaban", author: "J.K. Rowling", genre: "Fantasy" },
    ],
    genre:''
  };
  
  export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
      filterGenre: (state, action) => {
        state.genre = action.payload
      }
    }  
  }
)

export const {filterGenre} = booksSlice.actions;
export default booksSlice.reducer;
