import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {
  const [collaborators, setCollaborators] = useState([]);

  const addCollaborators = (collaborator) => {
    // console.log(collaborator);
    setCollaborators([...collaborators, collaborator]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        whenRegisteringCollaborator={(collaborator) =>
          addCollaborators(collaborator)
        }
      />
      <Team name="Programação" />
      <Team name="Frontend" />
      <Team name="Data Science" />
    </div>
  );
}

export default App;
