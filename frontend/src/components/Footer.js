import React, {Component} from 'react';
import '../css/Footer.css'

export default class Footer extends Component {
    render(){
        const year = new Date().getFullYear()
        return(
            <footer className='Footer'>
                <div className="Footer-content">
                All content copyright Capgemini {year}.
                </div>
            </footer>
        )
    }
}