import { Box, Button, Flex, Image, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthForm = () => {
  const [islogin, setislogin] = useState(true)
  const navigate = useNavigate();
  const [inputs, setinputs] = useState({
    email :"",
    password:"",
    confirmPassword:""
  });
  const handleAuth =()=>{
     if(!inputs.email|| !inputs.password ){
      alert("Please fill out all the fields");
      return
     }
     navigate('/')
  }

  return (

    <>
      <Box border={'1px solid gray'} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src='/logo.png' h={24} cursor={'pointer'} alt='Instagram' />
          <Input
            placeholder='Email'
            type='email'
            fontSize={14}
            value={inputs.email}
            onChange={(e)=>setinputs({...inputs,email:(e).target.value})}
          />
          <Input
            placeholder='Password'
            type='password'
            fontSize={14}
            value={inputs.password}
            onChange={(e)=>setinputs({...inputs,password:(e).target.value})}
          />

          {!islogin ? (
            <Input
              placeholder='Confirm Password'
              type='password'
              fontSize={14}
              value={inputs.confirmPassword}
            onChange={(e)=>setinputs({...inputs,confirmPassword:(e).target.value})}
            />
          ) : null}
          <Button w={'full'} colorScheme='blue' size={'sm'} fontSize={14}onClick={handleAuth}>
            {islogin ? "Log in" : "Sign up"}
          </Button>
          <Flex alignItems={'center'} justifyContent={'center'} my={4} gap={1} w={'full'}>
            <Box flex={2} h={'1px'} bg={'gray.400'} />
            <Text mx={1} color={'white'}>OR</Text>
            <Box flex={2} h={'1px'} bg={'gray.400'} />
          </Flex>
          <Flex alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
            <Image src='/google.png' alt='Google logo' w={5} />
            <Text mx={2} color={'blue.500'}>
              Log in With Google Account
            </Text>
          </Flex>
        </VStack>
      </Box>
      <Box border={'1px solid gray'} borderRadius={4} padding={5}>
        <Flex alignItems={'center'} justifyContent={'center'}>
            <Box mx={2}fontSize={14} >
{islogin ? "Don't have an account":"Already have an account"}
            </Box>

            <Box onClick={()=> setislogin(!islogin)}color={'blue.500'}cursor={'pointer'}>
{islogin ? "Sign up":"Log in"}
            </Box>
        </Flex>
      </Box>
    </>
  )
}

export default AuthForm