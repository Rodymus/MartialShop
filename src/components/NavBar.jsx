import React from "react";
import CartWidget from "./CartWidget";
import { Button, ButtonGroup } from '@chakra-ui/react';

const NavBar = () => {
  return ( <div>
    <h1>Martial Shop</h1>
    <ul>
      <Button colorScheme='blue'>Cat 1</Button>
      <Button colorScheme='blue'>Cat 2</Button>
      <Button colorScheme='blue'>Cat 3</Button>
      
    </ul>
      <CartWidget />
      
  </div>
  );
};

export default NavBar;