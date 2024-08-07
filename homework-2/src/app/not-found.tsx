'use client'

import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        router.push('/all-shows');
    }, [router]);

    return null;
}