'use client'

import { StepperContextProvider } from "@/components/features/stepper/components/StepperContextProvider";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { colors } from "@/styles/theme/foundations/colors";
import { Box, Flex } from "@chakra-ui/react";

export default function Layout({
  children
}: any) {
  return (
    <>
      <AuthRedirect to='/login' condition='loggedOut'/>
        <StepperContextProvider>
          <Flex backgroundColor={colors.darkpurple}>
            <Box width="20%"><SidebarNavigation /></Box>
            <Box width="80%">
                {children}
            </Box>
          </Flex>
        </StepperContextProvider>
    </>
  );
}