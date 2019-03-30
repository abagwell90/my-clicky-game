import React, { Component } from 'react';
import logo from './images/logo1-01.png';
import './App.css';
import ImageSwitch from './ImageSwitch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br></br>
          <p>
            Don't click the same image <br></br>twice and see how high <br></br>your score can go (score 12 and win!)
          </p>
          
        </header>
        <ImageSwitch>

        </ImageSwitch>
        <br></br>

        <footer>
          <br></br>
          <p> Andrew J Bagwell</p><br></br>
        <a href="https://icons8.com/icon/48250/source-code">Source Code icon by Icons8</a> <br></br>
        </footer>
        <br></br>
      </div>
    );
  }
}

export default App;
