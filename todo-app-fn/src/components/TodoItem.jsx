import React from 'react'

function TodoItem({ todo, onDone, onDelete, onUndo }) {
  return (
    <li>
      {todo.done ? <s>{todo.text}</s> : todo.text}
      {todo.done ? (
        <>
          <button onClick={() => onUndo(todo.id)}>Undo</button>
          <button onClick={() => onDelete(todo.id)}>Remove</button>
        </>
      ) : (
        <>
          <button onClick={() => onDone(todo.id)}>Done</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </li>
  )
}

export default TodoItem