import { ReviewForm } from "@/components/features/shows/ReviewForm/ReviewForm";
import { updateReview } from "@/fetchers/review";
import { swrKeys } from "@/fetchers/swrKeys";
import { IReview } from "@/typings/Review.type";
import { EditIcon } from "@chakra-ui/icons";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { mutate } from "swr";
import useSWRMutation from "swr/mutation";

interface IUpdateReviewResp {
    review: IReview;
}

export const UpdateReview = ({review}: IUpdateReviewResp) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { trigger } = useSWRMutation(swrKeys.review(`${review.id}`), updateReview, {
        onSuccess: () => {
            mutate(swrKeys.getReviews(review.show_id.toString()));
            onClose();
        },
    } );

    const onUpdate = async (review: IReview) =>{
        await trigger(review);
    }

    return (
        <>
			<EditIcon w="48px" onClick={onOpen} boxSize={7} cursor='pointer' />

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Updating the review</ModalHeader>
					<ModalCloseButton />

					<ModalBody>
                        <ReviewForm addShowReview={onUpdate} id={Number(review.id)} />
					</ModalBody>

					{/* <ModalFooter>
						<Button variant="unstyled">No</Button>
						<Button onClick={onDelete}>Yes</Button>
					</ModalFooter> */}
				</ModalContent>
			</Modal>
		</>
    )
}