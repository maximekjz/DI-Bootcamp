import React, { useReducer, useState } from "react";

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      // Add a new todo to the state
      return [...state, { id: action.id, text: action.text, statu: action.statu }];
    case "REMOVE_TODO":
      // Remove a todo by its id
      return state.filter((todo) => todo.id !== action.id);
    case "EDIT_TODO":
      return state.map((todo)=>
      todo.id===action.id ? {...todo, text:action.text} : todo)
      case "MARK_COMPLETED":
        return state.map((todo) =>
          todo.id === action.id ? { ...todo, statu: 'completed' } : todo);
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");
  const [nextId, setNextId] = useState(1)
  const [editId, setEditId] = useState(1)
  const [filterText, setFilterText] = useState("");


  const handleAddTodo = () => {
    if (todoText.trim() === "") return;  //ignore empty
    dispatch({ type: "ADD_TODO", text: todoText, id:nextId, statu: 'not completed' });
    setTodoText(""); // clear input field
    setNextId(nextId+1)
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const handleEditTodo =(id) => {
    if (todoText.trim() === "") return;
    dispatch({type:"EDIT_TODO", text: todoText, id});
    setTodoText(""); // clear input field
    setEditId(null)
  }

  const editing = (id, currentText) =>{
    setTodoText(currentText)
    setEditId(id)
  }

  const filterTodo = todos.filter(todo =>
    todo.text.toLowerCase().includes(filterText.toLowerCase())
  )

  const finishing =(id) =>{
    dispatch({ type: "MARK_COMPLETED", id });
  }

  const filterStatus = filterTodo.filter(todo =>
    todo.statu === "completed"
  );


  return (
    <div>
    <h1>Filter</h1>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={() => (editId ? handleEditTodo(editId) : handleAddTodo())}>
        {editId ? "Update Todo" : "Add Todo"}
      </button>
      <ul>
        {filterTodo.map((todo)=>(
          <li key={todo.id}>
            <span> ID: {todo.id} </span> 
            <span>Todo: {todo.text}</span> 
            <button onClick={() => editing(todo.id, todo.text)}>Edit</button>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            <button onClick={() => finishing(todo.id)}>Done</button>
          </li>
        ))}
      </ul>
      <h1>Done</h1>
      <ul>
        {filterStatus.map((todo)=>(
          <li key={todo.id}>
            <span> ID: {todo.id} </span> 
            <span>Todo: {todo.text}</span> 
            <button onClick={() => editing(todo.id, todo.text)}>Edit</button>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;