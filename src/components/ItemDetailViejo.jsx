import { useState, useEffect } from 'react';
import { Image, Card, CardHeader, CardBody, CardFooter, Box, Stack, Heading, Divider } from "@chakra-ui/react";

function ItemDetailContainer() {
  
  const [products, setProd] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setProd(data.products));
  }, []);

  const filteredProd = products.filter(product =>
    product.categoria.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Producto</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />
      <ul>
        {filteredProd.map(producto => (
          <li key={producto.id}>{producto.categoria}{producto.precio}</li>
        ))}
      </ul>
    </div>
  );
}
  

export default ItemDetailContainer;

