import {useSelector, useDispatch} from 'react-redux'
import {addTodo, removeTodo, toggleTodo } from './todoSlice'
import {useRef} from 'react'

const Todo = () => {

    const todos = useSelector((state)=>state.todoReducer.todos)

    const dispatch = useDispatch()

    const taskRef = useRef()
    const idRef= useRef()
    const idRef1= useRef()

    return(
        <>
        <h2>Todo List: </h2>
        <div>
            <input placeholder="Task" ref={taskRef}/>
            <button
            onClick={() => {
                const task = taskRef.current?.value;
                if (task) {
                  dispatch(addTodo({
                    task: task,
                  }));
                  taskRef.current.value = ''; 
                }
              }}
        >
          Add Task
        </button><br/>
        </div>
        <div>
        <input placeholder="id to remove" ref={idRef1}/>
            <button
            onClick={() => {
                const id = Number(idRef1.current?.value);
                if (!isNaN(id)) {
                  console.log('Toggling task with id:', id); 
                  dispatch(removeTodo(id));
                  idRef.current.value = '';
                }
              }}
        >
          Remove Task
        </button><br/>
        </div>
        <div>
            <input placeholder="id to complete" ref={idRef}/>
            <button
            onClick={() => {
                const id = Number(idRef.current?.value);
                if (!isNaN(id)) {
                  console.log('Toggling task with id:', id); 
                  dispatch(toggleTodo(id));
                  idRef.current.value = '';
                }
              }}
        >
          Toggle Task
        </button><br/>
        </div>
        <div>
        {todos.map((item) => {
          return (
            <div key={item.id}>
             {item.id} . {item.task} , {item.completed?'Completed':"Not completed"}
            </div>
          );
        })}
        </div>
        </>
    )
}

export default Todo