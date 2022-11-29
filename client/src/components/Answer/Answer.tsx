import React, { useEffect, useState } from 'react';
import './assets/index.css';
import './assets/triangles/triangle-left.css';
import './assets/triangles/triangle-right.css';
import genKey from '../../helpers/genKey';
import {AnswerTriangle, AnswerProps, AnswerTriangleStates} from '../../types/interfaces'
import { TriangleSmallLeft, TriangleSmallRight, TriangleStandartLeft, TriangleStandartRight } from './answerStyles';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

const onSizeClass = (size: string): string => {
  switch (size) {
    case 'standart':
      return 'answer_standart';
    case 'small':
      return 'answer_small';
    default:
      return 'answer_standart';
  }
};

const onStateClass = (state: string): string => {
  switch (state) {
    case 'correct':
      return 'answer_correct';
    case 'selected':
      return 'answer_selected';
    case 'wrong':
      return 'answer_wrong';
    case 'inactive':
      return 'answer_inactive';
    case 'active':
      return 'answer_active';
    case 'next':
      return 'answer_next';
    default:
      return '';
  }
};

const sumStates = ['active', 'inactive', 'next'];

const btnFocus = (sumState: string[], 
  state: string,
  setAnswerStateClass: Function,
  setAnswerState: Function): void => {
  if ((!sumState.includes(state))) {
    setAnswerStateClass(onStateClass('selected'));
    setAnswerState('selected');
  }
};

const onClickAnswer = (
  key: number,
  correctAnswer: number | number[],
  onSelectAnswer: Function,
  sumState: string[],
  state: string,
  setAnswerStateClass: Function,
  setAnswerState: Function,
): void => {
  btnFocus(sumState, state, setAnswerStateClass, setAnswerState);
  setTimeout(() => {
    onSelectAnswer(key);
  }, 5000);
  setTimeout(() => {
    const cond = correctAnswer.toString().split(',').includes(key.toString());
    setAnswerStateClass(onStateClass(cond ? 'correct' : 'wrong'));
    setAnswerState(cond ? 'correct' : 'wrong');
  }, 3000);
};





export default function Answer({
  sum, question, position, size, state, selectedAnswers, correctAnswer, onSelectAnswer,
}: AnswerProps) {
  const [letter, setLetter] = useState<string>('A');
  const [answerSizeClass, setAnswerSizeClass] = useState<string>('answer_standart');
  const [answerStateClass, setAnswerStateClass] = useState<string>('');
  const [answerState, setAnswerState] = useState<string>(state);
  const answerTriangleLeft: AnswerTriangleStates = size === "standart" ? TriangleStandartLeft : TriangleSmallLeft;
  const answerTriangleRight: AnswerTriangleStates = size === "standart" ? TriangleStandartRight : TriangleSmallRight;
  const [
    linePositionLeft,
    lineStyleLeft,
    triangleStyleLeft,
    triangleStateLeft
  ] = answerTriangleLeft[answerState as keyof AnswerTriangleStates];
  const [
    linePositionRight,
    lineStyleRight,
    triangleStyleRight,
    triangleStateStyleRight
  ] = answerTriangleRight[answerState as keyof AnswerTriangleStates];

  useEffect(() => {
    if (selectedAnswers && selectedAnswers.length === 0) {
      setAnswerState('default');
      setAnswerStateClass('');
    }
  }, [selectedAnswers]);

  useEffect(() => {
    if (state) {
      setAnswerState(state);
    }
  }, [state]);

  useEffect(() => {
    if (position) {
      setLetter(LETTERS[position]);
    }
  }, [position]);

  useEffect(() => {
    const answerSize = onSizeClass(size);
    setAnswerSizeClass(answerSize);
  }, [size]);

  useEffect(() => {
    if (answerState) {
      const answState = onStateClass(answerState);
      setAnswerStateClass(answState);
    }
  }, [answerState]);

  return (
    <button
      type="button"
      id="answer"
      onClick={() => {
        onClickAnswer(
          position,
          correctAnswer,
          onSelectAnswer,
          sumStates,
          state,
          setAnswerStateClass,
          setAnswerState,
        );
      }}
      className={`answer ${answerSizeClass}
            ${answerStateClass}`}
    >
      {answerState && (
        <AnswerTriangle
          linePositionState={linePositionLeft}
          lineStyleState={lineStyleLeft}
          triangleStyleState={triangleStyleLeft}
          triangleStateStyleState={triangleStateLeft}
        />
      )}

      {answerState && (
        <AnswerTriangle
          linePositionState={linePositionRight}
          lineStyleState={lineStyleRight}
          triangleStyleState={triangleStyleRight}
          triangleStateStyleState={triangleStateStyleRight}
        />
      )}

      {letter && !sum && <span className="answer-letter">{letter}</span>}
      <span className="answer-value">{question || sum}</span>
    </button>
  );
}

function AnswerTriangle({
  linePositionState,
  lineStyleState,
  triangleStyleState,
  triangleStateStyleState,
}: AnswerTriangle) {

  return (
    <>
      <div className={`${lineStyleState} ${linePositionState}`} />
      <div
        className={`answer-triangle ${triangleStyleState} ${triangleStateStyleState}`}
      />
    </>

  );
}
