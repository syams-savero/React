import { useState, useEffect } from 'react';
import './reactionGame.css';

export default function ReactionGame() {
  
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [countDown, setCountDown] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [correctIndex, setCorrectIndex] = useState([]);
  const [gameOver, setGameOver] = useState(false);

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
          setActiveIndex(Math.floor(Math.random() * 9));
          setCountDown(null);
          return null;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [countDown]);

  function handleCellClick(i) {
    if (i !== activeIndex) return;
    let next;
    do {
      next = Math.floor(Math.random() * 9);
    } while (correctIndex.includes(next));
    setActiveIndex(next);
    setCorrectIndex(prev => [...prev, i]);
    setScore(s => s + 1)
  }

  const seconds = Math.floor(time / 1000);
  const ms = Math.floor((time % 1000) / 10);

  return (
  <div className="reaction-container">
    <div className="stopwatch">{seconds}.{ms < 10 ? '0' + ms : ms}</div>
    <div className="reaction-grid">
      {Array.from({ length: 9}, (_, i) => (
        <div key={i} onClick={() => handleCellClick(i)} className={correctIndex.includes(i) ? 'reaction-cell cell-correct' : i === activeIndex ? 'reaction-cell cell-active' : 'reaction-cell'}/>
      ))}
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
