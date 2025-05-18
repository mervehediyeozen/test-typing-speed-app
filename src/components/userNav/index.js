import { Flex , Box , Text , Image , Divider, HStack , Heading , Button} from "@chakra-ui/react"
import { Link } from "react-router-dom";
import userphoto from "../../images/user2.png"
import joinClass from "../../images/class1.jfif"
import { useSelector , useDispatch  } from "react-redux"
import { useState } from "react";
import { updatePhoto } from "../../redux/testSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function UserNav() {
    const dispatch = useDispatch();
     const [selectedImage, setSelectedImage] = useState(null);
    const {userInfo , correct , wrong} = useSelector(state=> state.test);
    const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result);
      dispatch(updatePhoto(reader.result)); // Base64 veriyi redux'a gönderiyoruz
    };
    reader.readAsDataURL(file);
  }
};
  return (
   <>
   <Flex flexDirection="column" h="auto" pb="20px" color="black">
    <Box h="full" width="350px" bg="#919987" borderRight="8px" borderLeft="8px"  borderBottom="8px" borderColor="#3e403b" >
         <Box justifyItems="flex-end" position="relative">
  <Button
    as="label"
    htmlFor="profile-image-upload"
    variant="ghost"
    size="md"
    rounded="20px"
    cursor="pointer"
    _hover={{ bg: "blackAlpha.500" }}
  >
    <FontAwesomeIcon icon={faEdit} size="lg" />
  </Button>
  <input
    id="profile-image-upload"
    type="file"
    accept="image/*"
    onChange={handleImageChange}
    style={{ display: "none" }}
  />
</Box>
        <Box justifyItems="center" pb="20px" pl="20px" >
        <Box rounded="50px" border="1px" borderColor="#373b37" width="100px" h="87px" justifyItems="center" boxShadow="xl">
           <Image rounded="50px"   src={selectedImage || userInfo?.photo || userphoto}  width="95px" h="85px"   />
        </Box>
        </Box>
        <Divider mt="15px" borderColor="#889488" />
        <Box pt="15px"  bg="#32332f" borderTop="4px" borderColor="#373b37" p="10px">
          <Box bg="#f0f2ed" pt="10px" border="1px" borderColor="#5b5e57">
            <Box pl="20px">
          <Text fontWeight="bold" fontSize="25px" textDecoration="underline" fontFamily="monospace"> {userInfo?.name}</Text>
          </Box>
            <Box mt="20px" pl="20px">
                <HStack>
                <Text> Mail: </Text>
                <Text fontWeight="medium"> {userInfo?.email}</Text>
                </HStack>
            </Box>
            <Divider mt="15px" borderColor="black"  />
            <Box >
              <Box pl="20px" pt="20px"  pb="10px">
              <Heading fontSize="23px" textDecoration="underline"  fontFamily="monospace"> Last Results</Heading>
              </Box>
               <Flex w="full" h="full"flexDirection="row" mt="10px" borderTop="1px" borderBottom="1px"borderColor="#4a4d46" bg="#f7f7f7" justifyContent="center">
                <Box width={["50%" , "50%"]} justifyItems="center"  alignContent="center">
                  <HStack>
                <Text  fontSize="16px" textDecoration="underline" > Correct : </Text>
            <Text fontSize="18px" fontWeight="medium" >{correct}</Text>
            </HStack>
            </Box>
            <Divider orientation="vertical"  borderColor="#4a4d46" width="20px" height="110px"/>
             <Box width={["50%" , "50%"]} justifyItems="center"  alignContent="center">
                <HStack>
                <Text  fontSize="16px" textDecoration="underline"> Wrong : </Text>
            <Text fontSize="18px" fontWeight="medium" >{wrong}</Text>
            </HStack>
            </Box>
          
            </Flex>
            </Box>
            <Box pt="20px" pl="20px" pb="10px">
              <Heading fontSize="23px" textDecoration="underline" fontFamily="monospace"> Classes</Heading>
              <Box mt="10px" >
                <Text  fontSize="15px" > There is no class that you joined.</Text>
              </Box>
            </Box>
         
                 <Box mt="10px" pb="10px" mb="10px" justifySelf="center" >
                  <Link to="https://www.edclub.com/sportal/program-3.game">
                  <Button bg="blackAlpha.800" color="white"  w="220px" variant="ghost" _hover={{bg:"#dee3d1", color:"black"}}> Join Classes  
                   </Button>
                   </Link>  
                    </Box>
                  <Divider mb="10px" borderColor="blackAlpha.800"  />
                      <Box p="10px">
                  <Image  src={joinClass} width="full" h="170px"/>
                  </Box>
                        
           </Box>
        </Box>
      </Box>
   </Flex>
   </>
  )
}

export default UserNav