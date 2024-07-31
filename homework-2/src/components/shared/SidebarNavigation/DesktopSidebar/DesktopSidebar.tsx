'use client'

import { Stepper } from "@/components/features/stepper/Stepper";
import { swrKeys } from "@/fetchers/swrKeys";
import { colors } from "@/styles/theme/foundations/colors";
import { sizes, weight } from "@/styles/theme/foundations/font";
import { Button, Flex } from "@chakra-ui/react"
import NextLink from 'next/link';
import { usePathname, useRouter } from "next/navigation";
import { mutate } from "swr";

export const DesktopSidebar = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('authorization-header');
        mutate(swrKeys.me, null, {revalidate: false});
        router.push('/all-shows');
    }

    const path = usePathname();

    return (
        <Flex as='nav' flexDirection='column' backgroundColor={colors.darkpurple} color='white' mt={0} ml={0} left={0} mr='30px' minHeight='100vh' p={30} gap={10} fontSize={sizes.title} fontWeight={weight.regular}>
            <Button as={NextLink} href={`/all-shows`} isActive={path === '/all-shows'} variant="link" >All shows</Button>
            <Button as={NextLink} href={`/top-rated`} isActive={path === '/top-rated'} variant="link" >Top rated</Button>
            <Button as={NextLink} href={`/my-profile`} isActive={path === '/my-profile'} variant="link" >My profile</Button>
            <Stepper />

            <Button type="button" onClick={handleLogout} cursor='pointer' variant="link" mt='auto' mb={20}>Log out</Button>
        </Flex>
    )
}   