import { Flex  , Box , Button , Input, FormControl, FormLabel , Text   } from "@chakra-ui/react"
import { Form , Formik } from 'formik'
import Navbar from "../../components/navbar";
import { login } from "../../redux/testSlice";
import { useState, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux"
import { useNavigate , Link } from "react-router-dom";

function Signin() {
    const navigate = useNavigate();
    const isLogin = useSelector(state=> state.test.isLogin);
    const dispatch = useDispatch();
      const [submitted, setSubmitted] = useState(false)
    const initialStates = { name:"" , password:""}
    const handleSubmit = (values) => {
      dispatch(login({  name: values.name,  password: values.password,correct: 0, wrong: 0 }));
      setSubmitted(true)
    }
      useEffect(() => {
    if (submitted) {
      if (isLogin) {
        navigate("/")
      } else {
        alert("Giriş başarısız! Kullanıcı adı veya şifre yanlış.")
      }
    }
  }, [isLogin, submitted, navigate])
  
  return (
    <>
    <Flex flexDirection="column" justifyContent="center" >
      <Box>
      <Navbar/>
      </Box>
      <Box w="full" h="full" justifyItems="center" pt="120px" >
        <Formik   onSubmit={handleSubmit} initialValues={initialStates} >
          {({values , handleChange})=> (
            <>
            <Box w="330px"   >
            <Form>
            <FormControl   name="name">
            <FormLabel> User Name</FormLabel>
            <Input  variant="flushed" borderColor="blackAlpha.600" type="text" name="name" value={values.name} onChange={handleChange} color="black" />
            </FormControl>
             <FormControl mt="20px"name="password">
               <FormLabel> Password</FormLabel>
              <Input  variant="flushed" borderColor="blackAlpha.600"  type="password" name="password"value={values.password} onChange={handleChange}/>
            </FormControl>
            <Button type="submit" mt="40px" w="full" bg="#2e2d2a" color="beige" _hover={{bg:"#505c52" , color:"black"}}> Log in</Button>
            <Box textAlign="end" mt="10px">
            <Link to="/createnew">
            <Text textDecoration="underline" color="#73997a"> Create Account</Text>
            </Link>
            </Box>
            </Form>
            </Box>
            </>
          )}
        
        </Formik>

    
      </Box>
    </Flex>
    </>
  )
}

export default Signin