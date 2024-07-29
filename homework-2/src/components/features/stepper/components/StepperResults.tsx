import { Flex, Text } from "@chakra-ui/react"
import { useContext } from "react";
import { StepperContext } from "./StepperContextProvider";

export const StepperResults = () => {
    const { selectedShows } = useContext(StepperContext);
    
    return (
        <Flex direction="column">
			{selectedShows.map((show, index) => {
				return (
					<Flex key={index} justifyContent="space-between">
						<Text>{show.title}</Text>
					</Flex>
				);
			})}
		</Flex>
    );
}