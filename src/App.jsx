import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route, Link} from "react-router-dom";
import Welcome from './components/Welcome';
import ItemDetailContainer from './components/ItemDetailContainer';

/*
Rutas a configurar
‘/category/:id’  <ItemListContainer />
‘/item/:id’ navega a <ItemDetailContainer />

Links a configurar
Clickear un Item.js debe navegar a /item/:id
Clickear en una categoría del navbar debe navegar a /category/:categoryId 
*/
// Para agregar
//<Route exact path="/cart" element={<Cart />} />

const App = () => {
  return (
  <>
  <ChakraProvider> 
  <NavBar />
  
    
    <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/catalogue" element={<ItemListContainer greeting={"Bienvenidos a Martial Shop!!!"} />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            
            
    </Routes>
      
   </ChakraProvider>
  </>
  );
};

export default App;