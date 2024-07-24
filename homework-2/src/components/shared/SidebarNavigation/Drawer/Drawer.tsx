import { colors } from "@/styles/theme/foundations/colors"
import { sizes, weight } from "@/styles/theme/foundations/font"
import { HamburgerIcon } from "@chakra-ui/icons"
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Input, useDisclosure } from "@chakra-ui/react"
import NextLink from 'next/link';
import { usePathname, useRouter } from "next/navigation";


export const DrawerExample = () => {
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
          <DrawerContent>
            <DrawerCloseButton />
  
            <DrawerBody>
                <Flex as='nav' flexDirection='column' backgroundColor={colors.darkpurple} color='white' height='auto' width='339px' position='absolute' top={0} left={0} p={30} gap={10} fontSize={sizes.headline} fontWeight={weight.regular}>
                    <Button as={NextLink} href={`/all-shows`} isActive={path === '/all-shows'} variant="link" >All shows</Button>
                    <Button as={NextLink} href={`/top-rated`} isActive={path === '/top-rated'} variant="link" >Top rated</Button>
                    <Button as={NextLink} href={`/my-profile`} isActive={path === '/my-profile'} variant="link" >My profile</Button>
                </Flex>
            </DrawerBody>
  
            <DrawerFooter>
                <Button onClick={handleLogout} cursor='pointer' variant="link" >Log out</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }