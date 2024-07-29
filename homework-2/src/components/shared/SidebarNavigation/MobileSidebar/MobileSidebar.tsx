'use client'

import { Stepper } from "@/components/features/stepper/Stepper"
import { colors } from "@/styles/theme/foundations/colors"
import { sizes, weight } from "@/styles/theme/foundations/font"
import { HamburgerIcon } from "@chakra-ui/icons"
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, Flex, useDisclosure } from "@chakra-ui/react"
import NextLink from 'next/link';
import { usePathname, useRouter } from "next/navigation";


export const MobileSidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const path = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('authorization-header');
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
                    <Button as={NextLink} href={`/all-shows`} isActive={path === '/all-shows'} variant="link" >All shows</Button>
                    <Button as={NextLink} href={`/top-rated`} isActive={path === '/top-rated'} variant="link" >Top rated</Button>
                    <Button as={NextLink} href={`/my-profile`} isActive={path === '/my-profile'} variant="link" >My profile</Button>
                    <Stepper />
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