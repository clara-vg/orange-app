import './App.css';
import Counter from './components/Counter/Counter';
import ItemDetailContainer from './components/Itemdetailcontainer/ItemDetailContainer';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import NavBar from './components/NavBar';


function App() {

  const handleOnAdd = (quantity) => {
    console.log("cantidad de items agregados", quantity)
  }

  return (
    <div className="App">
      
      <NavBar />
      <Counter stock={5} initial={1} onAdd={handleOnAdd} />
      <ItemListContainer label="Aqui vas a poder encontrar el contenido de mi tienda"/>
      <ItemDetailContainer  />
    </div>
  );
}

export default App;
