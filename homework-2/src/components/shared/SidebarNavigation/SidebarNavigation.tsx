'use client'

import { Flex, Heading, Text } from "@chakra-ui/react"
import NextLink from 'next/link';

const handleLogout = () => {
    localStorage.removeItem('authorization-header');
    window.location.href = '/login';
}

export const SidebarNavigation = () => {
    return (
        <Flex as='nav' flexDirection='column' backgroundColor='#280454' color='white' height='100%' width='10vw' position='absolute' top={0} left={0} p={30} gap={10}>
            <Heading as='h2' size='xl' mb={50} >TV SHOWS APP</Heading>

            <Text as={NextLink} href={`/all-shows`}>All shows</Text>
            <Text as={NextLink} href={`/top-rated`}>Top rated</Text>

            <Text onClick={handleLogout} mt='auto' cursor='pointer'>Log out</Text>
        </Flex>
    )
}   