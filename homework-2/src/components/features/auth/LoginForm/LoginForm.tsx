'use client'

import { PasswordInput } from "@/components/shared/PasswordInput/PasswordInput";
import { mutator } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import { radius } from "@/styles/theme/foundations/radius";
import { ILoginForm } from "@/typings/Login.type";
import { EmailIcon } from "@chakra-ui/icons";
import { Alert, Button, chakra, FormControl, FormHelperText, Heading, Input, InputGroup, InputLeftElement, Spinner, Text } from "@chakra-ui/react"
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";

export const LoginForm = () => {
    const { register, handleSubmit, formState: {isSubmitting, errors}, setError } = useForm<ILoginForm>();
    const { trigger } = useSWRMutation(swrKeys.login, mutator<ILoginForm>, {
        onSuccess: (data) => {
            localStorage.setItem('authorization-header', JSON.stringify({
                'client': data.authHeaders.client,
                'access-token': data.authHeaders.token,
                'uid': data.authHeaders.uid
            }));
            setLogged(true);
        },
        onError: () => {
            setError("invalidError", { type: 'manual', message: 'Invalid email or password' });
        }
    });
    const [ logged, setLogged ] = useState(false);

    const onLogin = async (data: ILoginForm) => {
        await trigger(data);
    }

    return (
        <>
            {logged && (
                <Alert status="success" textColor='black'>
                    <Spinner />
                    Login succeed! Please wait to be proceed to the TV shows!
                </Alert>
            )}
            {!logged && (
                <chakra.form display='flex' flexDirection='column' backgroundColor='#381484' padding={10} borderRadius={15} gap={5} width='500px' height='500px' alignItems='center' onSubmit={handleSubmit(onLogin)}>
                    <Heading>TV SHOWS APP</Heading>
                    <FormControl>
                        <InputGroup>
                            <InputLeftElement>
                                <EmailIcon />
                            </InputLeftElement>
                            <Input required type="email" placeholder="Email" {...register('email', { required: 'Email is required' })} disabled={isSubmitting} borderRadius={radius.full} />
                            {errors.email && <Alert status="error">{errors.email.message}</Alert>}
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <PasswordInput isSub={isSubmitting}  props={{...register('password', { required: 'Password is required'})}} />
                        <FormHelperText>
                            At least 8 characters
                        </FormHelperText>
                    </FormControl>
                    {errors.password && <Alert status="error">{errors.password.message}</Alert>}
                    <Button type="submit" disabled={isSubmitting}>Log in</Button>
                    {errors.invalidError && <Alert status="error">{errors.invalidError.message}</Alert>}
                    <Text>Don&apos;t have an account? <Link href='/register'>Register</Link></Text>
                </chakra.form>
            )}
        </>
    );
}