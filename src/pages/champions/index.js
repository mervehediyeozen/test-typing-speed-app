import { Flex , Box , Text , Heading , HStack, Divider , Button, Select } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar'
import Menu from '../../components/menu'
import { sortChampions } from '../../redux/testSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrophy , faList,  faCircleDot, faDog, faMedal} from '@fortawesome/free-solid-svg-icons'
import { useDispatch , useSelector} from 'react-redux'

function Champions() {
    const champions = useSelector(state=> state.test.champions)
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(sortChampions(e.target.value));
    }
  return (
    <>
    <Flex flexDirection="column" >
        <Box>
            <Navbar/>
        </Box>
        <Flex direction="row" gap="100px">
            <Box width={["20%" , "15%"]}>
                <Menu/>
            </Box>
            <Box width={["80%" , "80%"]} mt="30px" pl="20px" bg="#edf2e6" h="auto">
                <Flex flexDirection="column" pl="40px" pt="40px" >
                <Flex direction="row"   justifyContent="space-between">
                    <Box>
              <HStack>
                <FontAwesomeIcon icon={faTrophy} size='xl'/>
              <Heading color="#34362f" fontSize="32px" textDecoration="underline"> Champions</Heading>
          </HStack>
          </Box>
          <Box mr="200px">
          <Select w="140px" variant="flushed"   placeholder="Sort" onChange={handleChange} > 
            <option value="top"> from the top </option>
            <option value="bottom"> from the bottom </option>
          </Select>
          </Box>
      </Flex>
      <Box mt="35px">
        {champions.map((user , i) => 
        <>
        <Flex flexDirection="column" mt="12px"   w="full">
            
             <HStack key={i} gap="15px">
          <FontAwesomeIcon icon={faMedal} />
          <Text color="#656b57" fontSize="19px" fontWeight="bold" > {user.name} -</Text> 
          <Text color="#656b57" fontSize="19px" fontWeight="medium" textDecoration="underline"> {user.score} word</Text>
          
        </HStack>
        <Box borderBottom="1px"  w="250px" mt="10px" mb="10px" borderColor="blackAlpha.600"></Box>
        </Flex>
        </>)}
      
      </Box>
      </Flex>
            </Box>
            
             <Box width={["10%" , "17%"]}></Box>
        </Flex>
        
    </Flex>
    
    </>
  )
}

export default Champions