import React from 'react'
var headerStyle = {
    background: "#99ff99",
    paddingTop: "15px",
    paddingBottom: "15px",
    paddingLeft: "25px",
    paddingRight: "20px",
    marginLeft: '0px',
    width: '100%',
    color: "white",
    overflow:'auto'
};

class Header
    extends React.Component {
    render() {
        return (
            <h5 style={headerStyle}>
                Welcome to California Tool
            </h5>
        )
    }
}

export default Header;
