import React from 'react'
import './FinishedQuiz.scss'
import Button from '../UI/Button/Button'

const FinishedQuiz = props => {

    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success'){
            total++
        }
        return total
    }, 0)

    return (
        <div className="FinishedQuiz">
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times + error' : 'fa-check + success',
                        [props.results[quizItem.id]]
                    ]

                    return (
                        <li
                            key={index}
                        >
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })}
            </ul>
            <p>Respondas correctas son {successCount} de {props.quiz.length}</p>

            <div>
                {/* <button onClick={props.onRetry}>Repetir</button> */}
                <Button onClick={props.onRetry} type="primary">Repetir</Button>
                <Button type="successBtn">Ir a la lista de pruebas</Button>
            </div>
        </div>
    )
}

export default FinishedQuiz
