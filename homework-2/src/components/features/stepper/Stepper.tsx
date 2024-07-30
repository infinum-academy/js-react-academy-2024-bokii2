import { Box, Button, Flex, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { StepperButtons } from "./components/StepperButtons";
import { StepperSteps } from "./components/StepperSteps";
import { useContext } from "react";
import { StepperContext } from "./components/StepperContextProvider";
import { StepperProgress } from "./components/StepperProgress";

export const Stepper = () => {
    const { isOpen, onOpen, onClose } = useContext(StepperContext);
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
                        <Flex direction="column" minWidth='100%'>
                            <StepperProgress />
                            <StepperButtons />
                        </Flex>
                    </ModalFooter>
                </ModalContent>
			</Modal>
		</>
	);
}