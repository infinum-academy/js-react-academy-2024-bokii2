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
      <Flex direction='column' justifyContent='left'>
        <Header />
        <Flex direction='row' justifyContent='space-around' backgroundColor={colors.darkpurple}>
          <SidebarNavigation />
          <Box>
            {children}
          </Box>
        </Flex>
      </Flex>
    </>
  );
}