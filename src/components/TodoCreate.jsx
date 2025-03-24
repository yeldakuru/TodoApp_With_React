import React, { useState } from 'react'
import '../App.css';

function TodoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState('');

    const cleareInput = () => {
        setNewTodo("");
    }

    const createTodo = () => {
        if (!newTodo) return;
        const request = {
            id: Math.floor(Math.random() * 99999999999),
            content: newTodo
        }
        onCreateTodo(request)
        cleareInput();
    }
    return (
        <div className='todo-create'>
            <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className='todo-input' type="text" placeholder=' Enter Your Todo' />
            <button onClick={createTodo}
                className='todo-create-button'>Create Todo </button>

        </div>
    )
}

export default TodoCreate