import { useContext } from "react"
import { StepperContext } from "./StepperContextProvider";
import { Button, Flex } from "@chakra-ui/react";

export const StepperButtons = () => {
    const { currentStep, setCurrentStep, predefinedSteps, onClose } = useContext(StepperContext);

    return (
        <Flex width="100%" justifyContent="space-between">
            {currentStep !== predefinedSteps - 1 ?
                (
                    <>
                        <Button onClick={() => setCurrentStep(currentStep - 1)} isDisabled={currentStep === 0} >Previous</Button>
                        <Button onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>
                    </>
                ) : (
                    <Button onClick={() => { 
                        if(onClose){
                            onClose();
                        }
                        setCurrentStep(0);
                    }}>Close</Button>
                )
            }
			
		</Flex>
    );
}