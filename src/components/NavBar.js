import React, {Component} from 'react';

const navHeader = {
    fontFamily: "Heebo",
    fontSize: "36px",
    fontWeight: "600",
    color: "rgba(229, 56, 85, 1)",
    position: "relative",
    textAlign: "center",
    top: "0px",
    left: "0px"
}

class NavBar extends Component {
    render () {
        return (
            <div>
                <h1 style={navHeader}>JUST DO IT</h1>
            </div>
            
        )
    }
}

export default NavBar;