import {createStore} from 'redux'
import { todoReducer } from './reducer'


const store = createStore(todoReducer, initialState)

export default store