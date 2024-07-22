import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { Container } from "@chakra-ui/react";

export default function Layout({ children }: any) {
  return (
    <>
      <SidebarNavigation />
      <Container>{children}</Container>
    </>
  );
}