import NavBar from './components/NavBar/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetalleContenido from './components/ItemDetalleContenido/ItemDetalleContenido';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetalleContenido/>}/>
          <Route path='*' element={<h1>No Existe</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;


