import { Myprofile } from "@/components/features/myprofile/MyProfile";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function MyProfile() {
    return (
        <>
            <AuthRedirect to="/login" condition="loggedOut" />  
            <Myprofile />
        </>
    );
}