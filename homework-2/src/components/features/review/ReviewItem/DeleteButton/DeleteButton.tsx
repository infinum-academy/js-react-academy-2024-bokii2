import { deleteReview } from "@/fetchers/review";
import { swrKeys } from "@/fetchers/swrKeys";
import { IReview } from "@/typings/Review.type"
import { DeleteIcon } from "@chakra-ui/icons";
import useSWR, { mutate } from "swr";
import useSWRMutation from "swr/mutation";
import { Text } from "@chakra-ui/react"
import { sizes } from "@/styles/theme/foundations/font";
import { colors } from "@/styles/theme/foundations/colors";


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
            <Text color={colors.purple} onClick={() => onDelete()} size={sizes.button}>Delete</Text>
        </>
    )
}