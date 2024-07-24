import { Myprofile } from "@/components/features/myprofile/Myprofile";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function MyProfile() {
    return (
        <>
            <AuthRedirect to="/login" condition="loggedOut" />  
            <Myprofile />
        </>
    );
}