'use client'

import { StepperContextProvider } from "@/components/features/stepper/components/StepperContextProvider";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { Box, Flex } from "@chakra-ui/react";

export default function Layout({
  children
}: any) {
  return (
    <>
      <AuthRedirect to='/login' condition='loggedOut'/>
      <StepperContextProvider>
        <Flex direction={{base: 'column', md: 'row'}} minWidth='100%'>
          <Box height={{base: 'none', md: '100vh'}} position={{md: 'sticky'}} top={0}>
            <SidebarNavigation />
          </Box>
          <Box margin='auto'>
            {children}
          </Box>
        </Flex>
      </StepperContextProvider>
    </>
  );
}