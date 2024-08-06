import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, toggleTask } from './manageSlice';
import { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Manage = () => {
  const tasks = useSelector((state) => state.tasksReducer.tasks);
  const dispatch = useDispatch();
  
  const taskRef = useRef();
  const idRemoveRef = useRef();
  const idToggleRef = useRef();
  const [selectedDate, setSelectedDate] = useState(null);
  const [filterDate, setFilterDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const filteredTasks = filterDate ? tasks.filter((task) => new Date(task.date).toDateString() === filterDate.toDateString()) : tasks;
  const filteredTasksPeriod = tasks.filter((task) => {
    const taskDate = new Date(task.date);
    return (!startDate || taskDate >= startDate) && (!endDate || taskDate <= endDate);
});

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
        <button
          onClick={() => {
            const task = taskRef.current?.value;
            if (task && selectedDate) {
              dispatch(addTask({
                task: task,
                date: selectedDate.toISOString(), 
              }));
              taskRef.current.value = ''; 
              setSelectedDate(null); 
            }
          }}
        >
          Add Task
        </button>
        <br />
      </div>
      <div>
        <h2>Modify your list: </h2><br/>
        <input placeholder="id to remove" ref={idRemoveRef} />
        <button
          onClick={() => {
            const id = Number(idRemoveRef.current?.value);
            if (!isNaN(id)) {
              console.log('Removing task with id:', id); 
              dispatch(removeTask(id));
              idRemoveRef.current.value = ''; 
            }
          }}
        >
          Remove Task
        </button>
        <br />
      </div>
      <div>
        <input placeholder="id to complete" ref={idToggleRef} />
        <button
          onClick={() => {
            const id = Number(idToggleRef.current?.value);
            if (!isNaN(id)) {
              console.log('Toggling task with id:', id); 
              dispatch(toggleTask(id));
              idToggleRef.current.value = ''; 
            }
          }}
        >
          Toggle Task
        </button>
        <br />
      </div>
      <div>
        <h2>Your task list: </h2>
        <h5>Search your tasks by date:</h5>
        <DatePicker
          selected={filterDate}
          onChange={(date) => setFilterDate(date)}
          placeholderText="Select a date to filter by date"
        />
        {filteredTasks.map((item) => {
          return (
            <div key={item.id}>
              <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                {item.id}. {item.task} ({item.date ? new Date(item.date).toLocaleDateString() : 'No date'})
              </span>
              {item.completed ? ' ✔' : ' ❌'}
            </div>
          );
        })}
      </div>
      <div>
      <h5>Search your tasks by period:</h5>

      <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Select a begginning date"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          placeholderText="Select an ending date"
        />
        {filteredTasksPeriod.map((item) => {
          return (
            <div key={item.id}>
              <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                {item.id}. {item.task} ({item.date ? new Date(item.date).toLocaleDateString() : 'No date'})
              </span>
              {item.completed ? ' ✔' : ' ❌'}
            </div>
          );
        })}
        </div>
    </>
  );
};

export default Manage;
