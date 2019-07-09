import React, {Component} from 'react'
import FileService from '../services/FileService'

class Home extends Component {
    constructor(props){
        super(props);
        this.fileService = FileService.instance;
        this.state={
            username:this.props.location.state.user.username,
            firstname:this.props.location.state.user.firstname,
            lastname:this.props.location.state.user.lastname,
            role:this.props.location.state.user.role,
            policynumber:'',
            formcode:'',
            effectivedate:'',
            producercode:'',
            sai:''
        }
    }
    render(){
    return (
        <div className='container-fluid'>
            Welcome {this.state.firstname} {this.state.lastname} !!
            <div >
                <input className='text' placeholder='policy number'
                    onChange={(event) => {
                        this.setState({
                            policynumber: event.target.value
                        })
                    }} />
                <br></br>
                <input className='text' placeholder='form code'
                    style={{marginTop:'10px'}}
                    onChange={(event) => {
                        this.setState({
                            formcode: event.target.value
                        })
                    }} />
                    <br></br>
                <input className='text' placeholder='effective date'
                    style={{marginTop:'10px'}}
                    onChange={(event) => {
                        this.setState({
                            effectivedate: event.target.value
                        })
                    }} />
                <br></br>
                <input className='text' placeholder='producer code'
                    style={{marginTop:'10px'}}
                    onChange={(event) => {
                        this.setState({
                            producercode: event.target.value
                        })
                    }} />
                <br></br>
                <input className='text' placeholder='SAI'
                    style={{marginTop:'10px'}}
                    onChange={(event) => {
                        this.setState({
                            sai: event.target.value
                        })
                    }} />
                <br></br>
                <br></br>
                <button className='btn btn-primary' type='submit'
                    onClick={(event) => this.handleClick(event)}>Submit
                </button>
            </div>
        </div>
        )
    }
    handleClick = (event) => {
        this.fileService.fileWrite(this.state)
        .then(response => response.json())
        .then(response => {  
            console.log('Response from File Service ', response)
        })
    }
}

export default Home