'use client'

import { IReview } from "@/typings/Review.type";
import { Flex } from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";
import { useEffect } from "react";

interface IReviewListProps {
    reviewList: IReview[];
    setAvgRating: (avg: number) => void;
}

export const ReviewList = ({reviewList, setAvgRating}: IReviewListProps) => {

    useEffect(() => {
        let sum = 0;
        
        reviewList.forEach((review) => {
            sum += review.rating;
        });
        
        setAvgRating(Number((sum / reviewList.length).toFixed(2)));
    })

    return (
        <Flex direction='column' mt={10}>
            {reviewList.map((review, index) => {
                return (
                    <ReviewItem review={review} key={index} />
                );
            })}
        </Flex>
    );
}