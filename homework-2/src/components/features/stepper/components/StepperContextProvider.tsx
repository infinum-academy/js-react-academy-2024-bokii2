import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { IShow, IShowList } from "@/typings/Show.type";
import { useDisclosure } from "@chakra-ui/react";
import { createContext, ReactNode, useState } from "react";
import useSWR from "swr";

interface IStepperContext {
    currentStep: number;
    setCurrentStep: (newStep: number) => void;
    showsList: IShow[];
    selectedShows: IShow[];
    setSelectedShows: (newShowsList: IShow[]) => void;
    predefinedSteps: number;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const StepperContext = createContext<IStepperContext>({} as IStepperContext)

interface IStepperContextProvider {
    children: ReactNode;
}

export const StepperContextProvider = ({children}: IStepperContextProvider) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedShows, setSelectedShows] = useState<IShow[]>([]);
    const { data } = useSWR<IShowList>(swrKeys.allshows, fetcher);
    const showsList = data?.shows
    const predefinedSteps = 5;
    const { isOpen, onOpen, onClose } = useDisclosure();

    if(!showsList) {
        return null;
    }

    return (
        <StepperContext.Provider value={{
            currentStep,
            setCurrentStep,
            showsList,
            selectedShows,
            setSelectedShows,
            predefinedSteps,
            isOpen,
            onOpen,
            onClose
        }}>
            {children}
        </StepperContext.Provider>
    );
}
