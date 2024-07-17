'use client'

import { getShowsList } from "@/fetchers/shows";
import { ShowsList } from "../ShowsList/ShowsList";
import useSWR from "swr";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";
import { IShow, IShowList } from "@/typings/Show.type";

export const ShowListContainer = () => {

    const { data, error, isLoading } = useSWR<IShowList>(swrKeys.allshows, fetcher);
    
    const showsList = data?.shows || [];

    if (isLoading) return <div>loading...</div>

    if (error) return <div>failed to load</div>

    return (
        <ShowsList shows={showsList}/>
    )
}