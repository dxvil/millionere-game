import React from 'react';
import './game-button.css';
import {GameBtn} from '../../interfaces/index'

export default function GameBtn({ text, setGameEnd, setStartGame }: GameBtn) {
  return (
    <button
      type="button"
      className="game-btn"
      onClick={() => {
        setStartGame(true);
        if (setGameEnd) {
          setGameEnd(false);
        }
      }}
    >
      {text}
    </button>
  );
}
