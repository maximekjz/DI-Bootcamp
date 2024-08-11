import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/slice'

export default configureStore({
    reducer:{
       books: booksReducer, 
    }
})

