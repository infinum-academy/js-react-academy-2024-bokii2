import { RegisterForm } from "@/components/features/auth/RegisterForm/RegisterForm";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function Register() {
    return (
        <>
            <AuthRedirect to='/all-shows' condition='loggedIn' />
            <RegisterForm />
        </>
    );
}