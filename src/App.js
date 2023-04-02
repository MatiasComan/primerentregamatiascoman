import {NavBar} from "./components/NavBar/NavBar"
import { ItemListConteiner } from "./components/ItemListConteiner/ItemListConteiner";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
  return (
    <>
    
      
        <NavBar/>
      <ItemListConteiner greeting ="Ropa deportiva para chicas"/>
    </>
  );
}

export default App;
