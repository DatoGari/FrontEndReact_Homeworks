import React from 'react'

interface comProps {
  todo: {
    id: string;
    text: string;
    done: boolean;
  };
  onDone: (id: string) => void;
  onDelete: (id: string) => void;
  onUndo: (id: string) => void;
}

function TodoItem({ todo, onDone, onDelete, onUndo }: comProps) {
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