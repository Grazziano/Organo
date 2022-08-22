import React from 'react';
import './TextInput.css';

function TextInput() {
  return (
    <div className="text-input">
      <label>Nome</label>
      <input placeholder="Digite o seu nome" />
    </div>
  );
}

export default TextInput;
