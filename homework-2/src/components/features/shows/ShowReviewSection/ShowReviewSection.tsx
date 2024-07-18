'use client'

import { Flex, Heading } from "@chakra-ui/react"
import { ReviewForm } from "../ReviewForm/ReviewForm"
import { ReviewList } from "../../review/ReviewList/ReviewList"
import { IReview, IReviewList } from "@/typings/Review.type";
import useSWR from "swr";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";
import { mutator } from "@/fetchers/mutators";

interface IShowReviewSectionProps {
    onAddReview: (review: IReview) => void;
    onDeleteReview: (review: IReview) => void;
    id: string;
}

export const ShowReviewSection = ({onAddReview, onDeleteReview, id}: IShowReviewSectionProps) => {
    const { data, error, isLoading } = useSWR<IReviewList>(swrKeys.getReviews(id), fetcher);
    
    console.log(data)

    if (isLoading) return <div>loading...</div>
    
    if (error) return <div>failed to load</div>

    if(isLoading){
        if(!data)
            return null;    
    }

    return (
        <Flex backgroundColor='inherit' max-width='920px' align='left' margin='30px 0' gap={10}>
            <Heading as='h3' size='lg' color='white' alignItems='left'>
                Reviews
            </Heading>
            <Flex direction='column' flexGrow={1}  >
                <ReviewForm addShowReview={onAddReview} />
                {data && <ReviewList reviewList={data.reviews} deleteReview={onDeleteReview} />}
            </Flex>
        </Flex>
    )
}