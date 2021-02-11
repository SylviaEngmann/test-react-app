import React, {Component} from 'react';
import backgroundimage from '../assets/reading-side.png';

const imageSize = {
    width: "450px",
    height: "400px",
    position: "absolute",
    top: "200px"
};

class BackgroundImage extends Component {
    render () {
        return (
            <div>
                <img src={backgroundimage} alt="back" style={imageSize} />
            </div>
        )
    }
}

export default BackgroundImage;
