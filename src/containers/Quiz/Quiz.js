import React, {Component} from 'react'
import './Quiz.scss' 
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {

    state = {
        quiz: [
            {
                question: '¿De dónde le viene el nombre al mesón de "Caballo blanco"?',
                rightAnswerId: 4,
                answers: [
                    {text: 'De la mascota del dueño del mesón', id:1},
                    {text: 'Era el establo real', id:2},
                    {text: 'Era el nombre de una antigua posada medieval', id:3},
                    {text: 'De una antigua estatua hecha en mármol', id:4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log('AnswerId: ', answerId )
    }

    render() {
        return (
            <div className="Quiz">                
                <div className="QuizWrapper">
                    <h1>Responde a todas preguntas</h1>
                    <ActiveQuiz 
                        answers={this.state.quiz[0].answers}
                        question={this.state.quiz[0].question}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>
        )
    }    
}

export default Quiz
