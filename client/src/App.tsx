import React, { useState } from 'react';
import './assets/styles/normalize.css';
import GamePage from './pages/GamePage/GamePage';
import GameProcessPage from './pages/GameProcessPage/GameProcessPage';

export default function App(){
  const [startGame, setStartGame] = useState<boolean>(false);
  const [score, setScore] = useState<string>("");
  const [gameEnd, setGameEnd] = useState<boolean>(false);

  return (
    <>
      {(!startGame && !gameEnd) && (
      <GamePage
        gameEnd={gameEnd}
        setGameEnd={null}
        setStartGame={setStartGame}
        btnTxt="Start"
        headerText="Who wants to be a millionaire?"
        subHeaderText=""
      />
      )}
      {(startGame && !gameEnd) && (
      <GameProcessPage
        gameEnd={gameEnd}
        setGameEnd={setGameEnd}
        setScore={setScore}
      />
      )}
      {gameEnd && (
      <GamePage
        gameEnd={gameEnd}
        setGameEnd={setGameEnd}
        setStartGame={setStartGame}
        btnTxt="Try again"
        headerText={score}
        subHeaderText="Total score:"
      />
      )}
    </>
  );
}
