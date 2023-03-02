import React from 'react'
import { useState, useEffect } from 'react';



const ItemCount = () => {
    const [count, setCount] = useState(0);

    const stock = 10;

    const StockBajo = () => {
      if (count < 1){
        setCount(1);
      } else {
        setCount(count -1);
      }
    };

    const StockAlto = () => {
      if (count < stock) {
        setCount(count + 1);
      } else {
        setCount(stock);
      };
      
    };

    useEffect(() => {
        console.log('Llamado a una API para info');
      }, []);
  
    return (
    <>
      <h2>{count}</h2>
      <button onClick={StockAlto}>Agregar</button>
      <button onClick={StockBajo}>Quitar</button>
      <button onClick={() => setCount(0)}>Resetear</button>
    </>
  )
}

export default ItemCount