'use client'

import { useState } from "react"
import { ShowDetails } from "../ShowDetails/ShowDetails"
import { ShowReviewSection } from "../ShowReviewSection/ShowReviewSection"
import { Flex } from "@chakra-ui/react"
import useSWR from "swr"
import { useParams } from "next/navigation"
import { swrKeys } from "@/fetchers/swrKeys"
import { fetcher } from "@/fetchers/fetcher"
import { IShow } from "@/typings/Show.type"

interface IShowResp {
    show: IShow;
}

export const ShowContainer = () => {
    const [averageRating, setAverageRating] = useState(0);

    const params = useParams();

    const id = params.id as string;

    const { data, error, isLoading } = useSWR<IShowResp>(swrKeys.showdetails(id), fetcher);
    
    if (isLoading) return <div>loading...</div>
    
    if (error) return <div>failed to load</div>

    return (
        <Flex flexDirection='column' alignItems='left'>
            {data && <ShowDetails show={data.show} avgRating={averageRating} />}
            <ShowReviewSection id={Number(id)} />
        </Flex>
    )
}