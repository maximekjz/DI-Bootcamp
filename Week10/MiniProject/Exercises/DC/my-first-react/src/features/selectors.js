export const selectTasks = (state) => state.tasks.tasks;

export const selectTasksByDate = (state, date) => 
  state.tasks.tasks.filter(task => new Date(task.date).toDateString() === date.toDateString());

export const selectTasksByPeriod = (state, startDate, endDate) =>
  state.tasks.tasks.filter(task => {
    const taskDate = new Date(task.date);
    return (!startDate || taskDate >= startDate) && (!endDate || taskDate <= endDate);
  });

export const selectTasksByCategory = (state, category) => 
    state.tasks.tasks.filter(task => task.category === category);

export const selectTasksByProgress = (state, progress) => 
    state.tasks.tasks.filter(task => task.progress === progress);
  