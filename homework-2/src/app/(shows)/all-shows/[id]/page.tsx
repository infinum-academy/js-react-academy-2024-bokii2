'use client'

import { ShowContainer } from "@/components/features/shows/ShowContainer/ShowContainer";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function AllShowsDetails () {
    return (
        <>
            <AuthRedirect to='/login' condition='loggedOut'/>
            <ShowContainer />
        </>
    )
}