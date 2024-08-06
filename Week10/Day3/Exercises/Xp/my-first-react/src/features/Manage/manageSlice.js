import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, task: 'clean', completed: false, date: '01/08/2024'  },
    { id: 2, task: 'play', completed: false, date: '01/08/2024' },
    { id: 3, task: 'eat', completed: false, date: '01/08/2024' },
  ],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: nanoid(),
        task: action.payload.task,
        completed: false,
        date: action.payload.date
      });
    },
    removeTask: (state, action) => {
        const id = action.payload
        console.log('ID to remove', id );
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, toggleTask, removeTask } = tasksSlice.actions;

export default tasksSlice.reducer;
