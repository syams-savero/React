import {useState} from 'react';

export default function Pure() {
  const [number, setNumber] = useState(1);
  return (
  <div>
   <p>Angka sekarang : {number}</p>
   <button onClick={() => setNumber(number * 2)}>Double it</button>
   <button onClick={() => setNumber(Math.sqrt(number))}>akar pangkat</button>
   <button onClick={() => setNumber(number + 1)}>Tambah</button>
  </div>
  )
}
