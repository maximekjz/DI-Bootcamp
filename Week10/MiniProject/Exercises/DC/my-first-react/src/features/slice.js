import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    tasks: [
      { id: 1, task: "study", category:'education', progress: "100%", date: '01/08/2024'},
      { id: 2, task: "clean", category:'home', progress: "75%", date: '02/08/2024'},
      { id: 3, task: "read", category:'leisure', progress: "50%", date: '03/08/2024'},
      { id: 4, task: "play", category:'leisure', progress: "25%", date: '01/08/2024'},
      { id: 5, task: "cook", category:'home', progress: "0%", date: '03/08/2024'},
    ],
    categories:['education', 'home', 'leisure']
  };
  

  export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
      addTask: (state, action) => {
        state.tasks.push({
          id: nanoid(),
          task: action.payload.task,
          progress: action.payload.progress,
          date: action.payload.date,
          category: action.payload.category,
        });
      },
      removeTask: (state, action) => {
        const id = action.payload;
        state.tasks = state.tasks.filter((task) => task.id !== id);
      },
      toggleTask: (state, action) => {
        const task = state.tasks.find((task) => task.id === action.payload);
        if (task) {
          task.completed = !task.completed;
        }
      },
      editTask: (state, action) => {
        const { id, task, category, progress } = action.payload;
        const existingTask = state.tasks.find((task) => task.id === id);
        if (existingTask) {
          existingTask.task = task;
          existingTask.category = category
          existingTask.progress = progress
        }
      },
      addCategory: (state, action) => {
        if (!state.categories.includes(action.payload)) {
          state.categories.push(action.payload);
        }
      },
      removeCategory: (state, action) => {
        state.categories = state.categories.filter((category) => category !== action.payload);
      },
      editCategory(state, action) {
        const { oldCategory, newCategory } = action.payload;
        const index = state.categories.indexOf(oldCategory);
        if (index !== -1) {
          state.categories[index] = newCategory;
        }
      },
    },
  })
  
  export const {
    addTask,
    toggleTask,
    removeTask,
    editTask,
    addCategory,
    removeCategory,
    editCategory
  } = tasksSlice.actions;
  
  export default tasksSlice.reducer;