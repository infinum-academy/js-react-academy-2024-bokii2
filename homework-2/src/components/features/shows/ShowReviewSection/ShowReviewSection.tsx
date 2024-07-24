'use client'

import { Flex, Heading } from "@chakra-ui/react"
import { ReviewForm } from "../ReviewForm/ReviewForm"
import { ReviewList } from "../../review/ReviewList/ReviewList"
import { IReview, IReviewList } from "@/typings/Review.type";
import useSWR, { mutate } from "swr";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";
import useSWRMutation from "swr/mutation";
import { createReview } from "@/fetchers/review";

interface IShowReviewSectionProps {
    id: number;
    setAvgRating: (avg: number) => void;
}

export const ShowReviewSection = ({id, setAvgRating}: IShowReviewSectionProps) => {
    const { data, error, isLoading } = useSWR<IReviewList>(swrKeys.getReviews(id.toString()), fetcher);

    const { trigger } = useSWRMutation(swrKeys.createReview, createReview, {
        onSuccess: () => {
            mutate(swrKeys.getReviews(id.toString()))
        }
    })

    const addReview = async (newReview: IReview) =>{
        await trigger(newReview);
    }
    
    if (isLoading) return <div>loading...</div>
    
    if (error) return <div>failed to load</div>

    return (
        <Flex backgroundColor='inherit' max-width='920px' align='left' margin='30px 0' gap={10}>
            <Heading as='h3' size='lg' color='white' alignItems='left'>
                Reviews
            </Heading>
            <Flex direction='column' flexGrow={1}  >
                <ReviewForm addShowReview={addReview} id={id} />
                {data && <ReviewList reviewList={data.reviews} setAvgRating={setAvgRating} />}
            </Flex>
        </Flex>
    )
}