import { useState, useEffect } from 'react';
import './reactionGame.css';

export default function ReactionGame() {
  
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [countDown, setCountDown] = useState(null);
  
  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => {
      setTime(t => t + 10);
    }, 10);
    return () => clearInterval(id);
  }, [isRunning]);

  useEffect(() => {
    if (countDown === null) return;
    const id = setInterval(() => {
      setCountDown(c => {
        if (c <= 1) {
          setIsRunning(true);
          setCountDown(null);
          return null;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [countDown]);

  const seconds = Math.floor(time / 1000);
  const ms = Math.floor((time % 1000) / 10);

  return (
  <div className="reaction-container">
    <div className="stopwatch">{seconds}.{ms < 10 ? '0' + ms : ms}</div>
    <div className="reaction-grid">
      <div className="reaction-cell"></div>
      <div className="reaction-cell"></div>
      <div className="reaction-cell"></div>
      <div className="reaction-cell"></div>
      <div className="reaction-cell"></div>
      <div className="reaction-cell"></div>
      <div className="reaction-cell"></div>
      <div className="reaction-cell"></div>
      <div className="reaction-cell"></div>
    </div>
    {countDown !== null && (
      <div className="countdown">{countDown}</div>
    )}
    <button onClick={() => {
        if (!isRunning && countDown === null) {
          setCountDown(3);
        }
      }}>Start</button>
  </div>
  )
}
