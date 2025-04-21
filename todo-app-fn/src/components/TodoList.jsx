import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ title, todos, onDone, onDelete, onUndo }) {
  return (
    <div className="task-column">
      <h2>{title}</h2>
      <ul>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            onDone={onDone}
            onDelete={onDelete}
            onUndo={onUndo}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList