import { Box, Flex, Text, Image } from "@chakra-ui/react"
import { useContext } from "react";
import { StepperContext } from "./StepperContextProvider";

export const StepperStep = () => {
    const {showsList, currentStep, predefinedSteps, setSelectedShows} = useContext(StepperContext);

    const showsPerStep = Array.from({length: Math.ceil(showsList.length / predefinedSteps)}, (_, i) =>
        showsList.slice(i * predefinedSteps, i * predefinedSteps + predefinedSteps)
    );

    return (
        <Flex direction='column' gap={5} width='300px'>
            {showsPerStep[currentStep]?.map((show) => (
                <Box key={show.id}>
                    <Image alt={show.title} src={show.image_url} />
                </Box>
            ))}
        </Flex>
    );
}