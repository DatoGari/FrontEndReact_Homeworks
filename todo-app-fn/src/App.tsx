import React, { useState, useEffect, useRef, useCallback} from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {

// interface AppProps {
//   inputRef: React.RefObject<HTMLInputElement>;
//   task: string;
//   setTask: (value: string) => void;
//   handleAdd: () => void;
// }

  type todoType = {
    id: string;
    text: string;
    done: boolean
  }

interface myFuncProps {
  todos: todoType[];
}

  const [task, setTask] = useState('');
  const [todos, setTodos] = useState<todoType[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }

  }, [])

  const handleAdd = useCallback(()=> {

    if (task.trim() !== '') {
      
      const newTodo: todoType = {
        id: crypto.randomUUID(),
        text: task,
        done: false,
      }
      setTodos((prev) => [...todos, newTodo])
      setTask('')
    }
  }, [task]) 

  const handleDelete = useCallback ((id:string) => {
    setTodos((prev) => prev.filter(todo => todo.id !== id))
  }, [])

  const markAsDone = useCallback((id:string) => {
    setTodos((prev) =>
      prev.map(todo => todo.id === id ? { ...todo, done: true } : todo)
    )
  }, [])

  const markAsActive = useCallback((id:string) => {
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
