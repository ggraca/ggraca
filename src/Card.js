import React from 'react';
import './Main.css';

function intersperse(arr, sep) {
    if (arr.length === 0) {
        return [];
    }

    return arr.slice(1).reduce(function(xs, x, i) {
        return xs.concat([sep, x]);
    }, [arr[0]]);
}

const Card = ({title, description, date, image, tags, links}) =>
  <div className="cell">
    <div className="cell-image-container">
      <img src={image || "/missing.png"} alt="" className="cell-image" />
    </div>
    <h3>{title}</h3>
    <div className="cell-content">
      <p>{description}</p>
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
