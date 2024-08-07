import { IReview } from "@/typings/Review.type"
import { Alert, Button, chakra, Flex, FormControl, Text, Textarea } from "@chakra-ui/react"
import { StarsRating } from "./StarsRating/StarsRating";
import { Controller, useForm } from "react-hook-form";
import { sizes } from "@/styles/theme/foundations/font";

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
    const {register, handleSubmit, setError, clearErrors, formState: { isSubmitting, errors }, reset, control } = useForm<IReviewInput>();  
    
    const addReview = async (data: IReviewInput) => {

        if (!data.rating) {
            setError('rating', { type: 'manual', message: 'Please give a rating!' });
            return;
        }

        const newReview: IReview = {
            show_id: id,
            comment: data.comment,
            rating: data.rating
        };

        addShowReview(newReview);
        reset();
        clearErrors('rating');
    }

    return (
        <chakra.form width={{base: '343px', xl: '870px'}} onSubmit={handleSubmit(addReview)} >
            <FormControl isDisabled={isSubmitting}>
                <Textarea {...register('comment', {required: "Please leave a comment!"})} backgroundColor='white' color='black' width='100%' alignContent='center' placeholder="Enter review" disabled={isSubmitting} />
                {errors.comment && <Alert status="error">{errors.comment?.message}</Alert>}
            </FormControl>
            <FormControl isDisabled={isSubmitting}>
                <Flex alignItems='center' my={4}  data-testid="rating" >
                    <Text fontSize={sizes.body.web} mr={3} >Rating</Text>
                    <Controller 
                        name="rating"
                        control={control}
                        defaultValue={0}
                        render={({ field: {onChange, value} }) => {
                            return <StarsRating 
                                rating={value} 
                                setRating={(value) => {
                                    onChange(value);
                                    if (value) clearErrors('rating');
                            }} />
                        }}
                    />                    
                    <Button isDisabled={isSubmitting} padding='0 25px' type="submit" ml='auto' >Post</Button>
                </Flex>
                {errors.rating && <Alert status="error">{errors.rating?.message}</Alert>} 
            </FormControl>
        </chakra.form>
    )
}