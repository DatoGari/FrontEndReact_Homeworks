import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

const NewTasks = () => {
  const { tasks, addTask, updateTaskStatus } = useContext(TaskContext);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      addTask(input);
      setInput('');
    }
  };

  return (
    <div>
      <h2>New Tasks</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {tasks.filter(t => t.status === 'new').map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => updateTaskStatus(task.id, 'in-progress')}>Start</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewTasks;