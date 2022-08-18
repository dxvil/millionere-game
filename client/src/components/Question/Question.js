import React, { useEffect, useState } from "react"
import "./question.css";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

const onSizeClass = (size) => {
    switch(size){
        case "standart": 
            return ["question_standart", "question-triangle__left_standart", "question-triangle__right_standart"]
        case "small":
            return ["question_small", "question-triangle__left_small", "question-triangle__right_small"]
        default:
            return ["question_standart", "question-triangle__left_standart", "question-triangle__right_standart"]
    }
}

export const Question = ({question, position, size, questionstate, trianglestate, trianglestate2}) => {
    const [letter, setLetter] = useState("A")
    const [triangleLeftClass, setTriangleLeftClass] = useState("question-triangle__left_standart")
    const [triangleRightClass, setTriangleRightClass] = useState("question-triangle__right_standart")
    const [questionSizeClass, setQuestionSizeClass] = useState("question_standart")

    useEffect(() => {
        if(position) {
            setLetter(LETTERS[position])
        }
    }, [position])

    useEffect(() => {
       let [questionSize, left, right] = onSizeClass(size);
       setQuestionSizeClass(questionSize)
       setTriangleLeftClass(left)
       setTriangleRightClass(right)
    }, [size])

    return(
        <div id="question" className={`question ${questionSizeClass} ${questionstate}`}>
            <QuestionTriangle className={triangleLeftClass} trianglestate2={trianglestate2}/>
            <QuestionTriangle className={triangleRightClass}  trianglestate={trianglestate}/>
            <span className="question-letter">{letter}</span>
            <span className="question-value">{question}</span>
        </div>
    )
}

const QuestionTriangle = ({className, trianglestate, trianglestate2}) => {
    return(
        <div 
        className={`question-triangle ${className} ${trianglestate} ${trianglestate2}`} 
        />
    )
}