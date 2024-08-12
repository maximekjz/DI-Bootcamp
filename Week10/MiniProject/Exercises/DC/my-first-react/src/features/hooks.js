import { useSelector, useDispatch } from 'react-redux';
import { addTask, editTask, removeTask, toggleTask, addCategory, removeCategory, editCategory } from './slice';
import { selectTasks, selectTasksByDate, selectTasksByPeriod, selectTasksByCategory, selectTasksByProgress } from './selectors';

export const useTasks = () => {
  return useSelector(selectTasks);
};

export const useTasksByDate = (date) => {
  return useSelector((state) => selectTasksByDate(state, date));
};

export const useTasksByPeriod = (startDate, endDate) => {
  return useSelector((state) => selectTasksByPeriod(state, startDate, endDate));
};

export const useTasksByCategory = (category) => {
    return useSelector((state) => selectTasksByCategory(state, category));
  };

  export const useTasksByProgression = (progress) => {
    return useSelector((state) => selectTasksByProgress(state, progress));
  };

export const useAddTask = () => {
  const dispatch = useDispatch();
  return (task) => dispatch(addTask(task));
};

export const useEditTask = () => {
  const dispatch = useDispatch();
  return (task) => dispatch(editTask(task));
};

export const useRemoveTask = () => {
  const dispatch = useDispatch();
  return (id) => dispatch(removeTask(id));
};

export const useToggleTask = () => {
  const dispatch = useDispatch();
  return (id) => dispatch(toggleTask(id));
};

export const useCategories = () => {
    return useSelector((state) => state.tasks.categories);
  };
  
  export const useAddCategory = () => {
    const dispatch = useDispatch();
    return (category) => dispatch(addCategory(category));
  };
  
  export const useRemoveCategory = () => {
    const dispatch = useDispatch();
    return (category) => dispatch(removeCategory(category));
  };
  
  export const useEditCategory = () => {
    const dispatch = useDispatch();
    return ({ oldCategory, newCategory }) => dispatch(editCategory({ oldCategory, newCategory }));
  };

  
