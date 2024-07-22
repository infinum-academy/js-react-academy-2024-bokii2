import { TopRatedShows } from "@/components/features/shows/TopRatedShows/TopRated";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function TopRated() {
    return (
        <>
            <AuthRedirect to='/login' condition='loggedOut' />
            <TopRatedShows />
        </>
    );
}