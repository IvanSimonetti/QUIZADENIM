import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetalleContenido from './components/ItemDetalleContenido/ItemDetalleContenido';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetalleContenido/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;


