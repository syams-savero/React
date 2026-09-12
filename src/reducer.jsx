import { useState } from 'react';
import { useReducer } from 'react';

/*
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
} */

function countReducer(state, action) {
  switch (action.type) {
    case 'incremented': {
      return state + 1;
    }

    case 'decremented': {
      return state - 1;
    }

    case 'reset': {
      return 0;
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(countReducer, 0);

  function handleIncrement() {
    dispatch({ type: 'incremented' });
  }

  function handleDecrement() {
    dispatch({ type: 'decremented' });
  }

  function reset() {
    dispatch({ type: 'reset' });
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
      <button onClick={reset}>reset</button>
    </>
  )
}
