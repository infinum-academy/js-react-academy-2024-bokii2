import { IReview } from "@/typings/Review.type"
import { Alert, Button, chakra, Container, Flex, FormControl, FormErrorMessage, Text, Textarea } from "@chakra-ui/react"
import { useState } from "react";
import { StarsRating } from "./StarsRating/StarsRating";
import { useForm } from "react-hook-form";

interface IReviewFormProps {
    addShowReview: (review: IReview) => void;
}

interface IReviewInput {
    comment: string;
    rating: number;
}

export const ReviewForm = ({addShowReview}: IReviewFormProps) => {
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const [error, setError] = useState('')

    const {register, handleSubmit, formState: { isSubmitting, errors }, reset } = useForm<IReviewInput>();  
    
    const addReview = async (data: IReviewInput) => {

        if(!data.comment && !data.rating) {
            alert("Please give rating!");
            return;
        }

        const newReview: IReview = {
            comment,
            rating
        };

        addShowReview(newReview);
        reset();
        setRating(0);
    }

    return (
        <chakra.form maxWidth='inherit' onSubmit={handleSubmit(addReview)} >
            <FormControl isDisabled={isSubmitting}>
                <Textarea {...register('comment')} backgroundColor='white' color='black' width='100%' alignContent='center' placeholder="Enter review" disabled={isSubmitting} />
            </FormControl>
                <Flex alignItems='center' my={4} >
                    <Text fontSize='2xl' mr={3} >Rating</Text>
                    <StarsRating rating={rating} setRating={setRating} /> 
                    {
                        error && (
                            <Alert status="error">{error}</Alert>
                        )
                    }
                </Flex>
            <Button isDisabled={isSubmitting} borderRadius='20px' padding='0 25px' type="submit">Post</Button>
        </chakra.form>
    )
}