import React from "react";
import { GameOkayComponent } from "../../components/GameOkayComponent/GameOkayComponent";
import { GameBtn } from "../../components/GameBtn/GameBtn";
import { Header } from "../../components/Header/Header";
import './game-page.css'

export const GamePage = ({gameEnd, headerText, btnTxt, subHeaderText, setGameEnd, setStartGame}) => {
    return(
        <div className={`game-page ${gameEnd && "end-page"}`}>
            <GameOkayComponent />
            <div className="start-page__wrraper">
                {subHeaderText && <Header size="mid" text={subHeaderText} />}
                <Header size="big" text={headerText} />
                <GameBtn text={btnTxt} setGameEnd={setGameEnd} setStartGame={setStartGame} />
            </div>
        </div>
    )
}