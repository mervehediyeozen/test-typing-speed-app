import { Flex , Box , Text , Heading, HStack, Divider } from '@chakra-ui/react'
import Navbar from '../../components/navbar'
import Menu from '../../components/menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa1  , fa2, fa3} from '@fortawesome/free-solid-svg-icons'

function Article2() {
  return (
     <>
    <Flex flexDirection="column" >
        <Box>
            <Navbar/>
        </Box>
         <Flex direction="row">
            <Box width={["20%" , "15%"]}>
                <Menu/>
            </Box>
            <Box width={["80%" , "70%"]}  ml="30px" mt="70px">
                <Flex flexDirection="column" bg="#edf2e6" p="40px">
                    <Box >
                        <Heading textDecoration="underline"> The Real Advantages of Fast Typing</Heading>
                    </Box>
                    <Box mt="20px" fontSize="20px" pl="10px">
                    <Box>
                        <HStack>
                            <FontAwesomeIcon icon={fa1} />
                        <Text>
                            Being able to type fast gives you a major advantage in the digital world. Whether you’re a student, a writer, or a professional, fast typing saves time and boosts productivity.
                        </Text>
                        </HStack>
                    </Box>
                    <Divider borderColor="blackAlpha.500" mt="10px" mb="10px"/>
                    <Box mt="12px" >
                          <HStack>
                            <FontAwesomeIcon icon={fa2} />
                        <Text >It helps reduce fatigue during long typing sessions and lets you focus more on what you’re saying instead of how you're typing it. In job markets, fast typists are often more competitive, especially in admin, tech, and customer service roles.</Text>
                        </HStack>
                    </Box>
                     <Divider borderColor="blackAlpha.500" mt="10px" mb="10px"/>
                     <Box mt="12px" >
                          <HStack>
                            <FontAwesomeIcon icon={fa3} />
                        <Text >Also, the better you type, the more fluent your digital communication becomes. It's not just about speed — it's about working smarter and smoother every day.
                        </Text>
                        </HStack>
                    </Box>
                     <Divider borderColor="blackAlpha.500" mt="10px" mb="10px"/>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    </Flex>
    </>
  )
}

export default Article2