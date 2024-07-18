import { IReview } from "@/typings/Review.type"
import { Image, Card, CardBody, Flex, Text, Container } from "@chakra-ui/react"
import { StarsRating } from "../../shows/ReviewForm/StarsRating/StarsRating";
import { DeleteIcon } from "@chakra-ui/icons";
import { IUser } from "@/typings/User.type";
import { DeleteButton } from "./DeleteButton/DeleteButton";

interface IReviewItemProps {
    review: IReview;
}

export const ReviewItem = ({review}: IReviewItemProps) => {
    return (
        <Card backgroundColor='#381484' color='white' borderRadius={20} margin='8px 0' width='100%' padding='30px'>
            <Flex direction='row' alignItems='center' width='100%' gap={8} ml='10px'>
                <Image alt="avatar" src='https://i.pravatar.cc/50' borderRadius={15} />
                <Flex direction='column'>
                    <Text mb='5px'>{review.user?.email}</Text>
                    <Flex direction='row'>
                        <Text mr='10px'>{review.rating + ' / 5'}</Text>
                        <StarsRating rating={review.rating} setRating={() => {}} read />
                    </Flex>
                </Flex>
                <Text flexGrow={1}>{review.comment}</Text>
                <DeleteButton review={review} />
            </Flex>
        </Card>
    )
}