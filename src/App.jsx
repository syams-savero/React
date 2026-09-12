import { useState } from 'react';
import './App.css';
import Syarat from './components.jsx';
import PackingList from './conditionalRender.jsx';
import JobList from './renderList.jsx';
import TaskMngr from './taskManager.jsx';
import Pure from './pureComponents.jsx';
import Interact from './interactivity.jsx';
import ReactionGame from './reactionGame.jsx';
import GroupState from './choosingState.jsx';
import AvoidContra from './avoidContradictionState.jsx';
import AvoidDupState from './avoidduplicationstate.jsx';
import SharingState from './sharingState.jsx';
import Reduce from './reducer.jsx';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [view, setView] = useState('game');

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const next = squares.slice();
    if (xIsNext) {
      next[i] = 'X';
    } else {
      next[i] = 'O';
    }
    setSquares(next);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'winner: ' + winner;
  } else {
    status = 'Next Player: ' + (xIsNext ? 'X' : 'O');
  }

  if (view === 'packing') {
    return <PackingList />;
  } else if (view === 'job') {
    return <JobList />;
  } else if (view === 'task') {
    return <TaskMngr />
  } else if (view === 'pure') {
    return <Pure />
  } else if (view === 'interact') {
    return <Interact />
  } else if (view === 'reaction') {
    return <ReactionGame />
  } else if (view === 'GroupState') {
    return <GroupState />
  } else if (view === 'avoid-contra') {
    return <AvoidContra />
  } else if (view === 'avoid-dup-state') {
    return <AvoidDupState />
  } else if (view === 'share-state') {
    return <SharingState />
  } else if (view === 'reducer') {
    return <Reduce />
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <Syarat />
      <div className='nav-button'>
      <button onClick={() => setView('packing')}>Conditional Render</button>
      <button onClick={() => setView('job')}>Lihat Job List</button>
      <button onClick={() => setView('task')}>Cek task manager</button>
      <button onClick={() => setView('pure')}>Pure Components</button>
      <button onClick={() => setView('interact')}>Interactivity</button>
      <button onClick={() => setView('reaction')}>Reaction Game</button>
      <button onClick={() => setView('GroupState')}>GroupState</button>
      <button onClick={() => setView('avoid-contra')}>Avoid Contradiction State</button>
      <button onClick={() => setView('avoid-dup-state')}>Avoid Duplication State</button>
      <button onClick={() => setView('share-state')}>Sharing State</button>
      <button onClick={() => setView('reducer')}>reducer</button>
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
