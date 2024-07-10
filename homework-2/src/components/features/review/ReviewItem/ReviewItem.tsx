import { IReview } from "@/typings/Review.type"
import { Button, Card, CardBody, Text } from "@chakra-ui/react"

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
                <Button borderRadius={20} onClick={() => onDeleteReview(review)}>Remove</Button>
            </CardBody>
        </Card>
    )
}