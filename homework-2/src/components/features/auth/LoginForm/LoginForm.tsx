'use client'

import { PasswordInput } from "@/components/shared/PasswordInput/PasswordInput";
import { mutator } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import { ILoginForm } from "@/typings/Login.type";
import { Alert, Button, chakra, FormControl, FormHelperText, Heading, Input, Spinner, Text } from "@chakra-ui/react"
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";

export const LoginForm = () => {
    const { register, handleSubmit, formState: {isSubmitting} } = useForm<ILoginForm>();
    const { trigger } = useSWRMutation(swrKeys.login, mutator<ILoginForm>,
        {
            onSuccess: () => {
                setLogged(true);
            }
        }
    );
    const [ logged, setLogged ] = useState(false);
    const [ error, setError ] = useState("");

    const onLogin = async (data: ILoginForm) => {
        const response = await trigger(data);

        localStorage.setItem('authorization-header', JSON.stringify({
            'client': response.authHeaders.client,
            'access-token': response.authHeaders.token,
            'uid': response.authHeaders.uid
        }));
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
                <chakra.form display='flex' flexDirection='column' backgroundColor='#381484' padding={10} borderRadius={15} gap={5} alignItems='center' width='920px' onSubmit={handleSubmit(onLogin)}>
                    <Heading>TV SHOWS APP</Heading>
                    <FormControl>
                        <Input required type="email" placeholder="Email" {...register('email')} disabled={isSubmitting} />
                    </FormControl>
                    <FormControl>
                        <PasswordInput isSub={isSubmitting}  props={{...register('password')}} />
                        <FormHelperText>
                            At least 8 characters
                        </FormHelperText>
                    </FormControl>
                    <Button type="submit" disabled={isSubmitting}>Log in</Button>
                    {
                        error && (
                            <Alert status="error">Invalid email or password</Alert>
                        )
                    }
                    <Text>Don&apos;t have an account? <Link href='/login'>Register</Link></Text>
                </chakra.form>
            )}
        </>
    );
}