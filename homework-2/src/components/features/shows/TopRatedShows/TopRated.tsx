'use client'

import { getTopRated } from "@/fetchers/shows";
import useSWR from "swr";
import { ShowsList } from "../ShowsList/ShowsList";
import { IShowList } from "@/typings/Show.type";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";

export const TopRatedShows = () => {
    const { data, error, isLoading } = useSWR<IShowList>(swrKeys.toprated, fetcher);

    const topRated = data?.shows || [];

    if (isLoading) return <div>loading...</div>

    if (error) return <div>failed to load</div>

    return (
        <ShowsList shows={topRated} />
    )
} 