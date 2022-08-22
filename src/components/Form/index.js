import React from 'react';
import TextInput from '../TextInput';
import './Form.css';

function index() {
  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextInput label="Nome" placeholder="Digite seu nome" />
        <TextInput label="Cargo" placeholder="Digite seu cargo" />
        <TextInput label="Imagem" placeholder="Digite o endereço da imagem" />
      </form>
    </section>
  );
}

export default index;
