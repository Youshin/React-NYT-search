import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (<div>
                    <nav className="nav-wrapper">
                <ul id='nav-mobile' className="right hide-on-med-and-down">
                            <li>
                            <a href="#" className="brand-logo center">
                                New York Times Article Search
                            </a>
                            </li>
                            <li><a onClick={()=>window.location.replace('/')}>Home</a></li>
                            <li>
                            <NavLink to='/saved'>Saved</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>);
    }
}

export default Nav;


