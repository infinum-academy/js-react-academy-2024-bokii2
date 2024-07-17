'use client'

import { Flex, Heading } from "@chakra-ui/react"
import { ReviewForm } from "../ReviewForm/ReviewForm"
import { ReviewList } from "../../review/ReviewList/ReviewList"
import { IReview } from "@/typings/Review.type";

interface IShowReviewSectionProps {
    onAddReview: (review: IReview) => void;
    onDeleteReview: (review: IReview) => void;
    reviewsList: IReview[];
}

export const ShowReviewSection = ({onAddReview, onDeleteReview, reviewsList}: IShowReviewSectionProps) => {
    return (
        <Flex backgroundColor='inherit' max-width='920px' align='left' margin='30px 0' gap={10}>
            <Heading as='h3' size='lg' color='white' alignItems='left'>
                Reviews
            </Heading>
            <Flex direction='column' flexGrow={1}  >
                <ReviewForm addShowReview={onAddReview} />
                <ReviewList reviewList={reviewsList} deleteReview={onDeleteReview} />
            </Flex>
        </Flex>
    )
}