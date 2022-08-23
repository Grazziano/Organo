import React from 'react';
import './TextInput.css';

function TextInput(props) {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="text-input">
      <label>{props.label}</label>
      <input
        onChange={handleChange}
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
}

export default TextInput;
