import React from 'react';
import './Dropdown.css';

function Dropdown(props) {
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.setValue(event.target.value)}
        required={props.required}
        value={props.value}
      >
        <option key=""></option>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}

export default Dropdown;
