import React from 'react'
import {BroserRouter as Router, Route} from 'react-router-dom';
import './App.css'
import Main from './components/Main'

const App = () =>
    <Router>
        <div>
            <Route path='/' component={Main}/>
        </div>
    </Router>

export default App;