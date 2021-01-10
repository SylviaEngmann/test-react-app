import React, {Component} from 'react';

const navHeader = {
    fontFamily: "Heebo",
    fontSize: "36px",
    fontWeight: "600",
    color: "rgba(229, 56, 85, 1)",
    position: "absolute",
    top: "0px",
    left: "50%"
}
export default class NavBar extends Component {
    render () {
        return (
            <h1 style={navHeader}>JUST DO IT</h1>
        )
    }
}