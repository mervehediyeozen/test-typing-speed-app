import React from 'react'
import Navbar from '../../components/navbar'
import { Flex  , Box , Text } from '@chakra-ui/react'
import UserNav from '../../components/userNav'
import UserContext from '../../components/userContext'

function User() {
  return (
    <>
    <Flex flexDirection="column">
    <Box>
     <Navbar/>
    </Box>
    <Box>
      <Flex flexDirection="row">
        <Box width={["10%" , "30%"]}>
          <UserNav/>
        </Box>
        <Box width={["90%" , "70%"]}>
          <UserContext/>
        </Box>
      </Flex>
    </Box>
    </Flex>
    </>
    
  )
}

export default User