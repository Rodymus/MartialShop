import {Menu, MenuButton,  MenuList,  MenuItem } from '@chakra-ui/react'

const Categorias = () => {
  return (
  <div>
    <Menu>
      <MenuButton >
        Categorias
      </MenuButton>
    <MenuList>
      <MenuItem>Guantes</MenuItem>
      <MenuItem>Uniformes</MenuItem>
      <MenuItem onClick={() => alert('Kiai')}>Cinturones</MenuItem>
    </MenuList>
  </Menu> 
        
  </div>
  )
}

export default Categorias


