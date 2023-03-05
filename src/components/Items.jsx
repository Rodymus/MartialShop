const Items = () => {
  const datos = [
    { id: 1, nombre: 'A', precio: 1000 },
    { id: 2, nombre: 'B', precio: 1500 },
    { id: 3, nombre: 'C', precio: 500 },
  ];

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (datos.length === 0) {
        reject(new Error('NO hay datos'));
      }
      setTimeout(() => {
        resolve(datos);
      }, 3000);
    });
  };

  //getDatos().then((datos) => console.log(datos));

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
      console.log(datosFetched);
    } catch (err) {
      console.log(er);
    }
  }

  fetchingData();
  //console.log(getDatos());

  return (
    <>
      <h1>Lista de Productos</h1>
      {/* <ItemList data={data}/> */}
      {datos.map((prod) => {
        return (
          <div key={prod.id}>
            <h5>{prod.nombre}</h5>
            <h5>{prod.precio}</h5>
          </div>
        );
      })}
    </>
  );
};

export default Items;
