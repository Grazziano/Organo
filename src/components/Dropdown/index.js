import React from 'react';
import './Dropdown.css';

function index(props) {
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}

export default index;
