import {Menu, MenuButton,  MenuList,  MenuItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Categorias = () => {
  return (
  <div>
    <Menu>
      <MenuButton >
        Categorias
      </MenuButton>
    <MenuList colorScheme='teal'>
      <MenuItem ><Link to="ItemDetailContainer/1">Guantes</Link></MenuItem>
      <MenuItem><Link to="ItemDetailContainer/2">Uniformes</Link></MenuItem>
      <MenuItem><Link to="ItemDetailContainer/3">Cinturones</Link></MenuItem>
    </MenuList>
  </Menu> 
        
  </div>
  )
}

export default Categorias


