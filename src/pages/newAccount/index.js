import { Flex  , Box , Button , Input, FormControl, FormLabel , Text   } from "@chakra-ui/react"
import { Form , Formik } from 'formik'
import { useState } from "react";
import Navbar from "../../components/navbar";
import { useDispatch } from "react-redux"
import { createAccount } from "../../redux/testSlice";
import { useNavigate , Link } from "react-router-dom";

function NewAccount() {
    const navigate = useNavigate();
    const [alert , setAlert] = useState(false)
    const dispatch = useDispatch();
    const initialStates = { name:"" , password:""}
    const handleSubmit = (values) => {
      dispatch(createAccount({  name: values.name,  password: values.password, surname: values.surname, email: values.email,correct: 0,  wrong: 0}));
      setAlert(true)
      navigate("/");
    }
  
  return (
    <>
    <Flex flexDirection="column" justifyContent="center" >
      <Box>
      <Navbar/>
      </Box>
      <Box w="full" h="full" justifyItems="center" pt="90px" >
        <Formik   onSubmit={handleSubmit} initialValues={initialStates} >
          {({values , handleChange})=> (
            <>
            <Box w="330px"   >
            <Form>
            <FormControl   name="name">
            <FormLabel> User Name</FormLabel>
            <Input  variant="flushed" borderColor="blackAlpha.600" type="text" name="name" value={values.name} onChange={handleChange} color="black" />
            </FormControl>
             <FormControl mt="10px"name="password">
               <FormLabel> Surname</FormLabel>
              <Input  variant="flushed" borderColor="blackAlpha.600"  type="text" name="surname"value={values.surname} onChange={handleChange}/>
            </FormControl>
             <FormControl mt="10px"name="password">
               <FormLabel> Password</FormLabel>
              <Input  variant="flushed" borderColor="blackAlpha.600"  type="password" name="password"value={values.password} onChange={handleChange}/>
            </FormControl>
              <FormControl mt="10px"name="password">
               <FormLabel>Email</FormLabel>
              <Input  variant="flushed" borderColor="blackAlpha.600"  type="email" name="email"value={values.email} onChange={handleChange}/>
            </FormControl>
            <Button type="submit" mt="20px" w="full" bg="#2e2d2a" color="beige" _hover={{bg:"#505c52" , color:"black"}}> Log in</Button>
            <Box textAlign="end" mt="10px">
            <Link to="/signin">
            <Text textDecoration="underline" color="#73997a"> I have account</Text>
            </Link>
            </Box>
            </Form>
            </Box>
            </>
          )}
        
        </Formik>

        {alert && (
            <>
            <Box>
                <Text> Your account has been created.</Text>
            </Box>
            </>
        )}

    
      </Box>
    </Flex>
    </>
  )
}

export default NewAccount