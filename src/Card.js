import React from 'react';
import './Main.css';

const Card = ({title, description, date}) =>
  <div className="cell">
    <h3>{title}</h3>
    <hr></hr>
    <p>{description}</p>
    <div className="cell-date">{date}</div>
  </div>

export default Card
