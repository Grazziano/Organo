import React from 'react';
import TextInput from '../TextInput';
import Dropdown from '../Dropdown';
import Button from '../Button';
import './Form.css';

function index() {
  const times = [
    'Programação',
    'Frontend',
    'Data Science',
    'Devops',
    'UX e Design',
    'Inovação e Gestão',
  ];

  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextInput label="Nome" placeholder="Digite seu nome" />
        <TextInput label="Cargo" placeholder="Digite seu cargo" />
        <TextInput label="Imagem" placeholder="Digite o endereço da imagem" />
        <Dropdown label="Time" itens={times} />
        <Button>Criar card</Button>
      </form>
    </section>
  );
}

export default index;
