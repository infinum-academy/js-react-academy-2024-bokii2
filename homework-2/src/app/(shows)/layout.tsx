import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { Header } from "@/components/shared/Header/Header";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { colors } from "@/styles/theme/foundations/colors";
import { Box, Container, Flex } from "@chakra-ui/react";

export default function Layout({
  children
}: any) {
  return (
    <>
      <AuthRedirect to='/login' condition='loggedOut'/>
      <Flex direction={{base: 'column', md: 'row'}} minWidth='100%'>
        <Box>
          <SidebarNavigation />
        </Box>
        <Box margin='auto'>
          {children}
        </Box>
      </Flex>
    </>
  );
}