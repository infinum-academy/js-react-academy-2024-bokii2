import { sizes } from '@/styles/theme/foundations/font'
import { WarningTwoIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/react'

export const Error = () => {
    return (
        <Flex minWidth='100%' direction='column' alignItems='center' justifyItems='center' gap={5}>
            <WarningTwoIcon boxSize={100}  />
            <Text fontSize={sizes.title}>Oops! Something went wrong!</Text>
        </Flex>
    )
}