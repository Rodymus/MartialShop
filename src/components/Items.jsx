import { Image, Card, CardHeader, CardBody, CardFooter, Box, Stack, Heading, Divider } from "@chakra-ui/react";

const Items = () => {
  const datos = [
    { id: 1, nombre: 'Guantes', precio: 1000, url: "https://http2.mlstatic.com/D_NQ_NP_912299-MLA45616686819_042021-O.webp" },
    { id: 2, nombre: 'Cinturones', precio: 1500, url: "https://http2.mlstatic.com/D_NQ_NP_2X_729271-MLA53040631938_122022-F.webp"  },
    { id: 3, nombre: 'Uniformes', precio: 500, url: "https://http2.mlstatic.com/D_NQ_NP_2X_995603-MLA46859977927_072021-F.webp"  },
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
 
  return (
    <>
      <h1>Lista de Productos</h1>
      {/* <ItemList data={data}/> */}
      {datos.map((prod) => {

        return (
                    
          <div key={prod.id}>
          <Card>
            <Heading size='md'>{prod.nombre}</Heading>
            <CardBody>
            
            <h5>Precio $: {prod.precio}</h5>
                        
            <Image maxW={{ base: '100%', sm: '150px' }} src={prod.url}/>
                        
            </CardBody>
          <Divider />
          </Card>
          </div>

          

          
        );
      })}
    </>
  );
};

export default Items;
