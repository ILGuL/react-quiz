import React, { Component } from 'react'
import './QuizList.scss'
import { NavLink } from 'react-router-dom'

export default class QuizList extends Component {

    renderQuizes() {
        return [1, 2, 3].map((quiz, index)=> {
            return (
                <li key={index}>
                    <NavLink to={'/quiz/' + quiz}>
                        La prueba {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="QuizList">
                <div>
                    <h1>La lista de las pruebas</h1>
                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>
                                
            </div>
        )
    }
}