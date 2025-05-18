import { showMenu } from '../../redux/testSlice'
import { Flex ,Box,   Button , Image} from '@chakra-ui/react';
import { useDispatch , useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faClose, faTrophy } from '@fortawesome/free-solid-svg-icons';
import joinClass from "../../images/class1.jfif"
import type1 from "../../images/type.jpg"
import { Link } from 'react-router-dom';

function Menu() {
    const dispatch = useDispatch();
    const menu = useSelector(state => state.test.isMenuOpen);
  return (
    <>
    <Flex fontFamily="monospace" >
      {!menu && (
          <>
          <Flex w="50px" h="640px">
         <Button h="full" w="full"  bg="#242320" color="white" _hover={{bg:"blackAlpha.700", color:"white"}}onClick={() => dispatch(showMenu())}>  <FontAwesomeIcon icon={faCaretRight}  size='2xl'/></Button>
         </Flex>
          </>
      )}
    {menu && (
     <>
       <Flex flexDirection="column" bg="white" w="500px" p="10px" h="680px" border="1px" borderColor="blackAlpha.400">
        <Box >
            <Button  w="full" pl="10px" gap="70px" bg="#ebe2a9"_hover={{bg:"#a5b58d", color:"black"}}onClick={() => dispatch(showMenu())}> Menu {menu ? <FontAwesomeIcon icon={faClose} size='lg'/> : "Open"}</Button>
        </Box>
        <Box mt="50px" >
        <Box >
          <Link to="/champions">
          <Button w="full" bg="#d4e0c8" gap="10px" _hover={{bg:"#a5b58d", color:"black"}}> Check the list of <FontAwesomeIcon icon={faTrophy} /></Button>
          </Link>
        </Box>
        <Box mt="5px" >
            <Link to="https://www.edclub.com/sportal/program-3.game">
           <Button  w="full" bg="#d4e0c8" _hover={{bg:"#a5b58d", color:"black"}}> Join Classes   </Button>
            <Image  src={joinClass} width="full" h="170px"/>
            </Link>
           
        </Box>
            <Box mt="15px" >
              <Link to="/article1">
           <Button  w="full" bg="#d4e0c8"_hover={{bg:"#a5b58d", color:"black"}}> Learn Typing Fast  </Button>
            <Image  src={type1} width="full" h="170px"/>
            </Link>
           
        </Box>
        </Box>
     </Flex>
     </>
    )} 
    </Flex>
   
   </>
  )
} 

export default Menu