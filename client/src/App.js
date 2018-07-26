import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home'
import Saved from './pages/Saved'

class App extends Component {
    render(){
        return (
            <Router>
                <div>
                    <switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/Saved' component={Saved} />
                    </switch>
                </div>
            </Router>
        )
    }
}

export default App;

