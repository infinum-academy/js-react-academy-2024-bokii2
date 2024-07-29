'use client'

import { Header } from "@/components/shared/Header/Header";
import { PasswordInput } from "@/components/shared/PasswordInput/PasswordInput";
import { mutator } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import { colors } from "@/styles/theme/foundations/colors";
import { radius } from "@/styles/theme/foundations/radius";
import { IRegisterForm } from "@/typings/Register.type";
import { EmailIcon } from "@chakra-ui/icons";
import { Alert, Button, chakra, FormControl, FormHelperText, Heading, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react"
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";

export const RegisterForm = () => {
    const { register, handleSubmit, formState: {isSubmitting, errors}, setError } = useForm<IRegisterForm>();
    const { trigger } = useSWRMutation(swrKeys.register, mutator<IRegisterForm>,
        {
            onSuccess: () => {
                setRegistered(true);
            }
        }
    );
    const [ registered, setRegistered ] = useState(false);

    const onRegister = async (data: IRegisterForm) => {
        if(data.password.length < 8) {
            setError("password", { type: "manual", message: "Password must be at least 8 characters" });
            return;
        }

        if(data.password !== data.password_conformation) {
            setError("password_conformation", { type: "manual", message: "Passwords do not match" });
            return;
        }

        await trigger(data);
    }

    return (
        <>
            {registered && (
                <Alert status="success" color='black'>
                    Registration succeed! Please proceed to login!
                    <Button as={Link} href='/login'>Login</Button>
                </Alert>
            )}
            {!registered && (
                <chakra.form display='flex' flexDirection='column' backgroundColor='#381484' padding={10} borderRadius={15} gap={5} alignItems='center' width={{base: '100%', sm:'500px'}} height='500px' onSubmit={handleSubmit(onRegister)}>
                    <Header />
                    <FormControl>
                        <InputGroup>
                            <InputLeftElement>
                                <EmailIcon />
                            </InputLeftElement>
                            <Input required type="email" placeholder="Email" {...register('email', { required: 'Email is required' })} disabled={isSubmitting} borderRadius={radius.full} isInvalid={!!errors.email} errorBorderColor={errors.email ? colors.pink : 'gray.300'} />
                            {errors.email && <FormHelperText color={errors.email ? colors.pink : 'gray.300'}>{errors.email.message}</FormHelperText>}
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <PasswordInput isSub={isSubmitting}  props={{...register('password', { required: 'Password is required' })}} errors={errors.password} />
                        {errors.password ? (
                            <FormHelperText color={errors.email ? colors.pink : 'gray.300'}>{errors.password.message}</FormHelperText>
                        ) : (
                            <FormHelperText>At least 8 characters</FormHelperText> 
                        )}                        
                    </FormControl>
                    <FormControl>
                        <PasswordInput isSub={isSubmitting}  props={{...register('password_conformation', { required: 'Password confirmation is required' })}} errors={errors.password_conformation} />
                        {errors.password_conformation ? (
                            <FormHelperText color={errors.email ? colors.pink : 'gray.300'}>{errors.password_conformation.message}</FormHelperText>
                        ) : (
                            <FormHelperText>At least 8 characters</FormHelperText> 
                        )} 
                        {errors.password_conformation && <Alert status="error">{errors.password_conformation.message}</Alert>}
                    </FormControl>
                    <Button type="submit">Sign up</Button>

                    <Text>Already have an account? <Link href='/login'>Login</Link></Text>
                </chakra.form>
            )}
        </>
    );
}