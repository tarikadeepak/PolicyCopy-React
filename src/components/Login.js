import React, {Component} from 'react'
import {Link} from "react-router-dom";
import LoginService from '../services/LoginService'

let firstName;

class Login extends Component {
    
    constructor(props){
        super(props);
        this.loginService = LoginService.instance;
        this.state={
            username:'',
            password:'',
            firstname:'',
            lastname:'',
            role:'',
        }
        this.handleClick = this.handleClick.bind(this)
    }
    render(){
        return(
            <div className='container-fluid'
                style={{marginTop:'200px', marginLeft:'500px'}}>
                <input className='text' placeholder='username' 
                onChange = {(event) => {
                    this.setState({
                        username:event.target.value
                    })
                }}/>
                <br></br>
                <br></br>
                <input className='text' placeholder='Password'
                onChange = {(event) => {
                    this.setState({
                        password:event.target.value
                    })
                }}/>
                <br></br>
                <br></br>
                <button className='btn btn-primary' type='submit'
                    onClick = {(event) => this.handleClick(event)}>Submit              
                    {/* 
                    This link is used to pass props through Link to the Home Component
                    <Link to={{pathname:'/home', 
                        state:{
                        username:this.state.username,
                        msg:'Logged In'
                    }}}>Login</Link> */}
                </button>  
                {firstName}          
            </div>
        )
    }

    handleClick = (event) => {
        this.loginService.login(this.state)
        .then(user => user.json())
        .then(user => {  
            firstName = user.firstname
            this.props.history.push({pathname:'/home', 
                state:{
                    user,
                    msg:'Logged In'
                }})
        })
    }
}

export default Login
