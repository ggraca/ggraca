import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import './App.css';

let portfolio = true;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {portfolio ? <Main /> : null}
      </div>
    );
  }
}

export default App;
