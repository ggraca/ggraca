import React from 'react';
import Project from './Project'
import project_data from '../data/project_data'
import '../stylesheets/Portfolio.css';

const Portfolio = () =>
  <main>
    <div className="container-medium">
      <div className="grid">
        {project_data.map((project, i) => {
          return <Project
              title={project.title}
              image={project.image || "/missing.png"}
              team={project.team || ["Guilherme Graça"]}
              date={project.date}
              env={project.env || "Free Time"}
              description={project.description}
              links={project.links || []}
              tags={project.tags || []}
              key={i}/>
        })}
      </div>
    </div>
  </main>

export default Portfolio
