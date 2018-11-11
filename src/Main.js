import React from 'react';
import Card from './Card'
import './Main.css';

const Main = () =>
  <main>
    <div className="container-medium">
      <div className="grid">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </main>

export default Main
