import { useState } from 'react';

export default function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Belajar membuat task manager', done: true },
    { id: 2, text: 'Menyimpan perubahan di github', done: false },
  ]);
  const [text, setText] = useState('');

  function handleAdd() {
    if (text.trim() === '') return;
    setTask([...task, { id: Date.now(), text: text.trim(), done: false}]);
    setText('');
  }

  return (
  <div>
    <h2>Mini Task Manager</h2>
    <input type="text" placeholder="tambah tugas baru" value={text} onChange={(e) => setText(e.target.value)}/>
    <button onClick={handleAdd}>Tambah</button>
  </div>
  );
}
