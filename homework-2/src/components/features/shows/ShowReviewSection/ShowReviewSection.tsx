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
import { sizes } from "@/styles/theme/foundations/font";
import { Spin } from "@/components/shared/Spinner/Spinner";
import { Error } from "@/components/shared/Error/Error";

interface IShowReviewSectionProps {
    id: number;
    refetchShowDetails: () => void;
}

export const ShowReviewSection = ({id, refetchShowDetails}: IShowReviewSectionProps) => {
    const { data, error, isLoading } = useSWR<IReviewList>(swrKeys.getReviews(id.toString()), fetcher);

    const { trigger } = useSWRMutation(swrKeys.createReview, createReview, {
        onSuccess: () => {
            mutate(swrKeys.getReviews(id.toString()))
            refetchShowDetails();
        }
    })

    const addReview = async (newReview: IReview) =>{
        await trigger(newReview);
    }
    
    if (isLoading) return <Spin message="Loading the reviews..." />
    
    if (error) return <Error />

    return (
        <Flex 
            direction={{base: 'column', xl: 'row'}}
            backgroundColor='inherit' align='left' gap={20} justifyContent='space-between' maxWidth='100%'>
            <Heading fontSize={sizes.title} color='white' alignItems='left' width='175px'>
                Reviews
            </Heading>
            <Flex direction='column'justifySelf='right'>
                <ReviewForm addShowReview={addReview} id={id} />
                {data && <ReviewList reviewList={data.reviews} refetchShowDetails={refetchShowDetails} />}
            </Flex>
        </Flex>
    )
}