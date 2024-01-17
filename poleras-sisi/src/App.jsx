import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import './App.css';
import NavBar from './Componentes/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CheckOut } from './Componentes/Checkout/Checkout';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './Componentes/Cart/Cart';
import CartProvider from './Componentes/Context/CartContext';
import Error from './Componentes/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './Componentes/HeroSection/HeroSection';
import Footer from './Componentes/Footer/Footer';



function App() {
  return (
    <div className="App">
    <BrowserRouter>

    <CartProvider>
    <NavBar />
    <HeroSection />
    
    <Routes> 

      <Route path={'/'} element={ <ItemListContainer /> } />
      <Route path={'/category/:id'} element={ <ItemListContainer /> } />
      <Route path={'/item/:id'} element={ <ItemDetailContainer /> } />
      <Route path={"/cart"} element={<Cart/>} />
      <Route path={"/checkout"} element={<CheckOut/>} />
      <Route path={'*'} element={ <Error /> } />

    </Routes>

  </CartProvider>
  </BrowserRouter>
  <Footer/>
    </div>
  );
}

export default App;
