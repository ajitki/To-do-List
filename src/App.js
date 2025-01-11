import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Add a new task
  const addTask = () => {
    if (newTask.trim() === '') return; // Ignore empty input
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  // Delete a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          style={{ padding: '10px', width: '200px' }}
        />
        <button onClick={addTask} style={{ marginLeft: '10px', padding: '10px' }}>
          Add Task
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ margin: '10px 0', display: 'flex', justifyContent: 'center' }}>
            <span style={{ marginRight: '10px' }}>{task}</span>
            <button onClick={() => deleteTask(index)} style={{ padding: '5px 10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
