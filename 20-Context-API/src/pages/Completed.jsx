import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const Completed = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <h2>Completed</h2>
      <ul>
        {tasks.filter(t => t.status === 'completed').map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Completed;