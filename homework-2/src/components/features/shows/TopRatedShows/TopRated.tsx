'use client'

import useSWR from "swr";
import { ShowsList } from "../ShowsList/ShowsList";
import { IShowList } from "@/typings/Show.type";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";
import { Spin } from "@/components/shared/Spinner/Spinner";
import { Error } from "@/components/shared/Error/Error";

export const TopRatedShows = () => {
    const { data, error, isLoading } = useSWR<IShowList>(swrKeys.toprated, fetcher);

    const topRated = data?.shows || [];

    if (isLoading) return <Spin message="Loading the shows..." />

    if (error) return <Error />

    return (
        <ShowsList shows={topRated} />
    )
} 