import React, {Component} from 'react';
import '../css/Slug.css'

export default class Slug extends Component{


    render(){
        return(
            <div className="slug">
                {this.props.shortDescription}
            </div>
        )
    }

}