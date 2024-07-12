'use client'

import { IShow } from "@/typings/Show.type"
import { ShowCard } from "../ShowCard/ShowCard"
import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { getShowsList } from "@/fetchers/shows";
import useSWR from "swr";

interface IShowListProps{
    shows: IShow[];
}

export const ShowsList = () => {

    const { data, error, isLoading } = useSWR('/api/user/123', getShowsList);

    const showsList = data?.shows || [];

    if (isLoading) return <div>loading...</div>

    if (error) return <div>failed to load</div>

    return (
        <Flex bgColor='#280454' height='100vh' width='920px' flexWrap='wrap' justifyContent='space-around'>
            {showsList.map((show) => {
                return (
                    <ShowCard key={show.id} show={show} />
                )
            })}
        </Flex>
    )
}