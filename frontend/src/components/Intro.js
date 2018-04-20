import React, {Component} from 'react';
import {
    NavLink
} from "react-router-dom";
import '../css/Intro.css';
import ContentfulService from './../services/contentfulService';
import Article from './Article'

class Intro extends Component {

    constructor() {
        super();
        this.state = {
            article: {},
            error: false,
            errorMessage: '',
            location:""
        };
        this.home=this.home.bind(this);
        this.getArticle=this.getArticle.bind(this);
    }

    home=()=>{
        if(this.props.location.pathname !== "/"){
            return(
                <div className="breadcrumb">
                    <NavLink to="/">Home</NavLink>
                </div>
            )
        }else{
            return(null);
        }
    }

    getArticle=() => {

        const location = this.props.location.pathname;
        if(location !== this.state.location) {
            const service = new ContentfulService();
            if (location === "/") {
                service.getArticle()
                    .then(article => {
                        this.setState(Object.assign(this.state,
                            {
                                article,
                                error: false,
                                errorMessage: '',
                                location
                            }))
                        return null;
                    })
                    .catch(error => {
                        this.setState({error: true, errorMessage: error});
                        return null;
                    });
            }
            if (location.toString().startsWith("/article")) {
                const id = location.toString().replace("/article/", '');
                service.getArticle(id)
                    .then(article => {
                        this.setState(Object.assign(this.state,
                            {
                                article,
                                error: false,
                                errorMessage: '',
                                location
                            }))
                        return null;
                    })
                    .catch(error => {
                        this.setState({error: true, errorMessage: error});
                        return null;
                    });
            }
        }
    }



    render() {
        const breadcrumb =this.home();
        this.getArticle();
        return (
            <div className="App">
                {breadcrumb}
                <Article content={this.state}/>
            </div>
        );
    }
}

export default Intro;
