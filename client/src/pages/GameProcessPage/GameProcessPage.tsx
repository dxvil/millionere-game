import React, {useState, useEffect} from "react";
import data from '../../data/questions.json'
import levels from '../../data/levels.json'
import Answer from '../../components/Answer/Answer'
import CurrentQuestion from './CurrentQuestion'
import "./game-process-page.css"
import delay from '../../helpers/delay'
import {contains} from '../../helpers/contains'
import useWindowSize from '../../hooks/useWindowSize'
import CloseBtn from "../../components/Mobile/CloseBtn";
import MenuBtn from "../../components/Mobile/MenuBtn";
import {Levels, Questions} from '../../types/types'
import {Question, GameProcessPage, WindowSize} from '../../interfaces/index'

const getQuestions = (): Promise<Questions>=> {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

const getLevels = (): Promise<Levels> => {
    return new Promise((resolve, reject) => {
        resolve(levels)
    })
}

const renderLevels = (levels: string[], userMoney: string): JSX.Element[] | null => {
    if(levels && Array.isArray(levels) && levels.length > 0) {
        return [...levels].reverse().map((lvl, i) => {
            let state = checkState(levels, userMoney, lvl)
            return(
                <div key={lvl}>
                <Answer
                sum={lvl}
                position={i}
                size="small"
                state={state}
                selectedAnswers={null}
                onSelectAnswer={null}
                question={null}
                correctAnswer={null}
                />
                </div>
               
            )
        })
    }
    return null;
}

const checkState = (levels: string[], activeLevel: string, level: string): string => {
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


export default function GameProcessPage({setScore, gameEnd, setGameEnd}: GameProcessPage) {
    const [questions, setQuestions] = useState<Question[] | null>(null)
    const [levels, setLevels] = useState<string[] | null>(null)
    const [gameLevel, setGameLevel] = useState<number>(0)
    const [currentGameState, setCurrentGameState] = useState<Question | null>(null)
    const [userMoney, setUserMoney] = useState<string>("")
    const [selectedAnswers, setSelectedAnswers] = useState<number[] | []>([])
    const windowSize: WindowSize  = useWindowSize();
    const [isVisibleLevels, setIsVisibleLevels] = useState<boolean>(true)
    const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false)
    
    useEffect(() => {
        setScore(userMoney)
    }, [userMoney])

    useEffect(()=> {
        if(windowSize.width > 768) {
            setIsVisibleLevels(true)
        } else {
            setIsVisibleLevels(false)
        }
        if(windowSize.width < 768) {
            setIsVisibleMenu(true)
        } else {
            setIsVisibleMenu(false)
        }
    }, [windowSize])

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
                setSelectedAnswers([])
                setCurrentGameState(null)
            }
        }, [gameEnd])

        const onSelectAnswer = (answer: number) => {
            setSelectedAnswers((sA) => [...sA, answer]);
        }

        const checkAnswer = (selectedAns: number[] | [], ans: number[] | number) => {
            let sA = selectedAns.toString().split(",")
            let a = ans.toString().split(",")
            if(sA.length === a.length) {
                return contains(sA, a)
            } else if(sA.length < a.length){
                return 'cont';
            }
            return;
        }

        useEffect(() => {
            if(levels && (gameLevel === levels.length)) {
                setGameEnd(true)
            }
            
            if(selectedAnswers && selectedAnswers.length !== 0 && currentGameState) {
                let checkedAns = checkAnswer(selectedAnswers, currentGameState.correct)
                if(checkedAns !== "cont" && checkedAns) {
                    setSelectedAnswers([])
                    setGameLevel(gameLevel + 1)
                } else if(!checkedAns) {
                    delay(6500, setGameEnd(true), null)
                }
            }
            
        }, [selectedAnswers])

    return(
        <div className="game-process-page">
        <div className="game-process-page-wrapper">
        <CurrentQuestion currentQuestion={questions && questions[gameLevel] && questions[gameLevel].question} />
        <div className="game-process-page-answers" style={{display: isVisibleLevels && windowSize.width < 768 && "none"}}>
            {isVisibleMenu && <MenuBtn setIsVisibleLevels={setIsVisibleLevels} />}
            {questions && questions[gameLevel]?.content.map((text, i) => {
            return(
                <Answer
                sum=""
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
        <div className="game-process-page-levels" style={{display: !isVisibleLevels && "none"}}>
        <CloseBtn setIsVisibleLevels={setIsVisibleLevels} />
        {renderLevels(levels, userMoney)}
        </div>
        </div>
    )
}