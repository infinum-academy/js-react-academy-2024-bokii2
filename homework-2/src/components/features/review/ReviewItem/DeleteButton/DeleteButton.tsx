import { deleteReview } from "@/fetchers/review";
import { swrKeys } from "@/fetchers/swrKeys";
import { IReview } from "@/typings/Review.type"
import { DeleteIcon } from "@chakra-ui/icons";
import useSWR, { mutate } from "swr";
import useSWRMutation from "swr/mutation";

interface IDeleteButtonProps {
    review: IReview;
    refetchShowDetails: () => void;
}

export const DeleteButton = ({ review, refetchShowDetails }: IDeleteButtonProps) => {
    const { trigger } = useSWRMutation(swrKeys.review(`${review.id}`), deleteReview, {
        onSuccess: () => {
            mutate(swrKeys.getReviews(review.show_id.toString()))
        }
    })

    const onDelete = async () =>{
        await trigger(review);
        refetchShowDetails();
    }

    return (
        <>
            <DeleteIcon onClick={() => onDelete()} boxSize={7} mr='10px' data-testid="delete-button" cursor='pointer' />
        </>
    )
}