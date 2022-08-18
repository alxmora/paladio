import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFoundException from './components/Errors/404';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {CartContextProvider} from './context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer title="Todos los productos" />}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer title="Listado " />}></Route>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}></Route>
          <Route path='/cart' element={<CartContainer />}></Route>
          <Route path='/*' element={<NotFoundException/>}></Route>
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
