import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: 1, task: 'clean', completed: false },
    { id: 2, task: 'play', completed: false },
    { id: 3, task: 'eat', completed: false },
  ],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        task: action.payload.task,
        completed: false,
      });
    },
    removeTodo: (state, action) => {
        const id = action.payload
        console.log('ID to remove', id );
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    toggleTodo: (state, action) => {
      const task = state.todos.find((todo) => todo.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
