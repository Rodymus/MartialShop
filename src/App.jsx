import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route, Link} from "react-router-dom";
import Welcome from './components/Welcome';
import Item from './components/Items';
import Items from './components/Items';


const App = () => {
  return (
  <>
  <ChakraProvider> 
  <NavBar />
  
    <Routes>
            <Route exact path="/" element={<Welcome />} />
            
            <Route exact path="/catalogue" element={<ItemListContainer greeting={"Bienvenidos a Martial Shop!!!"} />} />
    </Routes>
    
   <Items />
      
   </ChakraProvider>
  </>
  );
};

export default App;