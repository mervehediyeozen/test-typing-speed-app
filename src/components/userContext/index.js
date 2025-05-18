import { Link } from 'react-router-dom'
import { Flex , Box ,Text , Heading, HStack, Divider } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'


function UserContext() {
  return (
    <>
    <Flex flexDirection="column" mt="85px">
      <Box>
        <Heading color="#34362f" fontSize="32px" textDecoration="underline"> Articles</Heading>
      </Box>
      <Box mt="25px">
        <HStack>
          <FontAwesomeIcon icon={faList} />
          <Link to="/article1">
          <Text color="#656b57" fontSize="19px" fontWeight="medium" _hover={{color:"#464a3b", textDecoration:"underline"}}> Learn How To Type Fast</Text>
          </Link>
        </HStack>
         <HStack>
          <FontAwesomeIcon icon={faList} />
          <Link to="/article2">
          <Text color="#656b57" fontSize="19px" fontWeight="medium" _hover={{color:"#464a3b", textDecoration:"underline"}}> The Advantages of Typing Fast</Text>
          </Link>
        </HStack>
      </Box>
      
      <Divider mt="20px" mb="20px" borderColor="black" width="600px"/>
      <Box>
           <Box>
        <Heading color="#34362f" fontSize="30px" textDecoration="underline"> Classes </Heading>
      </Box>
      <Box mt="25px">
        <HStack>
          <FontAwesomeIcon icon={faList} />
          <Link to="https://www.edclub.com/sportal/program-3.game">
          <Text color="#656b57" fontSize="19px" fontWeight="medium" _hover={{color:"#464a3b", textDecoration:"underline"}}> Type Fast Class</Text>
          </Link>
        </HStack>
      </Box>
      </Box>
       <Divider mt="20px" mb="20px" borderColor="black" width="600px"/>
         <Box>
           <Box>
        <Heading color="#34362f" fontSize="30px" textDecoration="underline"> Champion List </Heading>
      </Box>
      <Box mt="25px">
        <HStack>
          <FontAwesomeIcon icon={faList} />
          <Link to="/champions">
          <Text color="#656b57" fontSize="19px" fontWeight="medium" _hover={{color:"#464a3b", textDecoration:"underline"}}> Go the list</Text>
          </Link>
        </HStack>
      </Box>
      </Box>
       <Divider mt="20px" mb="20px" borderColor="black" width="600px"/>
    
    </Flex>
    </>
  )
}

export default UserContext