import React, {Component} from 'react';
import Login from '../components/Login';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Home from '../components/Home';

export default class PolicyCopy 
    extends Component{
    render() {
        return(
            <div className="container-fluid">                
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