import { IReview, IReviewList } from "@/typings/Review.type";
import { Container, Flex } from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";

interface IReviewListProps {
    reviewList: IReviewList;
    deleteReview: (review: IReview) => void;
}

export const ReviewList = ({reviewList, deleteReview}: IReviewListProps) => {
    return (
        <Flex direction='column' >
            {reviewList.reviews.map((review, index) => {
                return (
                    <ReviewItem review={review} key={index} onDeleteReview={deleteReview} />
                );
            })}
        </Flex>
    );
}