'use client'

import { Flex, Heading } from "@chakra-ui/react"
import { ReviewForm } from "../ReviewForm/ReviewForm"
import { ReviewList } from "../../review/ReviewList/ReviewList"
import { IReview, IReviewList } from "@/typings/Review.type";
import useSWR, { mutate } from "swr";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";
import { mutator } from "@/fetchers/mutators";
import useSWRMutation from "swr/mutation";
import { createReview } from "@/fetchers/review";
import { sizes } from "@/styles/theme/foundations/font";

interface IShowReviewSectionProps {
    id: number;
}

export const ShowReviewSection = ({id}: IShowReviewSectionProps) => {
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
        <Flex backgroundColor='inherit' align='left' margin='30px 10px' gap={20} justifyContent='space-between' width={{base: '1053px', mob: '343px'}}>
            <Heading fontSize={sizes.title} color='white' alignItems='left' width='175px'>
                Reviews
            </Heading>
            <Flex direction='column' width='870px' justifySelf='right' >
                <ReviewForm addShowReview={addReview} id={id} />
                {data && <ReviewList reviewList={data.reviews} />}
            </Flex>
        </Flex>
    )
}