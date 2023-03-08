import React from "react";
import CartWidget from "./CartWidget";
import { Button, ButtonGroup, Box, Flex, Spacer, Text } from '@chakra-ui/react';
import Categorias from "./Categorias";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return ( 
  <Flex minWidth='max-content' alignItems='center' gap='50'>
    <Box p='2'>
      <Text fontSize='4xl' as='b'> <Link to="/">Martial Shop</Link></Text>
     
    </Box>
  <Spacer />
  
  <ButtonGroup gap='2'>
    <Button ><Categorias /></Button>
    <Button ><CartWidget /></Button>
  </ButtonGroup>

  </Flex>

  );
};

export default NavBar;