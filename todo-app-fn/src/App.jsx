import React, { useState, useEffect, useRef, useCallback} from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])

  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }

  }, [])

  const handleAdd = useCallback(()=> {
    if (task.trim() !== '') {
      const newTodo = {
        id: crypto.randomUUID(),
        text: task,
        done: false,
      }
      setTodos((prev) => [...todos, newTodo])
      setTask('')
    }
  }, [task]) 

  const handleDelete = useCallback ((id) => {
    setTodos((prev) => prev.filter(todo => todo.id !== id))
  }, [])

  const markAsDone = useCallback((id) => {
    setTodos((prev) =>
      prev.map(todo => todo.id === id ? { ...todo, done: true } : todo)
    )
  }, [])

  const markAsActive = useCallback((id) => {
    setTodos((prev) =>
      prev.map(todo => todo.id === id ? { ...todo, done: false } : todo)
    )
  }, [])

  return (
    <div className='App'>

      <h1>My To-Do List</h1>

      <TodoInput 
        ref={inputRef}
        task={task}
        setTask={setTask}
        handleAdd={handleAdd}
      />

      <div className='task-lists'>

        <TodoList 
          title="Active Tasks"
          todos={todos.filter(todo => !todo.done)}
          onDone={markAsDone}
          onDelete={handleDelete}
        />

        <TodoList 
          title="Completed Tasks"
          todos={todos.filter(todo => todo.done)}
          onUndo={markAsActive}
          onDelete={handleDelete}
        />
      </div>

    </div>
  )
}

export default App
