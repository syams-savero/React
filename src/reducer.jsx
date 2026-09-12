import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
  <>
    <h1>{count}</h1>
    <button onClick={handleIncrement}>+1</button>
    <button onClick={handleDecrement}>-1</button>
    <button onClick={handleReset}>reset</button>
  </>
  )
}
