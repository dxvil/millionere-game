import React, { useEffect, useState } from "react"
import "./assets/index.css";
import "./assets/triangles/triangle-left.css"
import "./assets/triangles/triangle-right.css"

const LETTERS = ["A", "B", "C", "D", "E", "F"];

const onSizeClass = (size) => {
    switch(size){
        case "standart": 
            return "answer_standart"
        case "small":
            return "answer_small"
        default:
            return "answer_standart"
    }
}

const onStateClass = (state) => {
    switch(state){
        case "correct": 
            return "answer_correct"
        case "selected":
            return "answer_selected"
        case "wrong":
            return "answer_wrong"
        case "inactive": 
            return "answer_inactive"
        case "active":
            return "answer_active"
        case "next":
            return "answer_next"
        default: 
            return ""
    }
}

export const Answer = ({sum, question, position, size, state}) => {
    const [letter, setLetter] = useState("A")
    const [answerSizeClass, setAnswerSizeClass] = useState("answer_standart")
    const [answerStateClass, setAnswerStateClass] = useState("")

    useEffect(() => {
        if(position) {
            setLetter(LETTERS[position])
        }
    }, [position])

    useEffect(() => {
            let answerSize = onSizeClass(size);
            setAnswerSizeClass(answerSize)
    }, [size])

    useEffect(() => {
        if(state){
            let answerState = onStateClass(state)
            setAnswerStateClass(answerState)
        }
    }, [state])

    return(
        <div id="answer" className={`answer ${answerSizeClass} ${answerStateClass}`}>
            <AnswerTriangle sum={sum} size={size} side="left" state={state}/>
            <AnswerTriangle sum={sum} size={size} side="right" state={state}/>
            {letter && <span className="answer-letter">{letter}</span>}
            <span className="answer-value">{question}</span>
        </div>
    )
}

const AnswerTriangle = ({size, state, side, sum = ""}) => {
    const answerTringleState = {
        "small": {
            "left": {
                "selected": [
                    "triangle-left-line",
                    "triangle-left-line_selected",
                    "answer-triangle__left_small",
                    "answer-triangle__left_small_selected",
                ],
                "wrong": [
                    "triangle-left-line",
                    "triangle-left-line_wrong",
                    "answer-triangle__left_small",
                    "answer-triangle__left_small_wrong",
                ],
                "correct": [
                    "triangle-left-line",
                    "triangle-left-line_correct",
                    "answer-triangle__left_small",
                    "answer-triangle__left_small_correct",
                ],
                "inactive": [
                    "triangle-left-line",
                    "answer_inactive",
                    "answer-triangle__left_small",
                    ""
                ],
                "active": [
                    "triangle-left-line_active",
                    "",
                    "answer-triangle__left_small",
                    ""
                ],
                "next": [
                    "triangle-left-line",
                    "answer_next",
                    "answer-triangle__left_small",
                    ""
                ],
                "sum_prev": [
                    "triangle-left-line_prev",
                    "",
                    "triangle-sum_prev",
                    ""
                ],
                "sum_current": [
                    "triangle-left-line_current",
                    "",
                    "triangle-sum_current",
                    ""
                ],
                "sum_next": [
                    "triangle-left-line_next",
                    "",
                    "triangle-sum_next",
                    ""
                ], 
                "default": [
                    "triangle-left-line",
                    "",
                    "answer-triangle__left_small",
                    ""
                ]
            },
            "right": {
                "selected": [
                    "triangle-right-line",
                    "triangle-right-line_selected",
                    "answer-triangle__right_small",
                    "answer-triangle__right_small_selected",
                ],
                "wrong": [
                    "triangle-right-line",
                    "triangle-right-line_wrong",
                    "answer-triangle__right_small",
                    "answer-triangle__right_small_wrong",
                ],
                "correct": [
                    "triangle-right-line",
                    "triangle-right-line_correct",
                    "answer-triangle__right_small",
                    "answer-triangle__right_small_correct",
                ],
                "inactive": [
                    "triangle-right-line_prev",
                    "",
                    "answer-triangle__right_small",
                    ""
                ],
                "active": [
                    "triangle-right-line_active",
                    "",
                    "answer-triangle__right_small",
                    ""
                ],
                "next": [
                    "triangle-right-line_next",
                    "",
                    "answer-triangle__right_small",
                    ""
                ],
                "sum_prev": [
                    "triangle-right-line_prev",
                    "",
                    "triangle-sum_next",
                    ""
                ],
                "default": [
                    "triangle-right-line",
                    "",
                    "answer-triangle__right_small",
                    ""
                ]
            }
        },
        "standart": {
            "left": {
                "selected": [
                    "triangle-left-line-answer_selected",
                    "triangle-left-line_standart_selected",
                    "answer-triangle__left_standart",
                    "answer-triangle__left_standart_selected"
                ],
                "wrong": [
                    "triangle-left-line-answer_wrong",
                    "triangle-left-line_standart_wrong",
                    "answer-triangle__left_standart",
                    "answer-triangle__left_standart_wrong"
                ],
                "correct": [
                    "triangle-left-line-answer_correct",
                    "triangle-left-line_standart_correct",
                    "answer-triangle__left_standart",
                    "answer-triangle__left_standart_correct"
                ],
                "inactive": [
                    "triangle-left-line-answer",
                    "",
                    "answer-triangle__left_standart",
                    ""
                ],
                "default": [
                    "triangle-left-line-answer",
                    "",
                    "answer-triangle__left_standart",
                    ""
                ]
            },
            "right": {
                "selected": [
                    "triangle-right-line-answer_selected",
                    "triangle-right-line_standart_selected",
                    "answer-triangle__right_standart",
                    "answer-triangle__right_standart_selected"
                ],
                "wrong": [
                    "triangle-right-line-answer_wrong",
                    "triangle-right-line_standart_wrong",
                    "answer-triangle__right_standart",
                    "answer-triangle__right_standart_wrong"
                ],
                "correct": [
                    "triangle-right-line-answer_correct",
                    "triangle-right-line_standart_correct",
                    "answer-triangle__right_standart",
                    "answer-triangle__right_standart_correct"
                ],
                "inactive": [
                    "triangle-right-line-answer",
                    "triangle-right-line_standart",
                    "",
                    "answer-triangle__right_standart",
                    ""
                ],
                "default": [
                    "triangle-right-line-answer",
                    "",
                    "answer-triangle__right_standart",
                    ""
                ]
            }
        }
    }
    const [linePosition, lineStyle, triangleStyle, triangleStateStyle] = answerTringleState[size][side][state]
    const [sumStyle, setSumStyle] = useState("")

    useEffect(() => {
    if(sum) {
        let [sumStyles] = answerTringleState[size][side][sum];
        setSumStyle(sumStyles)
    }
    }, [sum])
    
    return(
        <>
        <div className={`${sumStyle} ${!sumStyle && lineStyle} ${!sumStyle && linePosition}`}/>
         <div 
        className={`answer-triangle ${triangleStyle} ${triangleStateStyle}`} 
        />
        </>
       
    )
}