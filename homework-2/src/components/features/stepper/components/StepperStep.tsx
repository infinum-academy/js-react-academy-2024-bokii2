import { Box, Card, CardBody, Flex, Image } from "@chakra-ui/react"
import { useContext } from "react";
import { StepperContext } from "./StepperContextProvider";

export const StepperStep = () => {
    const {showsList, currentStep, predefinedSteps, setSelectedShows, selectedShows} = useContext(StepperContext);

    const showsPerStep = Array.from({length: Math.ceil(showsList.length / predefinedSteps)}, (_, i) =>
        showsList.slice(i * predefinedSteps, i * predefinedSteps + predefinedSteps)
    );

    return (
        <Flex wrap='wrap' gap={5} justifyContent='center'>
            {showsPerStep[currentStep]?.map((show) => {
                const isSelected = selectedShows.find((s) => s.id === show.id);
                return (
                    <Card key={show.id} backgroundColor={isSelected ? 'green' : 'gray'} width='150px' color='white' onClick={ 
                        isSelected ? () => {
                            setSelectedShows(selectedShows.filter((s) => s.id !== show.id))
                        } : () => {
                            setSelectedShows([...selectedShows, show])
                        }
                    }>
                        <Image alt={show.title} borderTopRadius='inherit' src={show.image_url} />
                        <CardBody>
                            {show.title}
                        </CardBody>
                    </Card>
                )
            })}
        </Flex>
    );
}