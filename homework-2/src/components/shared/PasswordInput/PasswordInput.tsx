import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"

interface IPassowrdInputProps {
    isSub: boolean;
    props: any;
}

export const PasswordInput = ({isSub, props}: IPassowrdInputProps) => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <InputGroup size='md'>
            <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Password'
                disabled={isSub}
                {...props}
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick} disabled={isSub} >
                {show ? 'Hide' : 'Show'}
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}