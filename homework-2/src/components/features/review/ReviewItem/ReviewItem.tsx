import { IReview } from "@/typings/Review.type"
import { Image, Card, CardBody, Flex, Text } from "@chakra-ui/react"
import { StarsRating } from "../../shows/ReviewForm/StarsRating/StarsRating";
import { DeleteIcon } from "@chakra-ui/icons";

interface IReviewItemProps {
    review: IReview;
    onDeleteReview: (review: IReview) => void;
}

export const ReviewItem = ({review, onDeleteReview}: IReviewItemProps) => {
    return (
        <Card backgroundColor='#381484' color='white' borderRadius={20} margin='8px 0' width='100%' >
            <CardBody margin='10px' marginLeft='20px'>
                <Flex direction='row' alignItems='center' width='100%' gap={8}>
                    <Image alt="avatar" src='https://i.pravatar.cc/50' borderRadius={15} />
                    <Flex direction='column'>
                        <Text>{review.email}test@test.com</Text>
                        <Flex direction='row'>
                            <Text margin='10px 0'>{review.rating} / 5</Text>
                            <StarsRating rating={review.rating} setRating={() => {}} read />
                        </Flex>
                    </Flex>
                    <Text flexGrow={1}>{review.comment}</Text>
                    <DeleteIcon onClick={() => onDeleteReview(review)} boxSize={7} mr='10px'  />
                </Flex>
            </CardBody>
        </Card>
    )
}