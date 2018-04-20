import React, {Component} from 'react';
import Markdown from 'react-remarkable';

import '../css/Content.css'

export default class Content extends Component {

    render(){
        return(
            <div className="text-content">
                <Markdown source={this.props.longText}/>

            </div>
        )
    }
}