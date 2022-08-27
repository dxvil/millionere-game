import React from "react"
import './game-button.css'
export const GameBtn = ({text, setGameEnd, setStartGame}) => {
    return(
        <button className="game-btn" onClick={() => {
            setStartGame(true)
            setGameEnd && setGameEnd(false)
        }}>
            {text}
        </button>
    )
}