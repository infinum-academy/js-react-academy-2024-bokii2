import { LoginForm } from "@/components/features/auth/LoginForm/LoginForm";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function Register() {
    return (
        <>
            <AuthRedirect to='/all-shows' condition='loggedIn' />
            <LoginForm />
        </>
    );
}