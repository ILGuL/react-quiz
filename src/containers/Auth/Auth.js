import React, { Component } from 'react'
import './Auth.scss'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

export default class Auth extends Component {

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = event => {
        event.preventDefault()
    }

    render() {
        return (
            <div className="Auth">
                <div>
                    <h1>Autorización</h1>

                    <form onSubmit={this.submitHandler} className="AuthForm">
                       
                       <Input label="Email"/>

                       <Input 
                        label="Contraseña" 
                        errorMessage={'TEST'}
                       />

                        <Button 
                            type="success" 
                            onClick={this.loginHandler}
                        >
                            Entrar
                        </Button>

                        <Button 
                            type="primary" 
                            onClick={this.registerHandler}
                        >
                            Registrarse
                        </Button>

                    </form>
                </div>
                
            </div>
        )
    }
}
