import { IReview } from "@/typings/Review.type"
import { Alert, Button, chakra, Flex, FormControl, Text, Textarea } from "@chakra-ui/react"
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
    const {register, handleSubmit, setValue, setError, clearErrors, formState: { isSubmitting, errors }, reset, watch } = useForm<IReviewInput>();  
    
    const rating = watch('rating')

    const addReview = async (data: IReviewInput) => {

        if (!data.rating) {
            setError('rating', { type: 'manual', message: 'Please give a rating!' });
            return;
        }
        const newReview: IReview = {
            comment: data.comment,
            rating: data.rating
        };

        addShowReview(newReview);
        reset();
        clearErrors('rating');
}

    return (
        <chakra.form maxWidth='inherit' onSubmit={handleSubmit(addReview)} >
            <FormControl isDisabled={isSubmitting}>
                <Textarea {...register('comment', {required: "Please leave a comment!"})} backgroundColor='white' color='black' width='100%' alignContent='center' placeholder="Enter review" disabled={isSubmitting} />
                {errors.comment && <Alert status="error">{errors.comment?.message}</Alert>}
            </FormControl>
            <FormControl isDisabled={isSubmitting}>
                <Flex alignItems='center' my={4} >
                    <Text fontSize='2xl' mr={3} >Rating</Text>
                    <StarsRating rating={rating} setRating={(value) => {
                        setValue('rating', value);
                        if (value) clearErrors('rating');
                    }} />
                    {errors.rating && <Alert status="error">{errors.rating?.message}</Alert>} 
                </Flex>
            </FormControl>
            <Button isDisabled={isSubmitting} borderRadius='20px' padding='0 25px' type="submit">Post</Button>
        </chakra.form>
    )
}