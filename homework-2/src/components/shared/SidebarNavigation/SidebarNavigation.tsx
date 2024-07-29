import { Flex, Hide, Show } from "@chakra-ui/react"
import { MobileSidebar } from "./MobileSidebar/MobileSidebar"
import { DesktopSidebar } from "./DesktopSidebar/DesktopSidebar"
import { Header } from "../Header/Header"

export const SidebarNavigation = () => {
    return (
        <>
            <Flex direction="column">
                <Flex direction="row" padding={5} alignItems="center" justifyContent="space-between" >
                    <Header/>
                    <Hide above='md'>
                        <MobileSidebar />
                    </Hide>
                </Flex>
                <Show above='md'>
                    <DesktopSidebar />
                </Show>
            </Flex>
        </>
    )
}   