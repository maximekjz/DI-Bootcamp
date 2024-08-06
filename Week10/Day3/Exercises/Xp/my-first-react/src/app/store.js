import {configureStore} from "@reduxjs/toolkit"

import todoReducer from '../features/Todo/todoSlice'
import tasksReducer from '../features/Manage/manageSlice'

export default configureStore({
    reducer:{
        todoReducer,
        tasksReducer, 

    }
})
