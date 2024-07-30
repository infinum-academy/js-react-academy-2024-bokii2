import { Flex, Spinner, Text } from '@chakra-ui/react'

interface ISpinProps {
    message: string;
}

export const Spin = ({message}: ISpinProps) => {
    return (
        <Flex minWidth='100%' direction='column' alignItems='center' justifyItems='center' gap={5}>
            <Spinner size='xl' color='white' />
            <Text color='white'>
                {message}
            </Text>
        </Flex>
    );
}