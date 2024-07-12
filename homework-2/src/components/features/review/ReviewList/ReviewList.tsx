import { IReview } from "@/typings/Review.type";
import { Flex } from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";

interface IReviewListProps {
    reviewList: IReview[];
    deleteReview: (review: IReview) => void;
}

export const ReviewList = ({reviewList, deleteReview}: IReviewListProps) => {    
    return (
        <Flex direction='column' mt={10}>
            {reviewList.map((review, index) => {
                return (
                    <ReviewItem review={review} key={index} onDeleteReview={deleteReview} />
                );
            })}
        </Flex>
    );
}