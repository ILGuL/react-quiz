import React from 'react'
import './Button.scss'

const Button = props => {

    const clsButton = [
        "Button",
        [props.type]
    ]

    return (
        <button
            onClick={props.onClick}
            className={clsButton.join(' ')}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}



export default Button