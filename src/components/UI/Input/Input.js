import React from 'react'
import './Input.scss'

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {

    const inputType = props.type || 'text'

    const clsInput = ["Input"]

    const htmlFor = `${inputType}-${Math.random()}`

    if(isInvalid(props)) {
        clsInput.push('invalid')
    }

    return (
        <div className={clsInput.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />

            {
                isInvalid(props) 
                    ? <span>{props.errorMessage || 'Introduzca el valor correcto'}</span>
                    : null                 
            }
                
            
        </div>
    )
}

export default Input