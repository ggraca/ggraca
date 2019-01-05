import React from 'react';
import Tippy from '@tippy.js/react'
import {intersperse} from '../utils'

import '../stylesheets/Project.css';
import 'tippy.js/dist/tippy.css'

const ProjectImage = ({image}) =>
  <div className="cell-image">
    <img src={"/thumbnails" + image} alt="" />
  </div>

const ProjectHeader = ({title, team, date, env}) =>
  <div className="cell-header">
    <div>{title}</div>
    <div className="cell-info">
      <Tippy content={team.join(', ')} arrow={true} animation={'shift-toward'}>
        <i className={team.length <= 1 ? "fas fa-user" : "fas fa-users"}></i>
      </Tippy>
      <Tippy content={[date, env].join(', ')} arrow={true} animation={'shift-toward'}>
        <i className="fas fa-calendar"></i>
      </Tippy>
    </div>
  </div>

const ProjectBody = ({description}) =>
  <div className="cell-body">
    {description.split('\n').map((paragraph, i) => {
      return <div key={i}>{paragraph}</div>
    })}
  </div>

const ProjectLinks = ({links}) =>
  <React.Fragment>
    <h6>LINKS</h6>
    <div className="cell-links">
      {intersperse(links.map((link, i) => {
        return <a className="cell-link" key={i} href={link.link} target="_blank" rel="noopener noreferrer">{link.name}</a>
      }), ", ")}
    </div>
  </React.Fragment>

const ProjectTags = ({tags}) =>
  <React.Fragment>
    <h6>TECHNOLOGIES</h6>
    <div className="cell-badges">
      {tags.map((tag, i) => {
        return <div className="cell-badge" key={i}>{tag}</div>
      })}
    </div>
  </React.Fragment>

const ProjectFooter = ({links, tags}) =>
  <div className="cell-footer">
    {links.length > 0 ? (<ProjectLinks links={links} />) : null}
    <ProjectTags tags={tags} />
  </div>


const Project = ({title, image, team, date, env, description, links, tags}) =>
  <div className="cell">
    <ProjectImage image={image} />
    <ProjectHeader title={title} team={team} date={date} env={env} />
    <ProjectBody description={description} />
    <ProjectFooter links={links} tags={tags} />
  </div>

export default Project
