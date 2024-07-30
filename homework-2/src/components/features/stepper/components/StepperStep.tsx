import { Box, Flex, Text, Image, Button } from "@chakra-ui/react"
import { useContext } from "react";
import { StepperContext } from "./StepperContextProvider";

export const StepperStep = () => {
    const {showsList, currentStep, predefinedSteps, setSelectedShows, selectedShows} = useContext(StepperContext);

    const showsPerStep = Array.from({length: Math.ceil(showsList.length / predefinedSteps)}, (_, i) =>
        showsList.slice(i * predefinedSteps, i * predefinedSteps + predefinedSteps)
    );

    return (
        <Flex direction='column' gap={5} width='300px'>
            {showsPerStep[currentStep]?.map((show) => {
                const isSelected = selectedShows.find((s) => s.id === show.id);
                return (
                    <Box key={show.id} padding={1} backgroundColor={isSelected ? 'green' : 'gray'}>
                        <Image alt={show.title} src={show.image_url} onClick={ 
                            isSelected ? () => {
                                setSelectedShows(selectedShows.filter((s) => s.id !== show.id))
                            } : () => {
                                setSelectedShows([...selectedShows, show])
                            }
                        }/>
                    </Box>
                )
            })}
        </Flex>
    );
}