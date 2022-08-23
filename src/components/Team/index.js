import React from 'react';
import './Team.css';

function Team(props) {
  return (
    <section className="team">
      <h3>{props.name}</h3>
    </section>
  );
}

export default Team;
