import React, { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { 
  useTasks, 
  useTasksByDate, 
  useTasksByPeriod, 
  useAddTask, 
  useEditTask, 
  useRemoveTask, 
  useToggleTask,
  useCategories,
  useAddCategory,
  useRemoveCategory,
  useEditCategory,
  useTasksByCategory,
  useTasksByProgression,
 } from './hooks';

const Manage = () => {
  const tasks = useTasks();
  const categories = useCategories();
  const addTask = useAddTask();
  const editTask = useEditTask();
  const removeTask = useRemoveTask();
  const toggleTask = useToggleTask();
  const addCategory = useAddCategory();
  const removeCategory = useRemoveCategory();
  const editCategory = useEditCategory();
  
  const taskRef = useRef();
  const taskEditRef = useRef();
  const idRemoveRef = useRef();
  const idEditRef = useRef();
  const idToggleRef = useRef();
  const [selectedDate, setSelectedDate] = useState(null);
  const [filterDate, setFilterDate] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedProgress, setSelectedProgress] = useState('');
  
  
  const filteredTasks = filterDate 
  ? tasks.filter((task) => {
      const taskDate = task.date ? new Date(task.date) : null;
      return taskDate && taskDate.toDateString() === filterDate.toDateString();
    })
  : tasks;


const filteredTasksPeriod = tasks.filter((task) => {
  const taskDate = task.date ? new Date(task.date) : null;
  return (
    taskDate &&
    (!startDate || taskDate >= startDate) &&
    (!endDate || taskDate <= endDate)
  );
});

const filteredTasksByCategory = selectedCategory
? filteredTasksPeriod.filter((task) => task.category === selectedCategory)
: filteredTasksPeriod;


const filteredTasksByProgress = selectedProgress
? filteredTasksPeriod.filter((task) => task.progress === selectedProgress)
: filteredTasksPeriod;

const getEmojiProgress = (progress) => {
  if (progress === '100%') return '✅✅✅✅';
  if (progress === '75%') return '✅✅✅🔲';
  if (progress === '50%') return '✅✅🔲🔲';
  if (progress === '25%') return '✅🔲🔲🔲';
  if (progress === '0%') return '❌❌❌❌';
  return '';
};


  return (
    <>
      <h2>Add a task to your list: </h2>
      <div>
        <input placeholder="Task" ref={taskRef} />
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Select a date"
        />
        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            const task = taskRef.current?.value;
            if (task && selectedDate) {
              addTask({ task, date: selectedDate.toISOString() });
              taskRef.current.value = ''; 
              setSelectedDate(null); 
            }
          }}
        >
          Add Task
        </button>
      </div>

      <div>
        <h2>Modify your list: </h2><br/>
        <input placeholder="id to edit" ref={idEditRef} />
        <input placeholder="text to edit" ref={taskEditRef} />
        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select onChange={(e) => setSelectedProgress(e.target.value)} value={selectedProgress}>
          <option value="0%">0%</option>
          <option value="25%">25%</option>
          <option value="50%">50%</option>
          <option value="75%">75%</option>
          <option value="100%">100%</option>
        </select>
        <button
          onClick={() => {
            const task = taskEditRef.current?.value;
            const id = Number(idEditRef.current?.value);
            if (!isNaN(id) && task) {
              editTask({ id, task, category: selectedCategory, progress:selectedProgress });
              idEditRef.current.value = ''; 
              taskEditRef.current.value = ''; 
              setSelectedCategory('');
              setSelectedProgress('0%')
            }
          }}
        >
          Edit Task
        </button>
      </div>

      <div>
        <input placeholder="id to remove" ref={idRemoveRef} />
        <button
          onClick={() => {
            const id = Number(idRemoveRef.current?.value);
            if (!isNaN(id)) {
              removeTask(id);
              idRemoveRef.current.value = ''; 
            }
          }}
        >
          Remove Task
        </button>
      </div>

      <div>
        <input placeholder="id to complete" ref={idToggleRef} />
        <button
          onClick={() => {
            const id = Number(idToggleRef.current?.value);
            if (!isNaN(id)) {
              toggleTask(id);
              idToggleRef.current.value = ''; 
            }
          }}
        >
          Toggle Task
        </button>
      </div>

      <div>
        <h2>Your task list: </h2>
        <h5>Search your tasks by date:</h5>
        <DatePicker
          selected={filterDate}
          onChange={(date) => setFilterDate(date)}
          placeholderText="Select a date to filter by date"
        />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Category</th>
              <th>Date</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
          {filteredTasks.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                  {item.task}
                </td>
                <td>{item.category}</td>
                <td>{item.date ? new Date(item.date).toLocaleDateString() : 'No date'}</td>
                <td>{getEmojiProgress(item.progress)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h5>Search your tasks by period:</h5>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Select a beginning date"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          placeholderText="Select an ending date"
        />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Category</th>
              <th>Date</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasksPeriod.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                  {item.task}
                </td>
                <td>{item.category}</td>
                <td>{item.date ? new Date(item.date).toLocaleDateString() : 'No date'}</td>
                <td>{getEmojiProgress(item.progress)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div>
      <h5>Search your tasks by Category:</h5>
        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Category</th>
              <th>Date</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasksByCategory.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                  {item.task}
                </td>
                <td>{item.category}</td>
                <td>{item.date ? new Date(item.date).toLocaleDateString() : 'No date'}</td>
                <td>{getEmojiProgress(item.progress)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
      <h5>Search your tasks by Progress:</h5>
        <select onChange={(e) => setSelectedProgress(e.target.value)} value={selectedProgress}>
          <option value="">Select a progress</option>
          {categories.map((progress) => (
            <option key={progress} value={progress}>
              {progress}
            </option>
          ))}
        </select>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Category</th>
              <th>Date</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasksByProgress.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                  {item.task}
                </td>
                <td>{item.category}</td>
                <td>{item.date ? new Date(item.date).toLocaleDateString() : 'No date'}</td>
                <td>{getEmojiProgress(item.progress)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  );
};

export default Manage;
