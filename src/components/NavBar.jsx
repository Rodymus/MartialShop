import React from "react";
import CartWidget from "./CartWidget";
import { Button, ButtonGroup, Box, Flex, Spacer, Text } from '@chakra-ui/react';
import Categorias from "./Categorias";






const NavBar = () => {
  return ( 
  <Flex minWidth='max-content' alignItems='center' gap='50'>
    <Box p='2'>
      <Text fontSize='4xl' as='b'>Martial Shop</Text>
    </Box>
  <Spacer />
  
  <ButtonGroup gap='2'>
    <Button colorScheme='teal'><Categorias /></Button>
    <Button colorScheme='teal'><CartWidget /></Button>
  </ButtonGroup>

  </Flex>

  );
};

export default NavBar;