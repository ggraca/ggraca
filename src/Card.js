import React from 'react';
import Tippy from '@tippy.js/react'
import './Main.css';
import 'tippy.js/dist/tippy.css'

function intersperse(arr, sep) {
    if (arr.length === 0) {
        return [];
    }

    return arr.slice(1).reduce(function(xs, x, i) {
        return xs.concat([sep, x]);
    }, [arr[0]]);
}

const Card = ({title, description, date, image, tags, links, team, env}) =>
  <div className="cell">
    <div className="cell-image-container">
      <img src={image || "/missing.png"} alt="" className="cell-image" />
    </div>
    <div className="cell-title">
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
    <div className="cell-content">
      {description}
    </div>
    <div className="cell-footer">
      {links.length > 0 ? (
        <React.Fragment>
          <h6>LINKS</h6>
          <div className="cell-links">
            {intersperse(links.map((link, i) => {
              return <a className="cell-link" key={i} href={link.link} target="_blank" rel="noopener noreferrer">{link.name}</a>
            }), ", ")}
          </div>
        </React.Fragment>
      ) : null}
      <h6>TECHNOLOGIES</h6>
      <div className="cell-badges">
        {tags.map((tag, i) => {
          return <div className="cell-badge" key={i}>{tag}</div>
        })}
      </div>
    </div>
  </div>

export default Card
