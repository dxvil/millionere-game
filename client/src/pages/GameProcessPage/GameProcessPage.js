import React, {useState, useEffect} from "react";
import data from '../../data/questions.json'
import levels from '../../data/levels.json'
import {Answer} from '../../components/Answer/Answer'
import {Header} from '../../components/Header/Header'
import "./game-process-page.css"

const getQuestions = () => {
    return data;
}

const getLevels = () => {
    return levels;
}
const renderAnswer = (data, level, onSelectAnswer, state, indexOfState, disabled) => {
    if(data && Array.isArray(data) && data.length > 0) {
        return data[level].content.map((text, i) => {
            if(indexOfState === i){
                return(
                    <Answer 
                    disabled={disabled}
                    onSelectAnswer={onSelectAnswer}
                    question={text}
                    position={i} 
                    size="standart"
                    state={state}
                    />
                )
            }
            return(
                <Answer 
                disabled={disabled}
                onSelectAnswer={onSelectAnswer}
                question={text}
                position={i} 
                size="standart"
                state={state && indexOfState && indexOfState === i ? state : "default"}
                />
            )
        })
    }
    return null;
}

const renderLevels = (levels, userMoney) => {
    if(levels && Array.isArray(levels) && levels.length > 0) {
        return levels.sort((a, b) => 
        ((+b.replace("$", "").replaceAll(",", "")) - (+a.replace("$", "").replaceAll(",", "")))
        ).map((lvl, i) => {
            let state = checkState(levels, userMoney, lvl)
            return(
                <Answer 
                sum={lvl}
                position=""
                size="small"
                state={state}
                />
            )
        })
    }
    return null;
}

const checkState = (levels, activeLevel, level) => {
    let indexOfActiveLevel = levels.indexOf(activeLevel)
    let indexOfLevel = levels.indexOf(level)
    if(indexOfActiveLevel === indexOfLevel) {
        return "active"
    }
    if(indexOfActiveLevel < indexOfLevel) {
        return "inactive"
    } 
    if(indexOfActiveLevel > indexOfLevel) {
        return "next"
    }
}
export const GameProcessPage = () => {
    const [questions, setQuestions] = useState([])
    const [levels, setLevels] = useState([])
    const [gameLevel, setGameLevel] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState("")
    const [userMoney, setUserMoney] = useState()
    const [correctAnswers, setCorrectAnswers] = useState()
    const [selectedAnswers, setSelectedAnswers] = useState()
    const [answerState, setAnswerState] = useState()
    const [disabled, setDisabled] = useState(false)
    useEffect(() => {
        let ques = getQuestions();
        setQuestions(ques.questions)
    }, [])

    useEffect(() => {
        let lvls = getLevels()
        setLevels(lvls.levels)
    }, [])

    useEffect(() => {
        if(questions && questions.length > 0) {
            setCurrentQuestion(questions[gameLevel].question)
        }
    }, [questions])

  useEffect(() => {
        if(questions && questions.length > 0) {
            setCorrectAnswers(questions[gameLevel].correct)
        }
    }, [questions])

    useEffect(() => {
        if(levels && levels.length > 0) {
            setUserMoney(levels[gameLevel])
        }
    }, [levels])

    const onSelectAnswer = (answer) => {
        return setSelectedAnswers(answer);
    }

    const onAnswerChecked = (state) => {
        setTimeout(() => {
            setAnswerState(state)
        }, 500);
    }
   
    useEffect(() => {
        if(correctAnswers === selectedAnswers) {
           onAnswerChecked("correct")
        } else {
            onAnswerChecked("wrong")
        }

        return () => {
            clearTimeout(onAnswerChecked)
        }
    }, [selectedAnswers])

    return(
        <div className="game-process-page">
        <div className="game-process-page-wrapper">
        <div className="game-process-page-question">
            {currentQuestion && <Header size="mid" text={currentQuestion} />}
        </div>
        <div className="game-process-page-answers">
            {renderAnswer(questions, gameLevel, onSelectAnswer, answerState, selectedAnswers, disabled)}
        </div>
        </div>
        <div className="game-process-page-levels">
        {userMoney && renderLevels(levels, userMoney)}
        </div>
        </div>
    )
}