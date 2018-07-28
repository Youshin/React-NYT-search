import React, {Component, Fragment} from 'react'
import moment from 'moment'

class SearchForm extends Component {
    constructor(){
        super();
        this.state={
            searchParams: {},
            searching: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        this.setState({
            searchParams : {
                topic: this.refs.topic.value,
                startDate: this.refs.startYear.value ? `&begin_date=${moment(new Date(this.refs.startYear.value)).format('MMDDYYYY')}`:'',
                endDate: this.refs.endYear.value ? `&end_date=${moment(new Date(this.refs.endYear.value)).format('MMDDYYYY')}`:'',
                limit: this.refs.numOfRecords.value ? this.refs.numOfRecords.value: 10
            }, function () {
                this.props.newQuery(this.state);
                this.setState({
                    searching: true
                }, ()=> setTimeout(() => 
                    this.setState({searching: null})
                , 1000))
              }
        });
    }

    render(){
        return(
            <Fragment>
                <div className='col s12'>
                    <div className='card-panel'>
                        <h3 className='header center'>Search for Article</h3>
                        <div className='row'>
                          <form className='col s12' onSubmit={this.handleSubmit}>

                            <div className='row'>
                                <div className='input-field col s12'>
                                    <i className='material-icons prefix'>Search</i>
                                    <label for='topic'>Topic</label>
                                    <input type='text' ref='topic' id='topic' required='required' className='validate' />
                                </div>
                            </div>

                            <div className='row'>
                                <div className='input-field col s12'>
                                    <i className='material-icons prefix'>List_Number</i>
                                    <select id='numOfRecords' ref='numOfRecords'>
                                        <option value='' disabled='disabled' selected= 'selected'>Choose Your Option</option>
                                        <option value='1'>1</option>
                                        <option value='5'>5</option>
                                        <option value='10'>10</option>
                                    </select>
                                </div>
                            </div>

                            <div className='row'>
                                
                            </div>

                          </form>
                        </div>
                    </div>
                </div>
            </Fragment>    
        )
    }
}