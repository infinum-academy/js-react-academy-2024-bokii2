import { IReview } from "@/typings/Review.type"
import { Alert, Button, chakra, Container, Flex, FormControl, FormErrorMessage, Text, Textarea } from "@chakra-ui/react"
import { useState } from "react";
import { StarsRating } from "./StarsRating/StarsRating";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";
import { IUser } from "@/typings/User.type";

interface IReviewFormProps {
    addShowReview: (review: IReview) => void;
    id: number;
}

interface IReviewInput {
    id: number;
    comment: string;
    rating: number;
}

export const ReviewForm = ({addShowReview, id}: IReviewFormProps) => {
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const [err, setErr] = useState('')

    const {register, handleSubmit, formState: { isSubmitting, errors }, reset } = useForm<IReviewInput>();  
    const { data } = useSWR<IUser>(swrKeys.me, fetcher);
    
    const addReview = async (rev: IReviewInput) => {

        if(!data)
            return;

        if(!rev.comment && !rev.rating) {
            alert("Please give rating!");
            return;
        }

        const newReview: IReview = {
            show_id: id,
            comment: rev.comment,
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
            <FormControl isDisabled={isSubmitting}>
                <Flex alignItems='center' my={4} data-testid='rating' >
                    <Text fontSize='2xl' mr={3} >Rating</Text>
                    <StarsRating {...register('rating')} rating={rating} setRating={setRating} /> 
                    {
                        err && (
                            <Alert status="error">{err}</Alert>
                        )
                    }
                </Flex>
            </FormControl>
            <Button isDisabled={isSubmitting} borderRadius='20px' padding='0 25px' type="submit">Post</Button>
        </chakra.form>
    )
}