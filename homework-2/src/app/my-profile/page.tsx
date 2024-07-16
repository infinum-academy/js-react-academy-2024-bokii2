import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function MyProfile() {
    return (
        <>
            <AuthRedirect to='/login' condition='loggedOut' />
        </>
    );
}