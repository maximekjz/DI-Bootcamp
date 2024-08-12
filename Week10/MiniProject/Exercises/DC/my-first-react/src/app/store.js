import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/slice'

export default configureStore({
    reducer:{
       tasks: tasksReducer, 
    }
})

