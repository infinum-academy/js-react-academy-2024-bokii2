import { IReview } from "@/typings/Review.type"
import { Button, Container, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Textarea } from "@chakra-ui/react"

interface IReviewFormProps {
    addShowReview: (review: IReview) => void;
}

export const ReviewForm = ({addShowReview}: IReviewFormProps) => {
    const onClickHandler = () => {
        const commentInput = document.getElementById('comment-input') as HTMLInputElement;
        const newComment = commentInput.value;

        const ratingInput = document.getElementById('rating-input') as HTMLInputElement;
        const newRating = ratingInput.value;

        const newReview: IReview = {
            comment: newComment,
            rating: Number(newRating)
        };

        addShowReview(newReview);
        commentInput.value = '';
    }

    return (
        <Container width='inherit' margin='15px 0'>
            <Textarea backgroundColor='white' color='black' id="comment-input"/>
            <NumberInput defaultValue={0} min={0} max={5} step={1} id="rating-input" >
                <NumberInputField  backgroundColor='white' color='black' />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <Button onClick={onClickHandler}>Post</Button>
        </Container>
    )
}