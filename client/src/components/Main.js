import React, {Component} from 'react'
import Saved from './Saved'
import Search from './Search'
import Results from './Results'
import API from '../utils/api'

class App extends Component {
    state = {
        topic: '',
        startDate: '',
        endDate: '',
        articles: [],
        saved: []
    };
    componentDidMount(){
        this.getSavedArticles()
    }
    getSavedArticles = ()=>{
        API.getArticle()
            .then((res) =>{
                this.setState({saved: res.data})
            })
    }

    handleTopicChange =(event) =>{
        this.setState({topic: event.target.value});
    }
    handleStartDateChange = (event) =>{
        this.setState({startDate: event.target.value});
    }
    handleEndDateChange =(event) =>{
        this.setState({endDate: event.target.value});
    }
    handleFormSubmit =(event) =>{
        event.preventDefault();
        API.searchNYT(this.state.topic, this.state.startDate, this.state.endDate)
            .then((res) =>{
                this.setState({articles: res.data.response.docs});
            })
    }

    handleSaveButton =(id) =>{
        const findArticleByID = this.state.articles.find((el) => el._id === id)
        const newSave = {title: findArticleByID.headline.main, date: findArticleByID.pub_date, url: findArticleByID.web_url}
        API.saveArticle(newSave)
            .then(this.getSavedArticles())
    }

    handleDeleteButton =(id) =>{
        API.deleteArticle(id) 
            .then(this.getSavedArticles())
    }

    renderArticles = ()=>{
        return this.state.articles.map(article =>(
            <Results 
                _id={article._id}
                key={article._id}
                title={article.headline.main}
                date={article.pub_date}
                url={article.web_url}
                handleSaveButton={this.handleSaveButton}
                getSavedArticles={this.getSavedArticles}    
            />
        ));
    }

    renderSaved =() =>{
        return this.state.saved.map(save =>(
            <Saved 
                _id={save._id}
                key={save._id}
                title={save.title}
                date={save.date}
                url={save.url}
                handleDeleteButton={this.handleDeleteButton}
                getSavedArticles={this.getSavedArticles}
            />
        ));
    }

    render(){
        return (
        <div className="main-container">
            <div className="container">
              <div className="jumbotron">
                <h1 className="text-center">
                  <strong>New York Times Article Search</strong>
                </h1>
                <h3 className="text-center">
                  <strong>Search and Save interested articles</strong>
                </h3>
              </div>

              <Search />

              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="panel panel-primary">
                      <div className="panel-heading">
                        <h3 className="panel-title">
                          <strong>
                            <i className="fa fa-download" aria-hidden="true" />Saved Articles
                          </strong>
                        </h3>
                      </div>
                      <div className="panel-body">
                        <ol className="list-group">
                          {this.renderSaved()}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <footer>
                <hr />
                <p className="pull right">
                  <i className="fa fa-github" aria-hidden="true" /> <a href="https://github.com/xhrsteven/React-NYT-search">
                    Reference
                  </a>
                </p>
              </footer>
            </div>
          </div>
        )}
    
}

export default Main;