import { useState, useEffect } from 'react';
import { Image, Card, CardHeader, CardBody, CardFooter, Box, Stack, Heading, Divider } from "@chakra-ui/react";
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch('/src/data.json')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  const filteredProducts = products.filter(product => product.category == category);
    
  return (
    <div>
      <h1>Producto</h1>
      <ul>
        {filteredProducts.map(product => (
          <li key={products.category}>
            <h2>{product.precio}</h2>
            <Image maxW={{ base: '100%', sm: '150px' }} src={product.url}/>

          </li>
        ))}
      </ul>
    </div>
  );
}
  

export default ItemDetailContainer;

