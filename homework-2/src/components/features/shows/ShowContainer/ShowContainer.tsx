'use client'

import { useState } from "react"
import { ShowDetails } from "../ShowDetails/ShowDetails"
import { ShowReviewSection } from "../ShowReviewSection/ShowReviewSection"
import { Flex, Heading } from "@chakra-ui/react"
import useSWR from "swr"
import { getShowDetails } from "@/fetchers/shows"
import { useParams } from "next/navigation"

export const ShowContainer = () => {
    const [averageRating, setAverageRating] = useState(0);

    const params = useParams();

    const { data, error, isLoading } = useSWR(`/shows/${params.id}`, () => getShowDetails(params.id as string));

    if (isLoading) return <div>loading...</div>

    if (error) return <div>failed to load</div>

    return (
        <Flex flexDirection='column' alignItems='left' width='920px'>
            <Heading as='h3' size='lg' marginBottom='20px'>TV Shows App</Heading>
            <ShowDetails show={data} avgRating={averageRating} />
            <ShowReviewSection setAvgRating={setAverageRating} />
        </Flex>
    )
}