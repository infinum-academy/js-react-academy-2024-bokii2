import { Flex, Hide, Show } from "@chakra-ui/react"
import { MobileSidebar } from "./MobileSidebar/MobileSidebar"
import { DesktopSidebar } from "./DesktopSidebar/DesktopSidebar"
import { Header } from "../Header/Header"

export const SidebarNavigation = () => {
    return (
        <>
            <Show breakpoint="(max-width: 700px)">
                <MobileSidebar />
            </Show>
            <Hide breakpoint="(max-width: 700px)">
                <DesktopSidebar />
            </Hide>
        </>
    )
}   