import React, {Component} from 'react'
import './Quiz.scss' 
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import axios from '../../Axios/Axios-quiz'
import Loader from '../../components/UI/Loader/Loader'

class Quiz extends Component {

    state = {
        results: {},
        activeQuestion: 0,
        isFinished: false,
        answerState: null,
        quiz: [],
        loading: true
    }

    // state = {
    //     results: {},
    //     activeQuestion: 0,
    //     isFinished: false,
    //     answerState: null,
    //     quiz: [
    //         {
    //             question: '¿De dónde le viene el nombre al mesón de "Caballo blanco"?',
    //             rightAnswerId: 4,
    //             id: 1,
    //             answers: [
    //                 {text: 'De la mascota del dueño del mesón', id:1},
    //                 {text: 'Era el establo real', id:2},
    //                 {text: 'Era el nombre de una antigua posada medieval', id:3},
    //                 {text: 'De una antigua estatua hecha en mármol', id:4}
    //             ]
    //         },
    //         {
    //             question: '¿Quién fue Arnaldo Barbazán?',
    //             rightAnswerId: 3,
    //             id: 2,
    //             answers: [
    //                 {text: 'Un obispo', id:1},
    //                 {text: 'Un escritor', id:2},
    //                 {text: 'Un general vascón', id:3},
    //                 {text: 'El primer alcalde de Pamplona', id:4}
    //             ]
    //         }
    //     ]
    // }

    onAnswerClickHandler = (answerId) => {  
        
        if(this.state.answerState){
            const key= Object.keys(this.state.answerState)[0]
            if(this.state.answerState[key] === 'success'){
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        if (question.rightAnswerId === answerId) {

            if (!results[question.id]){
                results[question.id] = 'success'
            }

            this.setState({
                answerState:{[answerId]: 'success'},
                results: results
            })
            
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState ({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000) 
        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results: results
            })
        }        
    }

    isQuizFinished(){
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    async componentDidMount() {
        try {
            const response = await axios.get(`/quizes/${this.props.match.params.id}.json`)
            const quiz = response.data

            this.setState({
                quiz,
                loading: false
            })
        }catch(e){
            console.log(e)
        }
    }

    render() {
        return (
            <div className="Quiz">                
                <div className="QuizWrapper">
                    <h1>Responde a todas preguntas</h1>

                    {
                        this.state.loading
                            ? <Loader />
                            : this.state.isFinished
                            ? <FinishedQuiz 
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                                />
                            : <ActiveQuiz 
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }                  
                </div>
            </div>
        )
    }    
}

export default Quiz
