import Navbar from '../../components/navbar'
import Menu from '../../components/menu'
import ClientText from '../../components/ınput'
import { Flex , Box  } from '@chakra-ui/react'
function Main() {
  return (
    <>
     <Flex bg="#171716" h="900px" flexDirection="column" pb="100px">
      <Box>
        <Navbar/>
      </Box>

     <Box>
      <Flex flexDirection="row">
      <Box width={["10%" , "15%"]}>
      <Menu/>
      </Box>
      <Box pl="90px" width={["90%" , "85%"]}>
         <ClientText/>
         </Box>
         </Flex>
     </Box>
    </Flex>
    </>
  )
}

export default Main