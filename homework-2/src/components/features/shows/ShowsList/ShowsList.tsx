import { IShow } from "@/typings/Show.type"
import { ShowCard } from "../ShowCard/ShowCard"

interface IShowListProps{
    shows: IShow[];
}

export const ShowList = ({shows}: IShowListProps) => {
    return (
        shows.map((show) => {
            <ShowCard show={show} />
        })
    )
}