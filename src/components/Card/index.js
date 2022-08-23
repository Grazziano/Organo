import React from 'react';
import './Card.css';

function Card({ name, image, office, backgroundColor }) {
  return (
    <div className="card">
      <div className="card-header" style={{ backgroundColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="card-footer">
        <h4>{name}</h4>
        <h5>{office}</h5>
      </div>
    </div>
  );
}

export default Card;
