import React from "react";
import { Answer } from "../components/Answer/Answer";

export const AnswerComponentReview = () => {
    return(
        <div style={{padding: "50px"}}>
            <Answer sum="sum_prev" 
            question="3000$" 
            state="next"
            size="small"/>
            <Answer
            question="2000$" 
            state="active"
            size="small"/>
            <Answer sum="sum_prev" 
            question="1000$" 
            state="inactive"
            size="small"/>
            <Answer 
            question="some text some"
            position={0} 
            size="small"
            state='default'
            />
            <Answer 
            question="some text some"
            position={0} 
            size="small"
            state='correct'
            />
            <Answer 
            question="some text some"
            position={0} 
            state="selected"
            size="small"/>
             <Answer 
            question="some text some"
            position={0} 
            state='wrong'
            size="small"/>
            <Answer 
            question="some text some"
            position={0} 
            size="standart"
            state='default'
            />
            <Answer 
            question="some text some"
            position={0} 
            size="standart"
            state='correct'
            />
            <Answer 
            question="some text some"
            position={0} 
            state="selected"
            size="standart"/>
             <Answer 
            question="some text some"
            position={0} 
            state='wrong'
            size="standart"/>
        </div>
    )
}