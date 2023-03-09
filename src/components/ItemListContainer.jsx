import { useState, useEffect } from 'react';
import { Image, Card, CardHeader, CardBody, CardFooter, Box, Stack, Heading, Divider } from "@chakra-ui/react";



const ItemListContainer = () => {const [products, setProd] = useState([]);

  useEffect(() => {
    fetch('/src/data.json')
      .then(response => response.json())
      .then(data => setProd(data.products));
  }, []);

  return (
    <div >
      <h1>Lista de Productos</h1>
      <ul>
        {products.map(prod => (
        <Card>
          <div key={prod.id}>{prod.categoria}
          <>$ {prod.precio} </>
          <Image maxW={{ base: '100%', sm: '150px' }} src={prod.url}/>
          </div>
          <Divider />
        </Card>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;