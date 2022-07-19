import './App.css';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      
      <NavBar />
      <ItemListContainer label="Aqui vas a poder encontrar el contenido de mi tienda" />

    </div>
  );
}

export default App;
