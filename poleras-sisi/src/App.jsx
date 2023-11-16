import './App.css'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import NavBar from './Componentes/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () =>{
  return(
    <div className='App'>
      <NavBar />
          <ItemListContainer greeting='Estamos trabajando para usted, pagina en desarrollo.'/>
    </div>
  );

}

export default App
