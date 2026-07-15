import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  // Fetch tasks on load
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get(API_URL);
    setTasks(res.data);
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await axios.post(API_URL, { title });
    setTitle('');
    fetchTasks();
  };

  const toggleTask = async (task) => {
    await axios.put(`${API_URL}/${task._id}`, { completed: !task.completed });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTasks();
  };

  return (
    <div style={{ maxWidth: 500, margin: '50px auto', fontFamily: 'Arial' }}>
      <h1>Task Manager</h1>

      <form onSubmit={addTask} style={{ display: 'flex', gap: 8 }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task..."
          style={{ flex: 1, padding: 8 }}
        />
        <button type="submit">Add</button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: 20 }}>
        {tasks.map((task) => (
          <li
            key={task._id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span
              onClick={() => toggleTask(task)}
              style={{
                cursor: 'pointer',
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.title}
            </span>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
