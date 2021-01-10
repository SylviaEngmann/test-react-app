import React, {Component} from 'react';
import NavBar from './NavBar';


const backgroundRectangle = {
    position: "absolute",
    backgroundColor: "white",
    boxShadow: "0px 10px 13px rgba(0, 0, 0, 0.161)",
    flexShrink: "0",
    width: "700px",
    height: "700px",
    border: "none",
    borderRadius: "8px",
    top: "100px",
    left: "500px"
};

const buttonStyle = {
    backgroundColor: "rgba(229, 56, 85, 1)",
    border:"none",
    borderRadius: "35px",
    width: "170px",
    height: "65px",
    position: "absolute",
    bottom: "30px",
    left: "270px",
    color: "white",
    fontFamily: "Heebo",
    fontSize: "24px",
    fontWeight: "700"
};

export default class BackgroundRectangle extends Component {
    render () {
        const{
            onClick,
        } = this.props
        return (
        <div style={backgroundRectangle}>
            <button
              onClick={onClick}
              style={buttonStyle}
            >ADD TASK</button>
        </div>
        )
    }
}
