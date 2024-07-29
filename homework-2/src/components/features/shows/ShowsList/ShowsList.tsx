'use client'

import { IShow } from "@/typings/Show.type"
import { ShowCard } from "../ShowCard/ShowCard"
import { Flex } from "@chakra-ui/react";

interface IShowListProps{
    shows: IShow[];
}

export const ShowsList = ({shows}: IShowListProps) => {
    return (
        <Flex margin='0 20px' flexWrap='wrap' justifyContent='space-around' gap={8} flex="0 0 auto">
            {shows.map((show) => {
                return (
                    <ShowCard key={show.id} show={show} />
                )
            })}
        </Flex>
    )
}