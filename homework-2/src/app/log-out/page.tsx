import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function LogOut() {
    return (
        <>
            <AuthRedirect to='/login' condition='loggedOut' />
        </>
    );
}