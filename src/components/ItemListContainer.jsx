import React from "react";
import Items from "./Items";


const ItemListContainer = ({greeting}) => {
  return (
  <>
  <div>{greeting}</div>
  <Items />
  </>
  );

  
};

export default ItemListContainer;