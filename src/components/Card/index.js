import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <img src="https://github.com/Grazziano.png" alt="Grazziano Fagundes" />
      </div>
      <div className="card-footer">
        <h4>Grazziano</h4>
        <h5>FrontEnd Developer</h5>
      </div>
    </div>
  );
}

export default Card;
