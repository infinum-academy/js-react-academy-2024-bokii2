import { useContext } from "react";
import { StepperContext } from "./StepperContextProvider";
import { Progress } from "@chakra-ui/react";

export const StepperProgress = () => {
    const { currentStep, predefinedSteps} = useContext(StepperContext);

	const progress = (currentStep / (predefinedSteps-1)) * 100;
	return <Progress value={progress} />;
}