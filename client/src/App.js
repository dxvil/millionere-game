import React, {useState, useEffect} from "react";
import './assets/styles/normalize.css'
import {GamePage} from './pages/GamePage/GamePage'
import {GameProcessPage} from './pages/GameProcessPage/GameProcessPage'

export  const App = () => {
    //here
    const [startGame, setStartGame] = useState(true)
    const [score, setScore] = useState()
    const [gameEnd, setGameEnd] = useState(false)
    
    return(
        
        <>
        <GameProcessPage gameEnd={gameEnd} setGameEnd={setGameEnd} setScore={setScore}/>
        {!startGame && !gameEnd && <GamePage  setStartGame={setStartGame}
        btnTxt="Start" headerText="Who wants to be a millionaire?" />}
        {!gameEnd && startGame && <GameProcessPage gameEnd={gameEnd} setGameEnd={setGameEnd} setScore={setScore}/>}
        {gameEnd && <GamePage setGameEnd={setGameEnd} setStartGame={setStartGame}
        btnTxt="Try again" headerText={score} subHeaderText="Total score:" />}
        </>
    )
}
