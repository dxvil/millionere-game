import React from "react";
import { GameOkayComponent } from "../../components/GameOkayComponent/GameOkayComponent";
import { GameBtn } from "../../components/GameBtn/GameBtn";
import { Header } from "../../components/Header/Header";
import './start-page.css'

export const StartPage = () => {
    return(
        <div className="start-page">
            <GameOkayComponent />
            <div className="start-page__wrraper">
                <Header size="big" text="Who wants to be a millionaire?" />
                <GameBtn text="Start"/>
            </div>
        </div>
    )
}