import React from "react";
import CartWidget from "./CartWidget";
import CardWidget from "./CartWidget";

const NavBar = () => {
  return ( <div>
    <h1>Martial Shop</h1>
    <ul>
      <button>Cat 1</button>
      <button>Cat 2</button>
      <button>Cat 3</button>
    </ul>
      <CartWidget />
  </div>
  );
};

export default NavBar;