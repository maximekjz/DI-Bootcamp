import React, { useState } from 'react';
import List from './List';
import { Todo } from './List';
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {

    const[todo, setTodo] = useState<Todo[]>([
        {id:1, text:'Clean'},
        {id:2, text: 'Play'}
    ])

    const addTodo = () => {
        const newTodo: Todo ={
            id: uuidv4(),
            text: `New Todo ${uuidv4()}`
        }
        
        setTodo([...todo, newTodo])
    }

    return (
        <div>
            <h2>ToDo List:</h2>
            <button onClick={addTodo}>Add Todo</button>
        <List
            items={todo}
            renderItem={(todo) => (
            <div>
                <strong>Task:</strong> {todo.text}
            </div>
        )}
      />
    </div>
  );
};

export default TodoApp;