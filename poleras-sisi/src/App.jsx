import './App.css'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import NavBar from './Componentes/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Error from './Componentes/Error';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './Componentes/Cartwidget/CartWidget';



function App () {
  return(
    <div className='App'>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer/>}/>
        <Route path='/category/:id' element={ <ItemListContainer/>}/>
        <Route path='/item/:id' element={ <ItemDetailContainer/>}/>
        <Route path='/cart' element={ <CartWidget/>}/>
        <Route path='*' element={ <Error/>}/>



      </Routes>
      
      
      
      </BrowserRouter>
    </div>
  );

}

export default App
