import React from 'react';
import './Button.css';

function index(props) {
  return (
    <button className="button">{props.children}</button>
  );
}

export default index;
