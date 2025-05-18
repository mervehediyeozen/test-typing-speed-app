    import { useNavigate , useLocation} from 'react-router-dom'
    import { Flex  , Box ,  Heading  , Button ,   Popover, PopoverTrigger, PopoverContent, PopoverHeader,PopoverBody, PopoverArrow,Text ,  Divider , Image} from '@chakra-ui/react'
    import joinClass from '../../images/class1.jfif'
    import { useSelector , useDispatch  } from 'react-redux';
    import { Link } from 'react-router-dom';
    import { logout } from '../../redux/testSlice';
    import {FontAwesomeIcon }from "@fortawesome/react-fontawesome"
    import {faBars, faInfoCircle , faRightToBracket, faRightFromBracket , faUser} from '@fortawesome/free-solid-svg-icons'
   

    function Navbar() {
      const dispatch  = useDispatch();
      const location = useLocation();
      const isLogin = useSelector(state=>state.test.isLogin);
      const navigate  = useNavigate();
      const handleClick = (link) => {
        if (link === "signin") {
          navigate("/signin"); 
        }
        if (link === "signout") {
          dispatch(logout());
          navigate("/"); 
        }
          if (link === "user") {
          navigate("/user"); 
        }
      };
      const isAnyPathMatch = (paths) => paths.some(path => location.pathname.includes(path));
      const isSign = isAnyPathMatch(["/signin", "/createnew"]);

      return (
        <>
        <Flex justifyContent="space-between" bg="#2b2b28" p="10px">
            <Box > 
                  <Popover>
      <PopoverTrigger>
        <Button rounded="30px" _hover={{bg:"blackAlpha.500"}}  variant="ghost" >
          <FontAwesomeIcon icon={faInfoCircle} size='xl' color='beige' />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader fontWeight="medium">Test Your Skill!</PopoverHeader>
        <PopoverBody>
          <Box>
          <Text mb={4}>
           Text Speed App is a fun and simple tool designed to help you improve your typing speed and accuracy.
           Practice with randomly selected words, track your progress, and challenge yourself to type faster each time.
          
          </Text>
          <Divider my={3} borderColor="blackAlpha.700"/>
          <PopoverArrow />
            <Text mb={4}>
           Whether you're a beginner or just want to sharpen your typing skills, this app is the perfect place to start!
          </Text>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
      
            </Box>
         
              <Box justifyContent="center">
                <Link to="/">
        <Heading color="white" textDecoration="underline" >
            Text Speed App
        </Heading>
        </Link>
        </Box>
        {!isSign && (
          <>
          <Box color="white" >
            {isLogin ?  (<> 
             <Button rounded="30px" _hover={{bg:"blackAlpha.500"}} variant="ghost" onClick={() =>  {handleClick("user")}} >
               <FontAwesomeIcon icon={faUser} color='beige' size='lg' />
              </Button>
              <Button rounded="30px" _hover={{bg:"blackAlpha.500"}}  variant="ghost"onClick={() =>  {handleClick("signout")}} >
                 <FontAwesomeIcon icon={faRightFromBracket} color='beige' size='xl' />
              </Button>
              </>) : (
                <>
                <Button rounded="30px" _hover={{bg:"blackAlpha.500"}} variant="ghost" onClick={() =>  {handleClick("signin")}} >
               <FontAwesomeIcon icon={faRightToBracket} color='beige' size='xl' />
              </Button>
              </> )}
            </Box>
             </>)}
                  {isSign && (
          <>
         
          <Box  >
          <Popover>
      <PopoverTrigger>
       <Button   rounded="30px" _hover={{bg:"blackAlpha.500"}}variant="ghost" >
              <FontAwesomeIcon icon={faBars} color='beige' size='xl' />
              </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader fontWeight="medium" textAlign="center"> Improve yourself with classes</PopoverHeader>
        <PopoverBody>
          <Box>
           <Box mt="5px" >
             <Link to="https://www.edclub.com/sportal/program-3.game">
           <Button  w="full" bg="#b1ccb8" _hover={{bg:"#dbb856", color:"black"}}> Join Classes   </Button>
            <Image  src={joinClass} width="full" h="170px"/>
            </Link>
           
        </Box>
          <Divider my={3} borderColor="blackAlpha.700"/>
          <PopoverArrow />
            <Text mb={4}>
           Whether you're a beginner or just want to sharpen your typing skills, this app is the perfect place to start!
          </Text>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
             
            </Box>
             </>)}
        </Flex>
        
        </>
      )       
    }

    export default Navbar