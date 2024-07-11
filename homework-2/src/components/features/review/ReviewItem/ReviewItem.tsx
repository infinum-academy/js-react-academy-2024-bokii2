import { IReview } from "@/typings/Review.type"
import { Button, Card, CardBody, Flex, Text } from "@chakra-ui/react"
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
                <Flex direction='row' alignItems='center' width='100%'>
                    <Text>{review.avatar}</Text>
                    <Flex direction='column'>
                        <Text margin='10px 0'>{review.rating} / 5</Text>
                        <StarsRating rating={review.rating} setRating={() => {}} read />
                    </Flex>
                    <Text>{review.comment}</Text>
                    <DeleteIcon onClick={() => onDeleteReview(review)} boxSize={7} mr='10px' flexGrow={10}  />
                    {/* <Button borderRadius={20} onClick={() => onDeleteReview(review)} mt='10px'  >Remove</Button> */}
                </Flex>
            </CardBody>
        </Card>
    )
}