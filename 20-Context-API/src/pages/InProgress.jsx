import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const InProgress = () => {
  const { tasks, updateTaskStatus } = useContext(TaskContext);

  return (
    <div>
      <h2>In Progress</h2>
      <ul>
        {tasks.filter(t => t.status === 'in-progress').map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => updateTaskStatus(task.id, 'completed')}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InProgress;
