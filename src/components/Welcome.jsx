import { Center, Box, Image } from "@chakra-ui/react";

const Welcome = () =>  {
  return (
  <div className="welcome-container">
    <Center>
      <Box>
        <Image maxW={{ base: '100%', sm: '900px' }} src="https://i0.wp.com/www.kimonosport.com/wp-content/uploads/2018/09/IMG_1990.jpg" alt="Tienda Marcial" />
  
      </Box>
    </Center>
            
  </div>
  );
};

export default Welcome;