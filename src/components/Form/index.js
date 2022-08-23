import React, { useState } from 'react';
import TextInput from '../TextInput';
import Dropdown from '../Dropdown';
import Button from '../Button';
import './Form.css';

function Form(props) {
  const times = [
    'Programação',
    'Frontend',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão',
  ];

  const [name, setName] = useState('');
  const [office, setOffice] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    props.whenRegisteringCollaborator({
      name,
      office,
      image,
      team,
    });
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextInput
          label="Nome"
          placeholder="Digite seu nome"
          required={true}
          value={name}
          setValue={(value) => setName(value)}
        />
        <TextInput
          label="Cargo"
          placeholder="Digite seu cargo"
          required={true}
          value={office}
          setValue={(value) => setOffice(value)}
        />
        <TextInput
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          setValue={(img) => setImage(img)}
        />
        <Dropdown
          label="Time"
          itens={times}
          required={true}
          value={team}
          setValue={(value) => setTeam(value)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
}

export default Form;
