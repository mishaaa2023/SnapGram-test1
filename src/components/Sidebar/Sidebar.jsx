import { Avatar, Box, Flex, Icon, Link, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../../assets/constants'
import { AiFillHome } from 'react-icons/ai';
import {BiLogOut} from 'react-icons/bi'

const Sidebar = () => {
				const SidebarItems = [
								{
												icon: <AiFillHome size={25} />,
												text: "Home",
												link: "/",
								},
								{
												icon: <SearchLogo />,
												text: "Search",

								},
								{
												icon: <NotificationsLogo />,
												text: "Notifications",

								},
								{
												icon: <CreatePostLogo />,
												text: "Create",

								},
								{
												icon: <Avatar size={'sm'} name='Burak Orkmez' src='/download (1).png' />,
												text: "Profile",
												link: "/:username",
								},

				]
				return (
								<Box
												height={'100vh'}
												borderRight={'1px solid'}
												borderColor={'whiteAlpha.300'}
												py={8}
												position={'sticky'}
												top={0}
												left={0}
												px={{ base: 2, md: 4 }}
								>

												<Flex direction={'column'} gap={10} w={'full'} h={'full'}>

																<Link to={"/"} as={RouterLink} pl={2} display={{ base: "none", md: "block" }} cursor={'pointer'}>
																				<InstagramLogo />
																</Link>

																<Link to={"/"} as={RouterLink} p={2} display={{ base: "block", md: "none" }} cursor={'pointer'} borderRadius={6}
																				_hover={{
																								bg: 'whiteAlpha.200',
																				}

																				}
																				w={10}
																>
																				<InstagramMobileLogo />
																</Link>
																<Flex direction={'column'} gap={5} cursor={'pointer'}>
																				{SidebarItems.map((item, index) => (
																												<Tooltip
                            key={index}
																												hasArrow
																												label={item.text}
																												placement='right'
																												ml={1}
																												openDelay={500}
																												display={{ base: "block", md: "none" }}


																								>
																												<Link
																																display={'flex'}
																																alignItems={'center'}
																																gap={4}
																																_hover={{ bg: "whiteAlpha.400" }}
																																borderRadius={6}
																																padding={2}
																																w={{base:10,md:'full'}}
																																justifyContent={{ base: "center", md: "flex-start" }}
																																to={item.link || null}
																																as={RouterLink}
																																
																												>
																																{item.icon}
																																<Box display={{ base: "none", md: "block" }}>
																																				{item.text}
																																</Box>
																												</Link>
																								</Tooltip>

																				))}
																</Flex>

		
												</Flex>
						


{/* log out */}


<Tooltip
                           
                           hasArrow
                           label={'LogOut'}
                           placement='right'
                           ml={1}
                           openDelay={500}
                           display={{ base: "block", md: "none" }}


                       >
                           <Link
                               display={'flex'}
                               alignItems={'center'}
                               gap={4}
                               _hover={{ bg: "whiteAlpha.400" }}
                               borderRadius={6}
                               padding={2}
                               w={{base:10,md:'full'}}
                               justifyContent={{ base: "center", md: "flex-start" }}
                               to={'/auth'}
							   mt={'auto'}
							   
                               as={RouterLink}
                               
                           >
                               <BiLogOut size={25} />
                               <Box display={{ base: "none", md: "block" }}>
                                   LogOut
                               </Box>
                           </Link>
                       </Tooltip>

								</Box>
				)
}

export default Sidebar