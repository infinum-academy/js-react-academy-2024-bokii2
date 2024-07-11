import { Flex, Heading, Text } from "@chakra-ui/react"
import NextLink from 'next/link';

export const SidebarNavigation = () => {
    return (
        <Flex as='nav' flexDirection='column' backgroundColor='#280454' color='white' height='100vh' width='10vw' position='fixed' top={0} left={0} p={30} gap={10}>
            <Heading as='h2' size='xl' mb={50} >TV SHOWS APP</Heading>

            <Text as={NextLink} href={`/all-shows`} >All shows</Text>
            <Text as={NextLink} href={`/top-rated`} >Top rated</Text>
            <Text as={NextLink} href={`/my-profile`} >My profile</Text>
            <Text as={NextLink} href={`/log-out`} mt='auto' >Log out</Text>
        </Flex>
    )
}