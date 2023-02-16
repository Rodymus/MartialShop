import { useState, useEffect } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

const App = () => {
  return (
  <>
    <NavBar />
    <ItemListContainer greeting={"Bienvenidos a Martial Shop!!!"} />
  </>
  );
};

export default App;
