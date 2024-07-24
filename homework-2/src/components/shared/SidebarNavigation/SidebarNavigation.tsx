'use client'

import { colors } from "@/styles/theme/foundations/colors";
import { sizes } from "@/styles/theme/foundations/font";
import { Button, Flex, Heading } from "@chakra-ui/react"
import NextLink from 'next/link';
import { usePathname, useRouter } from "next/navigation";


export const SidebarNavigation = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('authorization-header');
        router.push('/login')
    }

    const path = usePathname();

    return (
        <Flex as='nav' flexDirection='column' backgroundColor={colors.darkpurple} color='white' minHeight="100vh" height='auto' width='20vw' position='absolute' top={0} left={0} p={30} gap={10} fontSize={sizes.title}>
            <Heading as='h2' size='xl' mb={50} >TV SHOWS APP</Heading>

            <Button as={NextLink} href={`/all-shows`} isActive={path === '/all-shows'} variant="link" >All shows</Button>
            <Button as={NextLink} href={`/top-rated`} isActive={path === '/top-rated'} variant="link" >Top rated</Button>
            <Button as={NextLink} href={`/my-profile`} isActive={path === '/my-profile'} variant="link" >My profile</Button>

            <Button onClick={handleLogout} mt='auto' cursor='pointer' variant="link" >Log out</Button>
        </Flex>
    )
}   