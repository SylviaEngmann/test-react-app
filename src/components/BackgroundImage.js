import React, {Component} from 'react';
import backgroundimage from '../assets/reading-side.png';
import NavBar from './NavBar';

const imageSize = {
    width: "450px",
    height: "400px",
    position: "absolute",
    top: "200px"
};

export default class BackgroundImage extends Component {
    render () {
        return (
            <div>
                <NavBar></NavBar>
                <img src={backgroundimage} alt="back" style={imageSize} />
            </div>
        )
    }
}
