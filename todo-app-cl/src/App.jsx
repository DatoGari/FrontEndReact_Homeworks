import React, { Component } from 'react';
import './App.css';
import TaskList from './Tasklist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      todos: [],
    };
  }

  handleAdd = () => {
    const { task, todos } = this.state;
    if (task.trim() !== '') {
      const newTodo = {
        id: crypto.randomUUID(),
        text: task,
        done: false,
      };
      this.setState({
        todos: [...todos, newTodo],
        task: '',
      });
    }
  };

  handleDelete = (id) => {
    const updated = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: updated });
  };

  markAsDone = (id) => {
    const updated = this.state.todos.map(todo =>
      todo.id === id ? { ...todo, done: true } : todo
    );
    this.setState({ todos: updated });
  };

  markAsActive = (id) => {
    const updated = this.state.todos.map(todo =>
      todo.id === id ? { ...todo, done: false } : todo
    );
    this.setState({ todos: updated });
  };

  handleInputChange = (e) => {
    this.setState({ task: e.target.value });
  };

  render() {
    const { task, todos } = this.state;
    const activeTodos = todos.filter(todo => !todo.done);
    const completedTodos = todos.filter(todo => todo.done);

    return (
      <div className="App">
        <h1>My To-Do List</h1>

        <div>
          <input
            type="text"
            value={task}
            onChange={this.handleInputChange}
            placeholder="Enter a task"
          />
          <button onClick={this.handleAdd}>Add</button>
        </div>

        <div className="task-lists">
        <TaskList
            title="Active Tasks"
            todos={activeTodos}
            onMark={this.markAsDone}
            onDelete={this.handleDelete}
            isCompleted={false}
          />
          <TaskList
            title="Completed Tasks"
            todos={completedTodos}
            onMark={this.markAsActive}
            onDelete={this.handleDelete}
            isCompleted={true}
          />
        </div>
      </div>
    );
  }
}

export default App;