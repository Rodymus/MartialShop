import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';

const App = () => {
  return (
  <>
  <ChakraProvider> 
    <NavBar />
    <ItemListContainer greeting={"Bienvenidos a Martial Shop!!!"} />
    </ChakraProvider>
  </>
  );
};

export default App;