'use client'

import { IReview } from "@/typings/Review.type";
import { Flex } from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";
import { useEffect } from "react";

interface IReviewListProps {
    reviewList: IReview[];
    refetchShowDetails: () => void;
}

export const ReviewList = ({reviewList, refetchShowDetails}: IReviewListProps) => {
    return (
        <Flex direction='column' mt={10} width={{base: '343px', xl: '870px'}}>
            {reviewList.map((review, index) => {
                return (
                    <ReviewItem review={review} key={index} refetchShowDetails={refetchShowDetails}/>
                );
            })}
        </Flex>
    );
}