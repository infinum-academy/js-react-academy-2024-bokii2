'use client'

import useSWR from "swr";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";
import { IShowList } from "@/typings/Show.type";
import { ShowsList } from "../ShowsList/ShowsList";
import { Spin } from "@/components/shared/Spinner/Spinner";
import { Error } from "@/components/shared/Error/Error";

export const ShowListContainer = () => {

    const { data, error, isLoading } = useSWR<IShowList>(swrKeys.allshows, fetcher);
    
    const showsList = data?.shows || [];

    if (isLoading) return <Spin message="Loading ..." />

    if (error) return <Error />

    return (
        <ShowsList shows={showsList}/>
    )
}