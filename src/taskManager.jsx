import { useState } from 'react';

export default function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Belajar membuat task manager', done: true },
    { id: 2, text: 'Menyimpan perubahan di github', done: false },
  ]);
  const [text, setText] = useState('');
  return (
  <div>
    <h2>Mini Task Manager</h2>
    <input type="text" placeholder="tambah tugas baru" value={text} onChange={(e) => setText(e.target.value)}/>
  </div>
  );
}
