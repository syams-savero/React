import { useState, useEffect } from 'react';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getUser(id) {
  await delay(id === 1 ? 2000 : 500);
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.json();
}

export default function FetchRace() {
  const [userId, setUserId] = useState(null);
  const [profile, setProfile] = useState(null);
  const [fix, setFix] = useState(false);

  useEffect(() => {
    if (userId === null) return;
    let ignore = false;

    setProfile({ name: 'Loading...'});

    getUser(userId).then((data) => {
      if (fix) {
        if (!ignore) setProfile(data);
      } else {
        setProfile(data);
      }
    });

    return () => {
      ignore = true;
    };
  }, [userId, fix]);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <button onClick={() => setUserId(1)}>User 1</button>
      <button onClick={() => setUserId(2)} style={{ marginLeft: 8 }}>User 2</button>
      <button onClick={() => setFix(!fix)} style={{ marginLeft: 8 }}>Mode : {fix ? 'FIX' : 'BUGGY'}</button>
      <p>Terakhir dipilih: User {userId ?? '-'}</p>
      <p>{profile ? profile.name : 'Belum pilih user'}</p>
    </div>
  );
}
