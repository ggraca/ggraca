import React from 'react';
import Card from './Card'
import './Main.css';
import Projects from './Projects'

const Main = () =>
  <main>
    <div className="container-medium">
      {/*<nav className="filter">
        <h1>Categories</h1>
        <p>Games</p>
        <p>Apps</p>
        <p>Other</p>
        <h1>Technologies</h1>
        <p>Unity</p>
        <p>Javascript</p>
        <p>React</p>
        <p>Ruby on Rails</p>
      </nav>*/}
      <div className="grid">
        {Projects.map((project, i) => {
          return <Card title={project.title} description={project.description} date={project.date} key={i}/>
        })}
      </div>
    </div>
  </main>

export default Main
