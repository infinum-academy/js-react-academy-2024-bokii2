'use client'

import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";

interface IAuthRedirectProps {
    to: string,
    condition: 'loggedIn' | 'loggedOut'
}

export const AuthRedirect = ({ to, condition }: IAuthRedirectProps) => {
    const router = useRouter();
    const { data, isLoading } = useSWR(swrKeys.me, fetcher);

    useEffect(() => {
        if (isLoading) {
            return;
        }

        if (!data && condition === 'loggedOut') {
            console.log('Logged out, redirecting');
            router.push(to);
        }

        if (data && condition === 'loggedIn') {
            console.log('Logged in, redirecting');
            router.push(to);
        }
    }, [data, isLoading, router, condition, to]);

    return null;
}