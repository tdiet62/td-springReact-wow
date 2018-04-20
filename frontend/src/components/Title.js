import React, {Component} from 'react';
import '../css/Title.css'

export default class Title extends Component{

    render(){
        return (
            <div className="Article-title">
                <h2> {this.props.title}</h2>
            </div>
        )
    }
}