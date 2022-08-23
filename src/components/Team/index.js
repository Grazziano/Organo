import React from 'react';
import Card from '../Card';
import './Team.css';

function Team(props) {
  const css = { backgroundColor: props.secondaryColor };
  return (
    <section className="team" style={css}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <Card />
    </section>
  );
}

export default Team;
