import { StarIcon } from "@chakra-ui/icons"
import { Flex } from "@chakra-ui/react"
import { useState } from "react"

interface IStarsRatingProps {
    rating: number;
    setRating: (rating: number) => void;
    read?: boolean;
}

export const StarsRating = ({rating, setRating, read = false}: IStarsRatingProps) => {

    return (
        <Flex>
            {[...Array(5)].map((_, i) => (
                <StarIcon key={i} boxSize='1.5em' onClick={() => !read && setRating(i+1)} color={i < rating ? 'yellow.400' : 'gray.300'} cursor={read ? 'default' : 'pointer'} mr={1} />
            ))}
        </Flex>
    )
}