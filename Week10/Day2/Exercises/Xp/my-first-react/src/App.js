import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { todoReducer } from './redux/reducer'; 
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const store = createStore(todoReducer);

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  </Provider>
);

export default App;
