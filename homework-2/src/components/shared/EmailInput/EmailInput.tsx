import { colors } from "@/styles/theme/foundations/colors";
import { radius } from "@/styles/theme/foundations/radius";
import { EmailIcon, LockIcon, ViewIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"

interface IEmailInputProps {
    isSub: boolean;
    props: any;
    errors: any;
}

export const EmailInput = ({isSub, props, errors}: IEmailInputProps) => {
    return (
        <InputGroup size='md'>
            <InputLeftElement>
                <EmailIcon />
            </InputLeftElement>
            <Input
                pr='4.5rem'
                type='email'
                placeholder='Email'
                disabled={isSub}
                {...props}
                borderRadius={radius.full}
                isInvalid={!!errors} errorBorderColor={errors ? colors.pink : 'gray.300'}
            />
        </InputGroup>
    )
}