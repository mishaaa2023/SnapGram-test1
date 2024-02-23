import { Avatar, Flex } from '@chakra-ui/react'
import React from 'react'

function SuggestedHeader() {
  return (
    <Flex justifyContent={'space-between'}alignItems={'center'}w={'full'}>
        <Flex>
            <Avatar name='As A Programmer'size={'lg'}src='/profilepic.png'/>
            </Flex>
    </Flex>
  )
}

export default SuggestedHeader