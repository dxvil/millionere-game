import { AnswerTriangleStates } from "../../types/interfaces"


export const TriangleSmallLeft: AnswerTriangleStates = {
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
}

export const TriangleSmallRight: AnswerTriangleStates = {
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
}

export const TriangleStandartLeft: AnswerTriangleStates = {
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
}
export const TriangleStandartRight: AnswerTriangleStates = {
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
}