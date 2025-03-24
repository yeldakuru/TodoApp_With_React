import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }
  console.log(todos);

  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} />
      </div>

    </div>


  )
}

export default App
