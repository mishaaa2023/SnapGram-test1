
import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants'

const PostFooter = ({username,isProfilePage}) => {
const [liked, setliked] = useState(false)
const [likes, setlikes] = useState(1000)
const handlelike =()=>{
  if (liked) {
    setliked(false)
    setlikes(likes-1)
  }else{
    setliked(true)
    setlikes(likes+1)
  }
}
return(
<Box my={10}>
<Flex alignItems={'center'}gap={4}w={'full'}pt={0}mt={6} mb={4}>
      <Box onClick={handlelike}
      cursor={'pointer'}
      fontSize={18}
      >
        {!liked ? (<NotificationsLogo/>): (<UnlikeLogo />)}
      </Box>

      <Box cursor={'pointer'}fontSize={18}>
        <CommentLogo />
      </Box>
    </Flex>
    <Text fontWeight={600} fontSize={'sm'}>
{likes} likes
    </Text>


    
    {!isProfilePage && (
      <>
      <Text fontWeight={700} fontSize={'sm'}>
     {username}{" "}
     <Text as={'span'} fontWeight={400}>
     is Feeling Good
    </Text>
    </Text>
    <Text fontSize={'sm'}color={'gray'}>
View all 1,000 comments
    </Text>

      </>
    )}
    <Flex
    alignItems={'center'}
    gap={2}
    justifyContent={'space-between'}
    w={'full'}
    >
<InputGroup>
<Input variant={'flushed'}placeholder='Add a Comment....'fontSize={14}/>
<InputRightElement>
<Button
fontSize={17}
color={'blue.500'}
fontWeight={600}
cursor={'pointer'}
_hover={{color:'white'}}
bg={'transparent'}
>Post</Button>
</InputRightElement>
</InputGroup>
    </Flex>
</Box>
    
   
  
) 
}

export default PostFooter