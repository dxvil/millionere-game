export interface GameBtn {
    text: string,
    setGameEnd: Function,
    setStartGame: Function
  }

export interface AnswerTriangle {
    linePositionState: string,
    lineStyleState: string,
    triangleStyleState: string,
    triangleStateStyleState: string
}

export interface AnswerProps  {
    sum: string,
    question: string | null,
    position: number,
    size: string,
    state: string,
    selectedAnswers: number | number[] | any,
    correctAnswer: number | number[] | any,
    onSelectAnswer:Function | any,
}

export interface Header {
    size: string,
    text: string
}

export interface CloseBtn {
    setIsVisibleLevels: Function
}

export interface MenuBtn {
    setIsVisibleLevels: Function
}

export interface GamePage {
    gameEnd: boolean, 
    headerText: string,
    btnTxt: string,
    subHeaderText: string,
    setGameEnd: Function,
    setStartGame: Function
}
  
export interface CurrentQuestion { 
    currentQuestion: string
}

export interface Question {
    question: string,
    content: string[],
    correct: number | number[]
}

export interface GameProcessPage {
    setScore: Function | any,
    gameEnd: boolean,
    setGameEnd: Function | any
}

export interface WindowSize {
    width: number,
    height: number
  }