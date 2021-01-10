import React, {Component} from 'react';

const navHeader = {
    fontFamily: "Heebo",
    fontSize: "36px",
    fontWeight: "600",
    color: "rgba(229, 56, 85, 1)",
    position: "absolute",
    top: "0px",
    left: "200px"
}

const listStyle = {
    listStyleType: "none",
    margin: "0",
    padding: "0",
}
export default class NavBar extends Component {
    render () {
        return (
            <div>
                <h1 style={navHeader}>JUST DO IT</h1>
            </div>
            
        )
    }
}