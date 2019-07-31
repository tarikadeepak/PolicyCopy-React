import React, {Component} from 'react';
import Login from '../components/Login';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Image from 'react-image-resizer';
import Home from '../components/Home';
import Background from '../travelers.png'


const headerImg = {
    height: '100px',
    size:'auto',
    backgroundImage : "url(" + Background + ")",

}

export default class PolicyCopy
    extends Component{
    render() {
        return(
            <div>
                <div style={headerImg}></div>
                <Router>
                <Route exact path="/" render={() => (
                    <Redirect to="/login"/>
                )}/>    
                    <Route path='/login' component={Login} />
                    <Route path='/home' exact component={Home} />
                </Router>
            </div>
        )
    }
}
