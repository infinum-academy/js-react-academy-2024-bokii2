import { IReview } from "@/typings/Review.type"
import { Image, Card, Flex, Text } from "@chakra-ui/react"
import { StarsRating } from "../../shows/ReviewForm/StarsRating/StarsRating";
import { DeleteButton } from "./DeleteButton/DeleteButton";
import useSWR from "swr";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";
import { IUser } from "@/typings/User.type";
import { UpdateReview } from "./UpdateReview/UpdateReview";
import { ReviewButton } from "./ReviewButton/ReviewButton";
import { radius } from "@/styles/theme/foundations/radius";

interface IReviewItemProps {
    review: IReview;
    refetchShowDetails: () => void;
}

interface IReviewResp {
    user: IUser;
}

export const ReviewItem = ({review, refetchShowDetails}: IReviewItemProps) => {
    const {data} = useSWR<IReviewResp>(swrKeys.me, fetcher);

    return (
        <Card backgroundColor='#381484' color='white' borderRadius={20} margin='8px 0' width={{base: '343px', xl: '870px'}} padding='30px'>
            <Flex direction={{base: 'column', xl: 'row'}} alignItems='center' width='100%' gap={8}>
                <Flex direction='row' gap={8}>
                    <Image alt="avatar" src='https://i.pravatar.cc/50' borderRadius={radius.full} />
                    <Flex direction='column'>
                        <Text mb='5px'>{review.user?.email}</Text>
                        <Flex direction='row'>
                            <Text mr='10px'>{review.rating + ' / 5'}</Text>
                            <StarsRating rating={review.rating} setRating={() => {}} read />
                        </Flex>
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between' flexGrow={1}>
                    <Text data-testid='comment'>{review.comment}</Text>
                    {
                        review.user?.email === data?.user.email && <ReviewButton review={review} refetchShowDetails={refetchShowDetails} />
                    }
                </Flex>
            </Flex>
        </Card>
    )
}