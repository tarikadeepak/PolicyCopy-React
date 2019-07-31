import React, { Component } from 'react'
import FileService from '../services/FileService'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { Card, ListGroup, Tab, Tabs, Col } from 'react-bootstrap';
import ReactJson from "react-json-view";
import ShowInput from './ShowInput'
import Header from './Header'

var didAppChange='';
const sidenav = {
    height: '450px',
    width: '200px',
    position: 'fixed',
    top: '0',
    left: '0',
    paddingTop: '10px',
    marginTop:'150px',
    marginLeft:'20px',
    marginBottom:'20px',
    borderRadius:'10px',
    borderColor:'#e6ffff',
    borderStyle:'ridge',
    overflow:'scroll'
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.fileService = FileService.instance;
        this.showFilter = this.showFilter.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.testInquiry = this.testInquiry.bind(this)
     //   this.onReset = this.onReset.bind(this)
        this.state = {
            param: [],
            paramDisplay:'',
            activeKey: '0',
            keyComponent: [],
            Inquiry: String,
            activeIndex: '',
            initialMsg:'Select an application to proceed',
            polnbr:'',
            phone:'',
            addr:'',
            currentVal:'',
            didAppChange
        }
    }

    componentWillMount() {
        this.fileService.findParam()
            .then(param => param.json())
            .then(param => {
                console.log('Param in Component ', param)
                this.setState({
                    param: param,
                    didAppChange:'Y'
                })
            })
    }

    testInquiry() {
        let userInfo = {
                polnbr:this.state.polnbr,
                phone:this.state.phone,
                addr:this.state.addr
        }

        this.fileService.findInfo(userInfo)
            .then(param => param.json())
            .then(param => {
                console.log('Param in testInquiry ', param)
                this.setState({
                    paramDisplay: param,
                })
            })
    }


    handleChange = (id, value) => {
        this.setState({
            [id]: value,
            currentVal: value,
            didAppChange:'N'
        })
        didAppChange = 'N';
        console.log(this.state.polnbr , this.state.didAppChange)
    }

    showFilter = (key) => {
        let input = []
        let j
        let k
        didAppChange = 'Y';
        this.setState({
            activeIndex: key,
            initialMsg:'',
            currentVal:'',
            didAppChange:'Y',
            paramDisplay:''
        })

        for (j in this.state.param) {
            if (this.state.param[j].appname == key) {
                for (k in this.state.param[j].key) {
                    let parameter = this.state.param[j].key[k]
                    input.push(<ShowInput
                        parameter={parameter}
                        handleChange={this.handleChange}
                        didAppChange={this.state.didAppChange}
                    />)
                }
            }
        }
        this.setState({
            keyComponent: input,
            Inquiry: <button
                type='Submit'
                className='btn btn-primary'
                onClick={() => {
                    this.testInquiry()
                    console.log('Inquired')
                }}>
                Inquiry</button>
        })
    }

    // onReset = (event) => {
    //     window.parent.location = window.parent.location.href;
    // }


    render() {
        let result;
        if(this.state.paramDisplay !== ''){
            result =
                <div style={{padding:'20px'}}>
                    <ReactJson src={this.state.paramDisplay}></ReactJson>
                </div>
        }
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2" >
                        <div className="navbar" style={sidenav} onSelect={key => {
                            this.setState({ key })
                            console.log('New Key is ', key)
                            this.showFilter(key)
                        }}>
                            {this.state.param.map((param) =>
                                <a style={{padding:'20px', width:'180px'}}
                                    className={`list-group-item 
                                    ${this.state.activeIndex === param.appname 
                                        ? 'active' : 'inactive'}`}
                                    data-id={param.appname}>
                                    <div onClick={() =>
                                        this.showFilter(param.appname)}>
                                        {param.appname}
                                    </div>
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="col-8" style={{marginTop:'75px', paddingLeft:'30px'}}>
                        <div className="row" >
                            <h3>{this.state.initialMsg}</h3>
                            {this.state.keyComponent.map(keyComponent =>
                                <div className="col-2">
                                    <div>{keyComponent}</div> 
                                </div>)}
                        </div>
                    </div>
                    <div className="col-2" style={{marginTop:'75px'}} >
                        {this.state.Inquiry}
                        
                    </div>
                    <div className="col-3"></div>
                    <div className="col-9" style={{marginTop:'20px', marginLeft:'250px',
                        borderStyle:'ridge',
                        height:'350px', width:'200px' }}>

                        {result}

                    </div>
                </div>
            </div>
        );

    }
}

export default Home
