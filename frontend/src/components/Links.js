import React, {Component} from 'react';
import {
    NavLink
} from "react-router-dom";
import '../css/Links.css'


export default class Links extends Component {
    constructor(){
        super();
        this.renderLinks=this.renderLinks.bind(this);
    }




    renderLinks=(modules)=>{
        if(modules){
            return(
                modules.map((module)=>{
                    const link = "/article/"+module.id;
                    return <div key={module.id} className="content-link"><NavLink key={module.id} to={link}>{module.title}</NavLink></div>
                })
            )}
    }

    render(){
        const links = this.renderLinks(this.props.modules);
        if(this.props.modules){
        return(
            <div className="LinkBox">
                <h4>Additional Content</h4>
                {links}
            </div>
        )}else{
            return(null);
        }
    }
}