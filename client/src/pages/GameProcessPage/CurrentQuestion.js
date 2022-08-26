import React from "react"
import {Header} from '../../components/Header/Header'
export const CurrentQuestion = ({currentQuestion}) => {
    return(
        <div className="game-process-page-question">
            <Header size="mid" text={currentQuestion} />
        </div>
    )
}