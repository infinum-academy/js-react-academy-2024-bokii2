import { ShowListContainer } from "@/components/features/shows/ShowListContainer/ShowListContainer";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";

export default function AllShows() {
    return (
        <>
            <AuthRedirect to='/login' condition='loggedOut'/>
            {/* <SidebarNavigation /> */}
            <ShowListContainer />
        </>
    );
}