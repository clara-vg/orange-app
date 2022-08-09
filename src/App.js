import './App.css';
import ItemDetailContainer from './components/Itemdetailcontainer/ItemDetailContainer';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from "./context/CartContext";
import { UserContextProvider } from "./context/UserContext";

function App() {
  
  return (
    <div className="App">
      <UserContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer label="Todos nuestros productos"/>} /> 
              <Route path='/category/:categoryId' element={<ItemListContainer label="Estamos filtrando"/>} /> 
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            </Routes>
        </ BrowserRouter>
      </CartContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
