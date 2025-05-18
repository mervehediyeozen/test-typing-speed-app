import { Flex , Box , Text , Heading , HStack , Divider} from '@chakra-ui/react'
import Navbar from '../../components/navbar'
import Menu from '../../components/menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa1 ,fa2, fa3 } from '@fortawesome/free-solid-svg-icons'

function Article1() {
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
            <Box width={["80%" , "70%"]} ml="40px" mt="70px">
                <Flex flexDirection="column" bg="#edf2e6" p="40px">
                    <Box>
                        <Heading textDecoration="underline"> Learn to Type Fast — The Smart Way</Heading>
                    </Box>
                    <Box mt="20px" fontSize="20px" pl="10px">
                    <Box>
                          <HStack>
                            <FontAwesomeIcon icon={fa1} />
                        <Text>
                            Touch typing is the skill of typing without looking at the keyboard. To learn it quickly, the key is consistency and proper technique. Start by using typing tutorials or websites like keybr.com or typingclub.com. These platforms guide you through structured lessons.
                        </Text>
                        </HStack>
                    </Box>
                     <Divider borderColor="blackAlpha.500" mt="10px" mb="10px"/>
                    <Box mt="12px">
                        <HStack>
                            <FontAwesomeIcon  icon={fa2} />
                        <Text >Keep your fingers on the home row keys (ASDF and JKL;) and let each finger control specific keys. Don’t rush focus on accuracy first, then build speed. Set daily goals, like practicing for 15–20 minutes. Within a couple of weeks, you’ll see real improvement. </Text>
                        </HStack>
                    </Box>
                     <Divider borderColor="blackAlpha.500" mt="10px" mb="10px"/>
                     <Box mt="12px">
                        <HStack>
                            <FontAwesomeIcon  icon={fa3} />
                        <Text >Typing fast isn’t about going wild on the keyboard — it’s about training your fingers to move efficiently and confidently.
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

export default Article1