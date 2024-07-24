import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { colors } from "@/styles/theme/foundations/colors";
import { Box, Container, Flex } from "@chakra-ui/react";

export default function Layout({
  children
}: any) {
  return (
    <>
      <AuthRedirect to='/login' condition='loggedOut'/>
      <Flex>
        <Box width="20%"><SidebarNavigation /></Box>
        <Box width="80%" backgroundColor={colors.darkpurple}>{children}</Box>
      </Flex>
    </>
  );
}