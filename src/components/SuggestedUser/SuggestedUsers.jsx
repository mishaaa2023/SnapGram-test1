import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

function SuggestedUsers() {
  return (
    <VStack py={8}px={6}gap={4}>
      <SuggestedHeader/>
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
					<Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
						Suggested for you
					</Text>
					<Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
						See All
					</Text>
				</Flex>
				<SuggestedUser name={'Hamna'}avatar={'/download (1).jfif'} followers={234}/>
				<SuggestedUser name={'Aliya'}avatar={'/download.jfif'} followers={634}/>
				<SuggestedUser name={'Sara'}avatar={'/download (2).jfif'} followers={124}/>

				<Box 
				fontSize={12}
				color={'gray.500'}
				mt={5}
				alignSelf={'start'}
				>
                  © 2024 buit by —{""}
				  <Link href='#'fontSize={14} color={'blue.500'} target='blank'>
					Mysha Fatima
				  </Link>
				</Box>
    </VStack>
  )
}

export default SuggestedUsers