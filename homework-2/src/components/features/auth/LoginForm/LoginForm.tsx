'use client'

import { mutator } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import { IRegisterForm } from "@/typings/Register.type";
import { Alert, Button, chakra, FormControl, FormHelperText, Heading, Input, Text } from "@chakra-ui/react"
import { useState } from "react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";

export const LoginForm = () => {
    const { register, handleSubmit } = useForm<IRegisterForm>();
    const { trigger } = useSWRMutation(swrKeys.register, mutator<IRegisterForm>,
        {
            onSuccess: () => {
                setLogged(true);
            }
        }
    );
    const [ logged, setLogged ] = useState(false);
    const [ error, setError ] = useState("");

    const onRegister = async (data: IRegisterForm) => {
        if(data.password.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }

        if(data.password !== data.password_conformation) {
            setError("Passwords do not match");
            return;
        }

        setError("");
        await trigger(data);
    }

    return (
        <>
            {logged && (
                <Alert status="success">
                    Registration succeed! Please proceed to login!
                </Alert>
            )}
            {!logged && (
                <chakra.form display='flex' flexDirection='column' backgroundColor='#381484' padding={10} borderRadius={15} gap={5} alignItems='center' width='920px' onSubmit={handleSubmit(onRegister)}>
                    <Heading>TV SHOWS APP</Heading>
                    <FormControl>
                        <Input required type="email" placeholder="Email" {...register('email')}/>
                    </FormControl>
                    <FormControl>
                        <Input required type="password" placeholder="Password" {...register('password')}/>
                        <FormHelperText>
                            At least 8 characters
                        </FormHelperText>
                    </FormControl>
                    <Button type="submit">Sign up</Button>
                    {
                        error && (
                            <Alert status="error">{error}</Alert>
                        )
                    }
                    <Text>Don't have an accoutn? Register</Text>
                </chakra.form>
            )}
        </>
    );
}