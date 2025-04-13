import React, { useState} from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    if (task.trim() !== '') {
      const newTodo = {
        id: crypto.randomUUID(),
        text: task,
        done: false,
      }
      setTodos([...todos, newTodo])
      setTask('')
    }
  }

  const handleDelete = (id) => {
    const updated = todos.filter(todo => todo.id !== id)
    setTodos(updated)
  }

  const markAsDone = (id) => {
    const updated = todos.map(todo =>
      todo.id === id ? {...todo, done: true} : todo
    )
    setTodos(updated)
  }

  const markAsActive = (id) => {
    const updated = todos.map(todo =>
      todo.id === id ? {...todo, done: false} : todo
    )
    setTodos(updated)
  }

  return (
    <div className='App'>

      <h1>My To-Do List</h1>
      
      <div>
        <input 
          type="text" 
          value={task} 
          onChange={(e)=> setTask(e.target.value)} 
          placeholder='Enter a task'
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className='task-lists'>
        <div className='task-column'>
          <h2>Active Tasks</h2>
          <ul>
            {todos.filter(todo => !todo.done).map(todo => (
              <li key={todo.id}>
                {todo.text}
                <button onClick={() => markAsDone(todo.id)}>Done</button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>

        <div className='task-column'>
          <h2>Completed Tasks</h2>
          <ul>
            {todos.filter(todo => todo.done).map(todo => (
              <li key={todo.id}>
                <s>{todo.text}</s>
                <button onClick={() => markAsActive(todo.id)}>Undo</button>
                <button onClick={() => handleDelete(todo.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default App
