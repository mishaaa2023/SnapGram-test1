import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { Box, Image } from '@chakra-ui/react'

const FeedPost = ({img,username,avatar}) => {
  return (
    <>
    <PostHeader  username={username} avatar={avatar}  my={9}/>
    <Box my={2}>
      <Image src={img}alt={username}borderRadius={4}overflow={'hidden'}/>
    </Box>
    <PostFooter username={username}/>
    </>
  )
}

export default FeedPost