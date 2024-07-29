import { ReviewForm } from "@/components/features/shows/ReviewForm/ReviewForm";
import { updateReview } from "@/fetchers/review";
import { swrKeys } from "@/fetchers/swrKeys";
import { colors } from "@/styles/theme/foundations/colors";
import { sizes } from "@/styles/theme/foundations/font";
import { IReview } from "@/typings/Review.type";
import { EditIcon } from "@chakra-ui/icons";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Text } from "@chakra-ui/react"
import { mutate } from "swr";
import useSWRMutation from "swr/mutation";

interface IUpdateReviewResp {
    review: IReview;
    refetchShowDetails: () => void;
}

export const UpdateReview = ({review, refetchShowDetails}: IUpdateReviewResp) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { trigger } = useSWRMutation(swrKeys.review(`${review.id}`), updateReview, {
        onSuccess: () => {
            mutate(swrKeys.getReviews(review.show_id.toString()));
            onClose();
        },
    } );

    const onUpdate = async (review: IReview) =>{
        await trigger(review);
        refetchShowDetails();
    }

    return (
        <>
            <Text color={colors.purple} onClick={onOpen} size={sizes.button}>Edit</Text>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Updating the review</ModalHeader>
					<ModalCloseButton />

					<ModalBody>
                        <ReviewForm addShowReview={onUpdate} id={Number(review.id)} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
    )
}