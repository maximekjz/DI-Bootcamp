import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { taskReducer } from './redux/reducer'; 
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const store = createStore(taskReducer);

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Task List</h1>
      <TaskForm />
      <TaskList />
    </div>
  </Provider>
);

export default App;
