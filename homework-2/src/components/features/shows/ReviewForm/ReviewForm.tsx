import { IReview } from "@/typings/Review.type"
import { Button, Container, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Textarea } from "@chakra-ui/react"

interface IReviewFormProps {
    addShowReview: (review: IReview) => void;
}

export const ReviewForm = ({addShowReview}: IReviewFormProps) => {
    const onClickHandler = () => {
        const commentInput = document.getElementById('comment-input') as HTMLInputElement;
        const newComment = commentInput.value;

        const ratingInput = document.getElementById('rating-input') as HTMLInputElement;
        const newRating = ratingInput.value;

        if(!newComment || newRating == '0') {
            alert("Please fill all the inputs!");
            return;
        }

        const newReview: IReview = {
            comment: newComment,
            rating: Number(newRating)
        };

        addShowReview(newReview);
        commentInput.value = '';
        ratingInput.value = '0';
    }

    return (
        <Container  maxWidth='inherit'>
            <Textarea backgroundColor='white' color='black' id="comment-input" width='100%'/>
            <NumberInput defaultValue={0} min={0} max={5} step={1} width='fit-content' margin='15px 0'>
                <NumberInputField  backgroundColor='white' color='black' id="rating-input" />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <Button onClick={onClickHandler} borderRadius='20px' padding='0 25px'>Post</Button>
        </Container>
    )
}