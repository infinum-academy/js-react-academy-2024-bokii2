import { ShowListContainer } from "@/components/features/shows/ShowListContainer/ShowListContainer";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function AllShows() {
    return (
        <>
            <AuthRedirect to='/login' condition='loggedOut' />
            <ShowListContainer />
        </>
    );
}