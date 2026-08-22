import { useState } from 'react';

export default function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Belajar membuat task manager', done: true },
    { id: 2, text: 'Menyimpan perubahan di github', done: false },
  ]);
  const [text, setText] = useState('');

  function handleAdd() {
    if (text.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: text.trim(), done: false}]);
    setText('');
  }

  function handleDone(id) {    
  setTasks(tasks.map((t) => t.id === id ? {...t, done: !t.done } : t))
  }

  function handleDelete(id) {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  return (
  <div>
    <h2>Task Manager</h2>
    <div className='input-bar'>
      <input type="text" placeholder="tambah tugas baru" value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={handleAdd}>Tambah</button>
    </div>
        <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span className={task.done ? 'done' : ''}>{task.text}</span>
            <div className="task-actions">
              <input type="checkbox" checked={task.done} onChange={() => handleDone(task.id)} />
              <button onClick={() => handleDelete(task.id)}>Hapus</button>
            </div>
          </li>
        ))}
    </ul>
  </div>
  );
}
