import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import FeedPost from './FeedPost'
import { useState } from 'react'

const FeedPosts = () => {
    const [isloading, setisloading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setisloading(false)
        }, 2000)
    }, [])
    return (
        <Container maxWidth={'container.sm'} py={10} px={2}>
            {isloading && [0, 1, 2, 3].map((_, idx) => (
                <VStack key={idx} gap={4} alignItems={'flex-start'} mb={10}>
                    <Flex gap={2}>
                        <SkeletonCircle size={10} />
                        <VStack gap={2} alignItems={'flex-start'}>
                            <Skeleton height={10} w={'200px'} />
                            <Skeleton height={10} w={'200px'} />
                        </VStack>
                    </Flex>
<Skeleton w={'full'}>
    <Box height={'500px'}>Content Wrappped</Box>
</Skeleton>
                </VStack>
            ))}
            {!isloading &&(
                <>
                <FeedPost img="/img1.png" username="Zeenia" avatar="/img1.png" />
            <FeedPost img="/img2.png" username="Eman" avatar="/img2.png" />
            <FeedPost img="/img5.webp" username="Aiza" avatar="/img5.webp" />
            <FeedPost img="/img4.png" username="Hamna" avatar="/img4.png" />
            <FeedPost img="/img1.png" username="Zeenia" avatar="/img1.png" />
            <FeedPost img="/img2.png" username="Eman" avatar="/img2.png" />
            <FeedPost img="/img3.png" username="Aiza" avatar="/img3.png" />
            <FeedPost img="/img4.png" username="Hamna" avatar="/img4.png" />

                </>
            )}
            
        </Container>
    )
}

export default FeedPosts