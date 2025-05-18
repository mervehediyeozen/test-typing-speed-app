import { Flex , Box , Text , Input , Button , Wrap , WrapItem , Heading, HStack, Divider } from "@chakra-ui/react"
import { tick , startGame , stopGame , setInput , submitWord, restartGame }  from "../../redux/testSlice"
import { useSelector , useDispatch } from "react-redux"
import { useEffect } from "react";

function InputSection() {
    const dispatch = useDispatch();
    const { words , input , correct , wrong , timeLeft , status , isStarted} = useSelector(state=> state.test);
        useEffect(() => {
      let timer
      if(isStarted && timeLeft>0) {
         timer = setInterval(() => {
        dispatch(tick())
      } , 1000) }
      else if(timeLeft===0){
        dispatch(stopGame())
      }

      return () => clearInterval(timer)
    } , [dispatch , timeLeft , isStarted])
    const  handleChange = (e) => {
        const value = e.target.value;
        if(!isStarted && status==="waiting")  {
            dispatch(startGame())
        }
       if (value.endsWith(" ") && value.trim() !== "") {
           dispatch(submitWord());
           dispatch(setInput(""));
          }
        else {
            dispatch(setInput(value))
        }
    }
  return (
  <>
  <Flex w="1400px" justifyContent="center" flexDirection="column" justifyItems="center" textAlign="center" >
    <Box  w="900px"  justifyContent="center" justifyItems="center" bg="#dcedd8" mt="50px" rounded="30px">
           <Box mt="25px">
    <Heading color="#2f3630" fontSize="22px" fontFamily="monospace">
        Test Now!
    </Heading>
    </Box>
      <Divider borderColor="blackAlpha.700" mt="10px"/>
     <Box  mt="20px" p="20px" flexDirection="column" bg="
#73997a
" justifyItems="center">
    <Box bg="#0f0f0f" w="700px" p="20px">
      <Wrap spacing="10px" >
        {words.map((word, i) => (
          <WrapItem key={i} >
            <Text
              color="black"
              fontSize="15px"
              fontFamily="monospace"
              bg="#f5f4eb"
              px="2"
              py="1"
              borderRadius="md"
            >
              {word}
            </Text>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  </Box>
    <Flex  flexDirection="row"mt="30px" w="700px" justifyContent="space-evenly">
    
        <Box  >
        <Input p="15px" bg="#1a1918"value={input} onChange={handleChange} width="500px" color="white" placeholder="start.." _placeholder={{color:"white"}}/>
        </Box>
        <Box >
          <HStack fontFamily="monospace">
            <Text fontSize="17px" > Time left:</Text>
        <Text fontSize="20px" fontWeight="bold"> {timeLeft}</Text>
        </HStack>
        </Box>
     

    </Flex>
      <Box justifySelf="flex-end" mb="10px" >
        <Button variant="ghost" rounded="20px" _hover={{bg:"#d3ebd6" , color:"black"}} w="100px"onClick={() => dispatch(restartGame())}> Restart</Button>
    </Box>
    <Divider borderColor="blackAlpha.700" mb="20px"/>
    {status === "finished" && (
        <>
        <Box mb="20px" fontFamily="monospace" bg="blackAlpha.200">
          <HStack gap="20px">
            <Text color="#2f3630" textDecoration="underline" fontSize="21px"> True: <strong>{correct}</strong></Text>
             <Text color="#2f3630" textDecoration="underline" fontSize="21px"> Wrong : <strong>{wrong}</strong></Text>
             </HStack>
        </Box>
        </>
    )}
  
    </Box>
 
  </Flex>
  </>
  )
}

export default InputSection