'use client'

import useSWR from "swr";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";
import { IShowList } from "@/typings/Show.type";
import { ShowsList } from "../ShowsList/ShowsList";

export const ShowListContainer = () => {

    const { data, error, isLoading } = useSWR<IShowList>(swrKeys.allshows, fetcher);
    
    const showsList = data?.shows || [];

    if (isLoading) return <div>loading...</div>

    if (error) return <div>failed to load</div>

    return (
        <ShowsList shows={showsList}/>
    )
}