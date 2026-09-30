import { useState, useEffect } from 'react';

function createConnection(roomId) {
  let timerId;
  let handler = null;
  return {
    connect() {
      console.log('connect ke room: ' + roomId);
      timerId = setInterval(() => {
        if (handler) {
          handler('pesan dari room "' + roomId + '" #' + Math.floor(Math.random() * 100));
        }
      }, 2000);
    },
    onMessage(cb) {
      handler = cb;
    },
    disconnect() {
      console.log('disconnect dari room: ' + roomId);
      clearInterval(timerId);
    },
  };
}

export default function ChatRoom() {
  const [roomId, setRoomId] = useState('general');
  const [message, setMessage] = useState('Belum ada pesan');

  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    connection.onMessage((text) => setMessage(text));
    return () => connection.disconnect();
  }, [roomId]);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h3>ChatRoom - Challenge 1</h3>
      <p>Room aktif (UI): <b>{roomId}</b></p>
      <button onClick={() => setRoomId('general')}>general</button>
      <button onClick={() => setRoomId('travel')} style={{ marginLeft: 8 }}>travel</button>
      <p>Pesan terakhir: {message}</p> 
    </div>
  );
}
