import { useContext } from "react"
import { StepperContext } from "./StepperContextProvider";
import { StepperStep } from "./StepperStep";
import { StepperResults } from "./StepperResults";

export const StepperSteps = () => {
    const { currentStep, predefinedSteps } = useContext(StepperContext);

    if(currentStep < predefinedSteps - 1) {
        return <StepperStep />
    } else {
        return <StepperResults />
    }
}