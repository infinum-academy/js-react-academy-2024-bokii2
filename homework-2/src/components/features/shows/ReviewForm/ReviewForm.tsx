import { IReview } from "@/typings/Review.type"
import { Button, Container, Flex, Text, Textarea } from "@chakra-ui/react"
import { useState } from "react";
import { StarsRating } from "./StarsRating/StarsRating";

interface IReviewFormProps {
    addShowReview: (review: IReview) => void;
}

export const ReviewForm = ({addShowReview}: IReviewFormProps) => {
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    
    const onClickHandler = () => {

        if(!comment || rating == 0) {
            alert("Please fill all the inputs!");
            return;
        }

        const newReview: IReview = {
            comment,
            rating
        };

        addShowReview(newReview);
        setComment('');
        setRating(0);
    }

    return (
        <Container maxWidth='inherit'>
            <Textarea value={comment} onChange={(e) => setComment(e.target.value)} backgroundColor='white' color='black' width='100%' alignContent='center' placeholder="Enter review" />
            <Flex alignItems='center' my={4} data-testid="rating" >
                <Text fontSize='2xl' mr={3} >Rating</Text>
                <StarsRating rating={rating} setRating={setRating} /> 
            </Flex>
            <Button onClick={onClickHandler} borderRadius='20px' padding='0 25px'>Post</Button>
        </Container>
    )
}