import { Button, Flex, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { StepperButtons } from "./components/StepperButtons";
import { StepperSteps } from "./components/StepperSteps";

export const Stepper = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button onClick={onOpen} variant="link">Picker</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
                <ModalContent>
                    <ModalHeader>Pick TV shows</ModalHeader>
                    <ModalBody>
                        <StepperSteps />
                    </ModalBody>
                    <ModalFooter>
                        <StepperButtons />
                    </ModalFooter>
                </ModalContent>
			</Modal>
		</>
	);
}