import React from 'react'
import TodoItem from './TodoItem'

type myFuncProps = {
  title: string;
  todos: [{id: string, text: string, done: boolean}];
  onDone: (id: string) => void;
  onDelete: (id: string) => void;
  onUndo: (id: string) => void;
}

function TodoList({ title, todos, onDone, onDelete, onUndo }: myFuncProps) {
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