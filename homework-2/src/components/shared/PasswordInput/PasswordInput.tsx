import { colors } from "@/styles/theme/foundations/colors";
import { radius } from "@/styles/theme/foundations/radius";
import { LockIcon, ViewIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
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
            <InputLeftElement>
                <LockIcon />
            </InputLeftElement>
            <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Password'
                disabled={isSub}
                {...props}
                borderRadius={radius.full}
            />
            <InputRightElement width='4.5rem'>
                <ViewIcon onClick={handleClick} cursor='pointer' />
            </InputRightElement>
        </InputGroup>
    )
}