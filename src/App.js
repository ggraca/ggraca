import React, { Component } from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import './stylesheets/App.css';

let portfolio = true;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        {portfolio ? <Portfolio /> : null}
      </div>
    );
  }
}

export default App;
