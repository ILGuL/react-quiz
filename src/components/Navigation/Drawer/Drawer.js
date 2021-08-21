import React, {Component} from 'react'
import './Drawer.scss'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { NavLink } from 'react-router-dom'

class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose()
    }

    renderLinks(links){
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName="active"  
                        onClick={this.clickHandler}                      
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {

        const clsDrawer = ["Drawer"]

        if (!this.props.isOpen) {
            clsDrawer.push('close')
        }

        const links = [
            {to: '/', label: 'La lista', exact: true}
        ]

        if (this.props.isAuthenticated) {
            links.push({to: '/quiz_creator', label: 'Crear una prueba', exact: false})
            links.push({to: '/logout', label: 'Salir', exact: false})
        } else {
            links.push({to: '/auth', label: 'Autorización', exact: false})
        }

        return (
            <React.Fragment>
                <nav className={clsDrawer.join(' ')}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
            </React.Fragment>
            
        )
    }
}

export default Drawer