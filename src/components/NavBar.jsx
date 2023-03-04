import React from "react";
import CartWidget from "./CartWidget";
import { Button, ButtonGroup } from '@chakra-ui/react';

const NavBar = () => {
  return ( <div>
    <h1>Martial Shop</h1>
    <ul>
      <Button colorScheme='blue'>Guantes</Button>
      <Button colorScheme='blue'>Uniformes</Button>
      <Button colorScheme='blue'>Cinturones</Button>
      
    </ul>
      <CartWidget />
      
  </div>
  );
};

export default NavBar;