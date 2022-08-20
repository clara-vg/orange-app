import './App.css';
import ItemDetailContainer from './components/Itemdetailcontainer/ItemDetailContainer';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from "./context/CartContext";
import CartContainer from './components/cartcontainer/CartContainer';
import Card from './components/cardGaleria/Card';

function App() {
  return (
    <div className="App">
          <CartContextProvider>
            <BrowserRouter>
              <NavBar />
              {/* <Card /> */}
                <Routes>
                  <Route path='/' element={<ItemListContainer label="Todos nuestros productos"/>} /> 
                  <Route path='/category/:categoryId' element={<ItemListContainer label="Estamos filtrando"/>} /> 
                  <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                  <Route path='/cart' element={<CartContainer />} />
                  <Route path='/galeria' element={<Card />} />
                </Routes>
            </ BrowserRouter>
          </CartContextProvider>
    </div>
  );
}

export default App;
