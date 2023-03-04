import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Welcome from './components/Welcome';


const App = () => {
  return (
  <>
  <ChakraProvider> 
  <BrowserRouter>
  
    <NavBar />
    <Welcome />
    <Link to="/ItemListContainer">
    <ItemListContainer greeting={"Bienvenidos a Martial Shop!!!"} />
    </Link>
    
  
  </BrowserRouter>
  </ChakraProvider>
  </>
  );
};

export default App;