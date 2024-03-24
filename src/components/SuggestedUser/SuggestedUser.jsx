import { Avatar, Box, Button, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

function SuggestedUser({followers,name,avatar}) {
  const [isfollowed, setisfollowed] = useState(false)
  return (
    <Flex justifyContent={'space-between'}alignItems={'center'}w={'full'}>
       <Flex alignItems={'center'}gap={2}>
        <Avatar src={avatar} name={name} size={'md'}/>
        <VStack spacing={2}>
           <Box fontSize={12} fontWeight={'bold'}>
            {name}
           </Box>
           <Box fontSize={11} color={'gray.500'}>
            {followers} followers
           </Box>
        </VStack>
       </Flex>
       <Button fontSize={13} bg={'transparent'}p={0}height={'max-content'}fontWeight={'medium'}color={'blue.400'}cursor={'pointer'}_hover={{color:"white"}} onClick={()=>setisfollowed(!isfollowed)}>
        {isfollowed ? "unfollow":"follow"}

       </Button>
    </Flex>
  )
}

export default SuggestedUser