import React, {Component} from 'react'
import API from '../../utils/api'

class SavedResult extends Component {
    constructor (){
        super();
        this.state={
            deleted: false
        }
        this.delete = this.delete.bind(this);
    }
    delete() {
        this.setState({ deleted: true }, () => {
            this.props.onDelete(this.props.articleId);
        })
    }
    render(){
        return(
            <li className='collection-item'>
                <img className='img-fluid img-thumbnail rounded right' src={this.props.image} />
                <strong>Title: </strong>{this.props.title}
                <strong>URL: </strong><a href={this.props.url}>{this.props.url}</a>
                {this.props.date? (<strong>{`Date: ${this.props.date}`}</strong>):''}
                <strong>ID: </strong>{this.props.articleId}
                {this.state.deleted? (<button id={this.props.id} className='btn btn-primary right-align'>Article Deleted</button>)
                    :(<button id={this.props.id} onClick={this.delete} className='btn btn-success right-align'>Delete</button>)}
            </li>
        )
    }
}

