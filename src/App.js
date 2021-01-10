import React, {Component} from 'react';
import './App.css';
import BackgroundImage from './components/BackgroundImage'
import BackgroundRectangle from './components/BackgroundRectangle'

class App extends Component {
  render() {
    return (
      <div>
        <BackgroundImage></BackgroundImage>
        <BackgroundRectangle></BackgroundRectangle>
      </div>
      
    )
  }
}
export default App;
