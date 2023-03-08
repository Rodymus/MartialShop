import React from "react";
import Item from "./Item";



const ItemListContainer = ({greeting}) => {
  return (
  <>
  <div>{greeting}</div>
  <Item />
  </>
  );

  
};

export default ItemListContainer;