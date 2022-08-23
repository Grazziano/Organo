import React from 'react';
import './Team.css';

function Team(props) {
  const css = { backgroundColor: props.secondaryColor };
  return (
    <section className="team" style={css}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
    </section>
  );
}

export default Team;
