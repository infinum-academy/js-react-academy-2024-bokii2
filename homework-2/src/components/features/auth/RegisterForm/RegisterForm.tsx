'use client'

import { mutator } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import { IRegisterForm } from "@/typings/Register.ype";
import { Button, chakra, FormControl, Heading, Input, Text } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";

export const RegisterForm = () => {
    const { register, handleSubmit } = useForm<IRegisterForm>();
    const { trigger } = useSWRMutation(swrKeys.register, mutator);

    const onRegister = async (data: IRegisterForm) => {
        await trigger(data);
    }

    return (
        <chakra.form display='flex' flexDirection='column' backgroundColor='#381484' padding={10} borderRadius={15} gap={5} alignItems='center' width='920px' onSubmit={handleSubmit(onRegister)}>
            <Heading>TV SHOWS APP</Heading>
            <FormControl>
                <Input required type="email" placeholder="Email" {...register('email')}/>
            </FormControl>
            <FormControl>
                <Input required type="password" placeholder="Password" {...register('password')}/>
            </FormControl>
            <FormControl>
                <Input required type="password" placeholder="Confirm password" {...register('password_conformation')} />
            </FormControl>
            <Button type="submit">Sign up</Button>
            <Text>Already have an account? Login</Text>
        </chakra.form>
    )
}