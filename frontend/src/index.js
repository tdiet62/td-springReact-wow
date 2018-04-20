import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Intro from './components/Intro';
import Header from './components/Header';
import Footer from './components/Footer'
import {
    Route,
    BrowserRouter
} from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

class Base extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Header/>
                    <Route exact path="/" component={Intro}/>
                    <Route path="/article" component={Intro}/>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}


ReactDOM.render(<Base/>, document.getElementById('root'));
registerServiceWorker();
