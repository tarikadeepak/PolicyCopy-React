import React, { Component } from 'react'

export default class ShowInput  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVal:'',
        }
        var val = ''
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.didAppChange === 'N')
            this.val=''
    }

    render(){

        return(
            <input
                placeholder={this.props.parameter}
                id={this.props.parameter}
                value={this.val}
                onChange={({ target: {id,value} }) => {
                    this.setState({
                        currentVal:value
                    })
                    this.val = value
                    this.props.handleChange(id,value)
                }}
                style={{ marginLeft: '10px', height: '45px', width: '130px' }}
            />)
            }

}
