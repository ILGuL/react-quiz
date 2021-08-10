import React from 'react'
import './ActiveQuiz.scss'
import AnswersList from './AnswersList/AnswersList'


const ActiveQuiz = props => (
    <div className="ActiveQuiz">
        <p className="Question">
            <span>
                <strong>2.</strong>&nbsp;
                {props.question}
            </span>
            <small>4 de 12</small>
        </p>

        <ul>
            <AnswersList 
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
            />
        </ul>

    </div>
)

export default ActiveQuiz
    
