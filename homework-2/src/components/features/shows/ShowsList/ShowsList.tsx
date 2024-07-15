'use client'

import { IShow } from "@/typings/Show.type"
import { ShowCard } from "../ShowCard/ShowCard"
import { Flex } from "@chakra-ui/react";

interface IShowListProps{
    shows: IShow[];
}

export const ShowsList = ({shows}: IShowListProps) => {
    return (
        <Flex bgColor='#280454' height='100vh' width='920px' flexWrap='wrap' justifyContent='space-around' data-testid='showsList'>
            {shows.map((show) => {
                return (
                    <ShowCard key={show.id} show={show} />
                )
            })}
        </Flex>
    )
}