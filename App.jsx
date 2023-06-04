import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetalleContenido from './components/ItemDetalleContenido/ItemDetalleContenido';
import { StrictMode } from 'react';
import { ReactDOM } from "react-dom";
import Cart from './components/Cart/cart';
import { CartProvider } from './context/cartcontext';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <CartProvider>
      <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetalleContenido/>}/>
          <Route path='/cart' element={<Cart/>}/> 
        </Routes>
      </CartProvider>
        
      </BrowserRouter>
    </div>
  )
}

export default App;


