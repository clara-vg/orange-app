import './App.css';
import ItemDetailContainer from './components/Itemdetailcontainer/ItemDetailContainer';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  const handleOnAdd = (quantity) => {
    console.log("cantidad de items agregados", quantity)
  }

  return (
    <div className="App">
     < BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer label="Aqui vas a poder encontrar el contenido de mi tienda"/>} /> 
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          </ Routes>
      </ BrowserRouter>
    </div>
  );
}

export default App;
