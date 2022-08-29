import React from 'react';
import Header from '../../components/Header/Header';
import {CurrentQuestion} from '../../interfaces/index'

export default function CurrentQuestion({ currentQuestion }: CurrentQuestion) {
  return (
    <div className="game-process-page-question">
      <Header size="mid" text={currentQuestion} />
    </div>
  );
}
