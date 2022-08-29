import React, { useEffect, useState } from 'react';
import './assets/index.css';
import './assets/triangles/triangle-left.css';
import './assets/triangles/triangle-right.css';
import genKey from '../../helpers/genKey';
import {AnswerTriangle, AnswerProps} from '../../interfaces/index'

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



interface AnswerTriangleStates {
  selected: string[],
  wrong: string[],
  correct: string[],
  inactive: string[],
  active: string[],
  next: string[],
  default: string[]
}

interface AnswerTrinaglePosition {
  left: AnswerTriangleStates,
  right: AnswerTriangleStates
}

type AnswerTringle = {
  small: AnswerTrinaglePosition,
  standart: AnswerTrinaglePosition
}

export default function Answer({
  sum, question, position, size, state, selectedAnswers, correctAnswer, onSelectAnswer,
}: AnswerProps) {
  const [letter, setLetter] = useState<string>('A');
  const [answerSizeClass, setAnswerSizeClass] = useState<string>('answer_standart');
  const [answerStateClass, setAnswerStateClass] = useState<string>('');
  const [answerState, setAnswerState] = useState<string>(state);
  const answerTringleState: any = {
    small: {
      left: {
        selected: [
          'triangle-left-line',
          'triangle-left-line_selected',
          'answer-triangle__left_small',
          'answer-triangle__left_small_selected',
        ],
        wrong: [
          'triangle-left-line',
          'triangle-left-line_wrong',
          'answer-triangle__left_small',
          'answer-triangle__left_small_wrong',
        ],
        correct: [
          'triangle-left-line',
          'triangle-left-line_correct',
          'answer-triangle__left_small',
          'answer-triangle__left_small_correct',
        ],
        inactive: [
          'triangle-left-line_prev',
          'answer_inactive',
          'answer-triangle__left_small',
          '',
        ],
        active: [
          'triangle-left-line_active',
          '',
          'answer-triangle__left_small',
          '',
        ],
        next: [
          'triangle-left-line_next',
          'answer_next',
          'answer-triangle__left_small',
          '',
        ],
        default: [
          'triangle-left-line',
          '',
          'answer-triangle__left_small',
          '',
        ],
      },
      right: {
        selected: [
          'triangle-right-line',
          'triangle-right-line_selected',
          'answer-triangle__right_small',
          'answer-triangle__right_small_selected',
        ],
        wrong: [
          'triangle-right-line',
          'triangle-right-line_wrong',
          'answer-triangle__right_small',
          'answer-triangle__right_small_wrong',
        ],
        correct: [
          'triangle-right-line',
          'triangle-right-line_correct',
          'answer-triangle__right_small',
          'answer-triangle__right_small_correct',
        ],
        inactive: [
          'triangle-right-line_inactive',
          '',
          'answer-triangle__right_small',
          '',
        ],
        active: [
          'triangle-right-line_active',
          '',
          'answer-triangle__right_small',
          '',
        ],
        next: [
          'triangle-right-line_next',
          '',
          'answer-triangle__right_small',
          '',
        ],
        default: [
          'triangle-right-line',
          '',
          'answer-triangle__right_small',
          '',
        ],
      },
    },
    standart: {
      left: {
        selected: [
          'triangle-left-line-answer_selected',
          'triangle-left-line_standart_selected',
          'answer-triangle__left_standart',
          'answer-triangle__left_standart_selected',
        ],
        wrong: [
          'triangle-left-line-answer_wrong',
          'triangle-left-line_standart_wrong',
          'answer-triangle__left_standart',
          'answer-triangle__left_standart_wrong',
        ],
        correct: [
          'triangle-left-line-answer_correct',
          'triangle-left-line_standart_correct',
          'answer-triangle__left_standart',
          'answer-triangle__left_standart_correct',
        ],
        active: ["", "", "" ,""],
        next: ["", "", "" ,""],
        inactive: [
          'triangle-left-line-answer',
          '',
          'answer-triangle__left_standart',
          '',
        ],
        default: [
          'triangle-left-line-answer',
          '',
          'answer-triangle__left_standart',
          'answer_default-left',
        ],
      },
      right: {
        selected: [
          'triangle-right-line-answer_selected',
          'triangle-right-line_standart_selected',
          'answer-triangle__right_standart',
          'answer-triangle__right_standart_selected',
        ],
        wrong: [
          'triangle-right-line-answer_wrong',
          'triangle-right-line_standart_wrong',
          'answer-triangle__right_standart',
          'answer-triangle__right_standart_wrong',
        ],
        correct: [
          'triangle-right-line-answer_correct',
          'triangle-right-line_standart_correct',
          'answer-triangle__right_standart',
          'answer-triangle__right_standart_correct',
        ],
        active: ["", "", "" ,""],
        next: ["", "", "" ,""],
        inactive: [
          'triangle-right-line-answer',
          'triangle-right-line_standart',
          '',
          'answer-triangle__right_standart',
          '',
        ],
        default: [
          'triangle-right-line-answer',
          '',
          'answer-triangle__right_standart',
          'answer_default-right',
        ],
      },
    },
  };
  const [
    linePositionLeft,
    lineStyleLeft,
    triangleStyleLeft,
    triangleStateLeft,
  ] = answerState && answerTringleState[size].left[answerState];
  const [
    linePositionRight,
    lineStyleRight,
    triangleStyleRight,
    triangleStateStyleRight,
  ]: [string, string, string, string] = answerState && answerTringleState[size].right[answerState];

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
      key={genKey()}
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
      <div className={`${lineStyleState} ${linePositionState}`} key={genKey()} />
      <div
        key={genKey()}
        className={`answer-triangle ${triangleStyleState} ${triangleStateStyleState}`}
      />
    </>

  );
}
