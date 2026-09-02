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
  const [wrongIndex, setWrongIndex] = useState(null);
  const [penalty, setPenalty] = useState(0);

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
    if (!isRunning || gameOver) return;
    if (i === activeIndex) {
    const newCorrect = [...correctIndex, i];
    setCorrectIndex(newCorrect);

    const nextScore = correctIndex.length + 1;
    setScore(nextScore);

    if (nextScore >= 5) {
      setIsRunning(false);
      setGameOver(true);
      setActiveIndex(null);
      return;
    }

    let next;
    do {
      next = Math.floor(Math.random() * 9);
    } while (newCorrect.includes(next));
    setActiveIndex(next);
  } else if (!correctIndex.includes(i)) {
      setWrongIndex(i);
      setPenalty(p => p + 0.5);
      setTimeout(() => setWrongIndex(null), 300);
  }}

  const seconds = Math.floor(time / 1000);
  const ms = Math.floor((time % 1000) / 10);

  return (
  <div className="reaction-container">
    <div className="stopwatch">{seconds}.{ms < 10 ? '0' + ms : ms}</div>
    <div className="penalty">penalty: +{penalty}s</div>
    <div className="reaction-grid">
      {Array.from({ length: 9}, (_, i) => (
        <div key={i} onClick={() => handleCellClick(i)} className={i === wrongIndex ? 'reaction-cell cell-wrong' : correctIndex.includes(i) ? 
            'reaction-cell cell-correct' : i === activeIndex ? 
              'reaction-cell cell-active' : 'reaction-cell'}/>
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
