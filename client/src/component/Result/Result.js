import React, {Component} from 'react';
import API from '../../utils/api';
import SingleResult from '../SingleResult/SingleResult'

class Result extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let articleResults = [];
        if(this.props.Result.articles.length >0){
            articleResults = this.props.Result.articles.map(article =>{
                <SingleResult title={article.title}
                    url={article.url}
                    date={article.date}
                    id={article.articleId}
                    key={article.articleId}
                    image = {`${article.image? 'https://static01.nyt.com/'+article.image.url 
                            : 'https://place-hold.it/150*150/grey'}`}    
                />
            })
        }
    
    return(
        <div>
        {this.props.Result.articles.length>0? (
            <div>
                <div className='panel panel-primary'>
                    <div className='panel-heading'>
                        <h3 className='panel-title'>
                            <strong><i className='fa fa-table'>Article Results</i></strong>
                        </h3>
                    </div>
                    <div className='panel-body' id='well-section'>
                        <ol className='collection with-header'>
                            {articleResults}
                        </ol>
                    </div>
                </div>
            </div>
        )
            :<div>Searching result start from here</div>}
        </div>
    )
    }
}

export default Result;