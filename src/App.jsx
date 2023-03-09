import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route, Link} from "react-router-dom";
import Welcome from './components/Welcome';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Footer from './components/Footer';

/*
Links a configurar
Clickear un Item.js debe navegar a /item/:id
Clickear en una categoría del navbar debe navegar a /category/:categoryId 

Vover a agregar al terminar
 
*/

const App = () => {
  return (
  <>
  <ChakraProvider> 
  <NavBar />
 
      
    <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/catalogue" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/category/:id" element={<ItemListContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            
            
    </Routes>

  <Footer greeting={"Bienvenidos a Martial Shop!!!"}  />
  
   </ChakraProvider>
  </>
  );
};

export default App;