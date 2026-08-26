import { useState } from 'react';
import './reactionGame.css';

export default function ReactionGame() {
  return (
  <div className="reaction-container">
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
  </div>
  )
}
