'use client'

import { Stepper } from "@/components/features/stepper/Stepper"
import { swrKeys } from "@/fetchers/swrKeys"
import { colors } from "@/styles/theme/foundations/colors"
import { sizes, weight } from "@/styles/theme/foundations/font"
import { HamburgerIcon } from "@chakra-ui/icons"
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, Flex, useDisclosure } from "@chakra-ui/react"
import NextLink from 'next/link';
import { usePathname, useRouter } from "next/navigation";
import { mutate } from "swr"


export const MobileSidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const path = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('authorization-header');
        mutate(swrKeys.me, null, {revalidate: false});
        router.push('/login')
    }
  
    return (
      <>
        <HamburgerIcon onClick={onOpen} boxSize="24px"/>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent backgroundColor={colors.darkpurple} maxHeight='100vh' borderLeftRadius='20px' mt={10}>
            <DrawerCloseButton color='white'/>
  
            <DrawerBody>
                <Flex as='nav' flexDirection='column' color='white' height='auto' width='339px' position='absolute' top={30} p={0} gap={10} fontSize={sizes.headline} fontWeight={weight.regular}>
                    <Button as={NextLink} href={`/all-shows`} isActive={path === '/all-shows'} variant="link" onClick={onClose} >All shows</Button>
                    <Button as={NextLink} href={`/top-rated`} isActive={path === '/top-rated'} variant="link" onClick={onClose} >Top rated</Button>
                    <Button as={NextLink} href={`/my-profile`} isActive={path === '/my-profile'} variant="link" onClick={onClose} >My profile</Button>
                    <Button as={Stepper} onClick={onClose} />
                </Flex>
            </DrawerBody>
  
            <DrawerFooter>
                <Button onClick={handleLogout} cursor='pointer' variant="link">Log out</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }