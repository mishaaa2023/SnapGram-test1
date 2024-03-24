import  { Avatar, Button, Flex ,Link,Text} from '@chakra-ui/react'
import {Link as RouterLink} from 'react-router-dom'
import React from 'react'

function SuggestedHeader() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
    <Flex alignItems={"center"} gap={2}>
    
        <Avatar size={"lg"} src='/download (1).png' />
    
      
        <Text fontSize={12} fontWeight={"bold"}>
          Mysha Fatima
        </Text>
    
    </Flex>
    <Button
      size={"xs"}
      background={"transparent"}
      _hover={{ background: "transparent" }}
      fontSize={14}
      fontWeight={"medium"}
      color={"blue.400"}
      cursor={"pointer"}
    >
      Log out
    </Button>
  </Flex>
  )
}

export default SuggestedHeader