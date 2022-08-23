import React from 'react';
import Card from '../Card';
import './Team.css';

function Team(props) {
  const css = { backgroundColor: props.secondaryColor };
  return (
    props.collaborators.length > 0 && (
      <section className="team" style={css}>
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        <div className="collaborators">
          {props.collaborators.map((collaborator) => (
            <Card
              key={collaborator.name}
              backgroundColor={props.primaryColor}
              name={collaborator.name}
              office={collaborator.office}
              image={collaborator.image}
            />
          ))}
        </div>
      </section>
    )
  );
}

export default Team;
