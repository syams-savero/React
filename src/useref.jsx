/*
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
*/ 

import { useRef } from 'react';

export default function CounterRef() {
  const countRef = useRef(0);

  function handleCLick() {
    countRef.current = countRef.current + 1;
    alert(countRef.current);
  }

  return (
  <button onClick={handleCLick}>{countRef.current}</button>
  )
}
