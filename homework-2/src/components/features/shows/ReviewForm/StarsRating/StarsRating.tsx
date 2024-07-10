import { StarIcon } from "@chakra-ui/icons"
import { Flex } from "@chakra-ui/react"

const length = 5; 

const onClickHandler = (num: number) => {

}

export const StarsRating = () => {
    return (
        <Flex>
            {[...Array(5)].map((_, i) => (
                <StarIcon key={i} boxSize='2rem' onClick={() => onClickHandler(i)} />
            ))}
        </Flex>
    )
}