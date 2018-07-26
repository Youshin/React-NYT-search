import React, {Component} from 'react';
import API from '../../utils/api';
import './SingleResult.css'

class SingleResult extends Component {
    constructor(){
        super();
        this.state ={
            saved: false
        }
        this.save = this.save.bind(this);
    }
    save(){
        API.saveArticle({
            articleId: this.props.id,
            url: this.props.url,
            title: this.props.title,
            date: this.props.date,
            image: this.props.image
        }).then(this.setState({
            saved: true
        }));
    }
    render(){
        return(
            <li className='collection-item'>
                <img className='img-fluid img-thumbnail rounded right' src={this.props.image}/>
                <strong>Title: </strong>{this.props.title}
                <strong>URL: </strong><a href={this.props.url} target='_blank'>{this.props.url}</a>
                {this.props.date? (<strong>{`Date: ${this.props.date}`}</strong>): ''}
                <strong>ID: </strong> {this.props.id}
                {this.state.saved? (<button id={this.props.id} className='btn btn-success right-align'>Article Saved</button>)
                    :(<button id={this.props.id} onClick={this.save} className='btn btn-primary right-align'>Save</button>)}
            </li>
        )
    }
}

export default SingleResult;
