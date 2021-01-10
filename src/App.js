import React, {Component} from 'react';
import './App.css';
import BackgroundImage from './components/BackgroundImage'
import TodoArea from './components/TodoArea'

class App extends Component {
  render() {
    return (
      <div>
        <BackgroundImage></BackgroundImage>
        <TodoArea></TodoArea>
      </div>
      
    )
  }
}
export default App;
