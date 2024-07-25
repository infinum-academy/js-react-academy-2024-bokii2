import { Button, Flex, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { createContext, useState } from "react";

interface IStepperContext {
    currentStep: number;
    setCurrentStep: (newStep: number) => void;
}

export const StepperContext = createContext<IStepperContext>({} as IStepperContext)

export const Stepper = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [currentStep, setCurrentStep] = useState(0);

	return (
		<>
			<Button onClick={onOpen} variant="link">Picker</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
                <ModalContent>
                    <ModalHeader>Pick TV shows</ModalHeader>
                    <ModalBody>
                        
                    </ModalBody>
                    <ModalFooter>
                        <Flex>
                            
                        </Flex>
                    </ModalFooter>
                </ModalContent>
			</Modal>
		</>
	);
}