import React, {Component} from 'react';

import '../css/Header.css';
import logo from '../images/logo.svg';

class Header extends Component {

    render() {
        return (
            <header>
                <img src={logo} className="Header-logo" alt="logo"/>
                <span className="Header">
                <h1 className="Headertitle">Capgemini Ways of Working</h1>
                </span>
            </header>
        )
    }
}

export default Header;