import { Box, Button, Flex, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { StepperButtons } from "./components/StepperButtons";
import { StepperSteps } from "./components/StepperSteps";
import { useContext } from "react";
import { StepperContext } from "./components/StepperContextProvider";
import { StepperProgress } from "./components/StepperProgress";
import { colors } from "@/styles/theme/foundations/colors";

export const Stepper = () => {
    const { isOpen, onOpen, onClose } = useContext(StepperContext);
	return (
		<Flex>
			<Button onClick={onOpen} variant="link">Picker</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
                <ModalContent backgroundColor={colors.purple} color='white' justifyItems='center'>
                    <ModalHeader>Pick TV shows</ModalHeader>
                    <ModalBody>
                        <StepperSteps />
                    </ModalBody>
                    <ModalFooter>
                        <Flex direction="column" minWidth='100%' gap={5}>
                            <StepperProgress />
                            <StepperButtons />
                        </Flex>
                    </ModalFooter>
                </ModalContent>
			</Modal>
		</Flex>
	);
}