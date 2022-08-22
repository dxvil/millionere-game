import React, {useState, useEffect} from "react";
import data from '../../data/questions.json'
import {Answer} from '../../components/Answer/Answer'
import {Header} from '../../components/Header/Header'
const getQuestions = () => {
    return data;
}

const renderAnswer = (data, level) => {
    if(data && Array.isArray(data) && data.length > 1) {
        return data[level].content.map((text, i) => {
            return(
                <Answer 
                question={text}
                position={i} 
                size="standart"
                state='default'
                />
            )
        })
    }
    return null;
}
export const GameProcessPage = () => {
    const [questions, setQuestions] = useState([])
    const [gameLevel, setGameLevel] = useState(1)

    useEffect(() => {
        let ques = getQuestions();
        setQuestions(ques.questions)
    }, [])

    return(
        <div className="game-process-page">
        <div className="game-process-page-question">
        {questions && gameLevel && <Header size="mid" text={questions[gameLevel].question ?? ""} />}
        </div>
        <div className="game-process-page-answers">
        {renderAnswer(questions, gameLevel)}
        </div>
            
        </div>
    )
}