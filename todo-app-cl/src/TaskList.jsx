// TaskList.js
import React, { PureComponent } from 'react';

class TaskList extends PureComponent {
  render() {
    const { title, todos, onMark, onDelete, isCompleted } = this.props;

    return (
      <div className="task-column">
        <h2>{title}</h2>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {isCompleted ? <s>{todo.text}</s> : todo.text}
              <button onClick={() => onMark(todo.id)}>
                {isCompleted ? 'Undo' : 'Done'}
              </button>
              <button onClick={() => onDelete(todo.id)}>
                {isCompleted ? 'Remove' : 'Delete'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
