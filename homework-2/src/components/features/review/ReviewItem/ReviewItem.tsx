import { IReview } from "@/typings/Review.type"
import { Image, Card, CardBody, Flex, Text, Container } from "@chakra-ui/react"
import { StarsRating } from "../../shows/ReviewForm/StarsRating/StarsRating";
import { DeleteIcon } from "@chakra-ui/icons";

interface IReviewItemProps {
    review: IReview;
    onDeleteReview: (review: IReview) => void;
}

export const ReviewItem = ({review, onDeleteReview}: IReviewItemProps) => {
    return (
        <Card backgroundColor='#381484' color='white' borderRadius={20} margin='8px 0' width='100%' padding='30px'>
            <Flex direction='row' alignItems='center' width='100%' gap={8} ml='10px'>
                <Image alt="avatar" src='https://i.pravatar.cc/50' borderRadius={15} />
                <Flex direction='column'>
                    <Text mb='5px'>{review.email}</Text>
                    <Flex direction='row'>
                        <Text mr='10px'>{review.rating + ' / 5'}</Text>
                        <StarsRating rating={review.rating} setRating={() => {}} read />
                    </Flex>
                </Flex>
                <Text flexGrow={1}>{review.comment}</Text>
                <DeleteIcon onClick={() => onDeleteReview(review)} boxSize={7} mr='10px' data-testid="delete-button" />
                </Flex>
        </Card>
    )
}