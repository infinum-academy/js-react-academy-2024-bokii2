import { useContext } from "react"
import { StepperContext } from "./StepperContextProvider";
import { Button, Flex } from "@chakra-ui/react";

export const StepperButtons = () => {
    const { currentStep, setCurrentStep } = useContext(StepperContext);

    return (
        <Flex width="100%" justifyContent="space-between">
			<Button onClick={() => setCurrentStep(currentStep - 1)}>Previous</Button>
			<Button onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>
		</Flex>
    );
}