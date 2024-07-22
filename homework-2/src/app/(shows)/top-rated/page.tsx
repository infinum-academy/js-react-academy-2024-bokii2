import { TopRatedShows } from "@/components/features/shows/TopRatedShows/TopRated";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";

export default function TopRated() {
    return (
        <>
            <AuthRedirect to='/login' condition='loggedOut' />
            {/* <SidebarNavigation /> */}
            <TopRatedShows />
        </>
    );
}