import { IReview } from "@/typings/Review.type"
import { Button, Card, CardBody, Text } from "@chakra-ui/react"
import { StarsRating } from "../../shows/ReviewForm/StarsRating/StarsRating";

interface IReviewItemProps {
    review: IReview;
    onDeleteReview: (review: IReview) => void;
}

export const ReviewItem = ({review, onDeleteReview}: IReviewItemProps) => {
    return (
        <Card backgroundColor='#381484' color='white' borderRadius={20} margin='8px 0'>
            <CardBody margin='10px' marginLeft='20px'>
                <Text>{review.comment}</Text>
                <Text margin='10px 0'>{review.rating} / 5</Text>
                <StarsRating rating={review.rating} setRating={() => {}} read />
                <Button borderRadius={20} onClick={() => onDeleteReview(review)} mt='10px' >Remove</Button>
            </CardBody>
        </Card>
    )
}