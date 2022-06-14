import React, { Component } from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <Portfolio />
      </div>
    );
  }
}

export default App;
