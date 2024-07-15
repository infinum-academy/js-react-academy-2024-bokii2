'use client'

import { getShowsList } from "@/fetchers/shows";
import { ShowsList } from "../ShowsList/ShowsList";
import useSWR from "swr";

export const ShowListContainer = () => {

    const { data, error, isLoading } = useSWR(`/shows`, getShowsList);

    const showsList = data?.shows || [];

    if (isLoading) return <div>loading...</div>

    if (error) return <div>failed to load</div>

    return (
        <ShowsList shows={showsList}/>
    )
}