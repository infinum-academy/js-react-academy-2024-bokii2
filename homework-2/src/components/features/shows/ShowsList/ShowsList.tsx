import { IShow } from "@/typings/Show.type"
import { ShowCard } from "../ShowCard/ShowCard"
import { Flex } from "@chakra-ui/react";

interface IShowListProps{
    shows: IShow[];
}

export const ShowList = ({shows}: IShowListProps) => {
    return (
        <Flex>
            {shows.map((show) => {
                return (
                    <ShowCard key={show.id} show={show} />
                )
            })}
        </Flex>
    )
}