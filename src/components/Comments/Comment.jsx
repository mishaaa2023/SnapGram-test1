import { Avatar, Flex ,Text} from '@chakra-ui/react'
import React from 'react'

const Comment = ({CreatedAt,username,profilePic,text}) => {
  return <Flex>
    <Avatar src={profilePic} name={username}size={'sm'}/>
    <Flex direction={'column'}>
      <Flex gap={2}>
        <Text fontWeight={'bold'} fontSize={12}ml={'10px'}>{username}</Text>
        <Text  fontSize={14}>{text}</Text>
      </Flex>
      <Text  fontSize={12}color={'gray'}>{CreatedAt}</Text>
    </Flex>
  </Flex>
}

export default Comment