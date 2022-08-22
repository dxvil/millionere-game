import React from "react"
import './game-button.css'
export const GameBtn = ({text}) => {
    return(
        <button className="game-btn">{text}</button>
    )
}