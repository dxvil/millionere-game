import React, {useState, useEffect, useRef} from "react";
import data from '../../data/questions.json'
import levels from '../../data/levels.json'
import {Answer} from '../../components/Answer/Answer'
import {CurrentQuestion} from './CurrentQuestion'
import "./game-process-page.css"
import {delay} from '../../helpers/delay'

const getQuestions = () => {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

const getLevels = () => {
    return new Promise((resolve, reject) => {
        resolve(levels)
    })
}

const renderLevels = (levels, userMoney) => {
    if(levels && Array.isArray(levels) && levels.length > 0) {
        return [...levels].reverse().map((lvl, i) => {
            let state = checkState(levels, userMoney, lvl)
            return(
                <div key={lvl}>
                <Answer
                sum={lvl}
                position=""
                size="small"
                state={state}
                />
                </div>
               
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
    if(indexOfActiveLevel > indexOfLevel) {
        return "inactive"
    } 
    if(indexOfActiveLevel < indexOfLevel) {
        return "next"
    }
}
export const GameProcessPage = ({setScore, gameEnd, setGameEnd}) => {
    const [questions, setQuestions] = useState(null)
    const [levels, setLevels] = useState(null)
    const [gameLevel, setGameLevel] = useState(0)
    const [currentGameState, setCurrentGameState] = useState(null)
    const [userMoney, setUserMoney] = useState(null)
    const [selectedAnswers, setSelectedAnswers] = useState(null)

    useEffect(() => {
        setScore(userMoney)
    }, [userMoney])

    useEffect(() => {
        if(levels && levels.length !== 0) {
            setGameLevel(0)
            setUserMoney(levels[0])
        }
        
    }, [levels])

    useEffect(() => {
        getQuestions().then((ques) => {
            setQuestions(ques.questions)
        })
    }, [])

    useEffect(() => {
        getLevels().then((lvls) => {
            setLevels(lvls.levels)
        })
    }, [])

    useEffect(() => {
        if(questions && !currentGameState) {
            setCurrentGameState({...questions[0]})
        }
    }, [questions])

    useEffect(() => {
        if(levels && questions) {
            setUserMoney(levels[gameLevel])
            setCurrentGameState(questions[gameLevel])
        }
       
    }, [gameLevel])

        useEffect(() => {
            if(gameEnd){
                setGameLevel(0)
                setSelectedAnswers()
                setCurrentGameState()
            }
        }, [gameEnd])

        const onSelectAnswer = (answer) => {
            setSelectedAnswers(answer);
        }

        useEffect(() => {
            if(currentGameState && selectedAnswers >= 0 && (currentGameState.correct === selectedAnswers)) {
                setSelectedAnswers(null)
                delay(5000, setGameLevel(gameLevel + 1))
            } else if(currentGameState && selectedAnswers >= 0  && (currentGameState.correct !== selectedAnswers)){
                setGameEnd(true)
            }

            return () => {
                clearTimeout(delay)
            }
        }, [selectedAnswers])


    return(
        <div className="game-process-page">
        <div className="game-process-page-wrapper">
        <CurrentQuestion currentQuestion={questions && questions[gameLevel] && questions[gameLevel].question} />
        <div className="game-process-page-answers">
            {questions && questions[gameLevel]?.content.map((text, i) => {
            return(
                <Answer
                key={i}
                selectedAnswers={selectedAnswers}
                correctAnswer={currentGameState?.correct}
                onSelectAnswer={onSelectAnswer}
                question={text}
                position={i}
                size="standart"
                state={"default"}
                />
            )}
            )}
        </div>
        </div>
        <div className="game-process-page-levels">
        {renderLevels(levels, userMoney)}
        </div>
        </div>
    )
}