import React from 'react';
import GameOkayComponent from '../../components/GameOkayComponent/GameOkayComponent.jsx';
import GameBtn from '../../components/GameBtn/GameBtn';
import Header from '../../components/Header/Header';
import './game-page.css';
import {GamePage} from '../../interfaces/index'


export default function GamePage({
  gameEnd, headerText, btnTxt,
  subHeaderText, setGameEnd, setStartGame,
}: GamePage) {
  return (
    <div className={`game-page ${gameEnd && 'end-page'}`}>
      <GameOkayComponent />
      <div className="start-page__wrraper">
        {subHeaderText && <Header size="mid" text={subHeaderText} />}
        <Header size="big" text={headerText} />
        <GameBtn text={btnTxt} setGameEnd={setGameEnd} setStartGame={setStartGame} />
      </div>
    </div>
  );
}
