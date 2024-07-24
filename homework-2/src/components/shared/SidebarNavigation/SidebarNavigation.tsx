'use client'

import { sizes, typography } from "@/styles/theme/foundations/font";
import { Flex, Heading, Text } from "@chakra-ui/react"
import NextLink from 'next/link';
import { useRouter } from "next/navigation";


export const SidebarNavigation = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('authorization-header');
        router.push('/login')
    }

    return (
        <Flex as='nav' flexDirection='column' backgroundColor='#280454' color='white' minHeight="100vh" height='auto' width='20vw' position='absolute' top={0} left={0} p={30} gap={10} fontSize={sizes.title}>
            <Heading as='h2' size='xl' mb={50} >TV SHOWS APP</Heading>

            <Text as={NextLink} href={`/all-shows`}>All shows</Text>
            <Text as={NextLink} href={`/top-rated`}>Top rated</Text>
            <Text as={NextLink} href={`/my-profile`}>My profile</Text>

            <Text onClick={handleLogout} mt='auto' cursor='pointer'>Log out</Text>
        </Flex>
    )
}   