'use client'

import { useEffect, useState } from "react"
import { ShowDetails } from "../ShowDetails/ShowDetails"
import { ShowReviewSection } from "../ShowReviewSection/ShowReviewSection"
import { Flex } from "@chakra-ui/react"
import useSWR from "swr"
import { useParams } from "next/navigation"
import { swrKeys } from "@/fetchers/swrKeys"
import { fetcher } from "@/fetchers/fetcher"
import { IShow } from "@/typings/Show.type"
import { IReview } from "@/typings/Review.type"


export const ShowContainer = () => {
    const [averageRating, setAverageRating] = useState(0);
    const [reviewsList, setReviewsList] = useState<IReview[]>([]);

    const params = useParams();

    const id = params.id as string;

    const { data, error, isLoading } = useSWR<IShow>(swrKeys.showdetails(id), fetcher);
    
    let calcAvgRating = (reviews: IReview[]) => {
        let sum = 0;
        
        reviews.forEach((review) => {
            sum += review.rating;
        });
        
        return Number((sum / reviews.length).toFixed(2));
    }
    
    if (isLoading) return <div>loading...</div>
    
    if (error) return <div>failed to load</div>

    if(!isLoading){
        if(!data)
            return null;    
    }

    return (
        <Flex flexDirection='column' alignItems='left' width='920px'>
            {data && <ShowDetails show={data.show} avgRating={averageRating} />}
            <ShowReviewSection id={Number(id)} />
        </Flex>
    )
}