import React from "react";
import './assets/styles/normalize.css'

import { Question } from "./components/Question/Question";
export  const App = () => {
    return(
        <div>
            <Question 
            question="some text" 
            position={0} 
            questionstate="question_selected" 
            trianglestate2="question-triangle__left_small_selected"
            trianglestate="question-triangle__right_small_selected"
            size="small"/>
            <Question 
            question="some text" 
            position={0} 
            questionstate="question_correct" 
            trianglestate2="question-triangle__left_small_correct"
            trianglestate="question-triangle__right_small_correct"
            size="small"/>
            <Question 
            question="some text" 
            position={0} 
            questionstate="question_wrong" 
            trianglestate2="question-triangle__left_small_wrong"
            trianglestate="question-triangle__right_small_wrong"
            size="small"/>
            <Question 
            question="some text some"
            position={0} 
            trianglestate2="question-triangle__left_standart_wrong"
            trianglestate="question-triangle__right_standart_wrong"
            questionstate="question_wrong"
            size="standart"/>
            <Question 
            question="some text some"
            position={0} 
            trianglestate2="question-triangle__left_standart_selected"
            trianglestate="question-triangle__right_standart_selected"
            questionstate="question_selected"
            size="standart"/>
             <Question 
            question="some text some"
            position={0} 
            trianglestate2="question-triangle__left_standart_correct"
            trianglestate="question-triangle__right_standart_correct"
            questionstate="question_correct"
            size="standart"/>
        </div>
    )
}
