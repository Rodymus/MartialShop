import { useState, useEffect } from 'react';

function ItemDetailContainer() {
  const [products, setProd] = useState([]);

  useEffect(() => {
    fetch('/src/data.json')
      .then(response => response.json())
      .then(data => setProd(data.products));
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {products.map(prod => (
          <li key={prod.id}>{prod.categoria}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemDetailContainer;

