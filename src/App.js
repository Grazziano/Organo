import Banner from './components/Banner/Banner';
import TextInput from './components/TextInput';

function App() {
  return (
    <div className="App">
      <Banner />
      <TextInput label="Nome" />
      <TextInput label="Cargo" />
      <TextInput label="Imagem" />
    </div>
  );
}

export default App;
