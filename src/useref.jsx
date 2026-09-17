import { useState } from 'react';

export default function CounterState() {
  const [count, setCount] = useState(0);

  function handleCLick() {
    setCount(count + 1);
  }

  return (
  <button onClick={handleCLick}>{count}</button>
  )
}
