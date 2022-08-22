import React from 'react';
import './TextInput.css';

function TextInput(props) {
  return (
    <div className="text-input">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  );
}

export default TextInput;
