import React, {Component} from 'react';
import Title from './Title';
import Slug from './Slug';
import Links from './Links';
import Content from './Content'


export default class Article extends Component {

    render(){
        const {article, error, errorMessage} = this.props.content;
        if(error){
            return(
                <div>
                    <p>Article not found</p>
                    <p>{errorMessage}</p>
                </div>
            )
        }else {
            return (
                <div>
                    <Title title={article.title}/>
                    <Links modules={article.modules}/>
                    <Slug shortDescription={article.shortDescription} />
                    <Content longText={article.longText}/>
                </div>
            )
        }
    }

}
