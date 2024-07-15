'use client'

import { getTopRated } from "@/fetchers/shows";
import useSWR from "swr";
import { ShowsList } from "../ShowsList/ShowsList";

export const TopRatedShows = () => {
    const { data, error, isLoading } = useSWR(`/shows/top-rated`, getTopRated);
    const topRated = data?.shows || [];
    console.log(topRated);

    if (isLoading) return <div>loading...</div>

    if (error) return <div>failed to load</div>

    return (
        <ShowsList shows={topRated} />
    )
} 