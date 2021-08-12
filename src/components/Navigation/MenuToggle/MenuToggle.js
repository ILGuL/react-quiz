import React from 'react'
import './MenuToggle.scss'

const MenuToggle = props => {

    const clsToggle = [
        "MenuToggle",
        'fa'
    ]

    if (props.isOpen){
        clsToggle.push('fa-times')
        clsToggle.push('open')
    } else {
        clsToggle.push('fa-bars')
    }

    return (
        <i 
            className={clsToggle.join(' ')}
            onClick={props.onToggle}
        />
    )
}

export default MenuToggle