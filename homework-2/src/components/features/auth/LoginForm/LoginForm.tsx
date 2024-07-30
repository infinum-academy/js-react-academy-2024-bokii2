'use client'

import { EmailInput } from "@/components/shared/EmailInput/EmailInput";
import { Header } from "@/components/shared/Header/Header";
import { PasswordInput } from "@/components/shared/PasswordInput/PasswordInput";
import { Spin } from "@/components/shared/Spinner/Spinner";
import { mutator } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import { colors } from "@/styles/theme/foundations/colors";
import { radius } from "@/styles/theme/foundations/radius";
import { ILoginForm } from "@/typings/Login.type";
import { Alert, Button, chakra, FormControl, FormHelperText, Spinner, Text } from "@chakra-ui/react"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";

export const LoginForm = () => {
    const { register, handleSubmit, formState: {isSubmitting, errors}, setError, reset } = useForm<ILoginForm>();
    const router = useRouter();
    const { trigger, isMutating } = useSWRMutation(swrKeys.login, mutator<ILoginForm>, {
        onSuccess: (data) => {
            localStorage.setItem('authorization-header', JSON.stringify({
                'client': data.authHeaders.client,
                'access-token': data.authHeaders.token,
                'uid': data.authHeaders.uid
            }));
            router.push('/all-shows')
        },
        onError: () => {
            setError("invalidError", { type: 'manual', message: 'Invalid email or password' });
        }
    });

    const onLogin = async (data: ILoginForm) => {
        await trigger(data);
        reset();
    }

    return (
        <>
            {isMutating && (
                <Spin message="Login succeed! Please wait to be proceed to the TV shows!" />
            )}
            {!isMutating && (
                <chakra.form display='flex' flexDirection='column' backgroundColor={colors.purple} padding={10} borderRadius={15} gap={5} width={{base: '100%', sm:'500px'}} height='500px' alignItems='center' justifyContent='center' onSubmit={handleSubmit(onLogin)} >
                    <Header />
                    <FormControl>
                        <EmailInput isSub={isSubmitting} props={{...register('email', { required: 'Email is required' }), autoComplete: 'email'}} errors={errors.email}/>
                        {errors.email && <FormHelperText color={errors.email ? colors.pink : 'gray.300'}>{errors.email.message}</FormHelperText>}
                    </FormControl>
                    <FormControl>
                        <PasswordInput isSub={isSubmitting}  props={{...register('password', { required: 'Password is required'}), autoComplete: 'current-password'}} errors={errors.password} />
                        {errors.password && <FormHelperText color={errors.email ? colors.pink : 'gray.300'}>{errors.password.message}</FormHelperText>}
                    </FormControl>
                    <Button type="submit" disabled={isSubmitting}>Log in</Button>
                    {errors.invalidError && <Alert status="error" backgroundColor={colors.warningred} color='white' borderRadius={radius.full}>{errors.invalidError.message}</Alert>}
                    <Text>Don&apos;t have an account? <Link href='/register'>Register</Link></Text>
                </chakra.form>
            )}
        </>
    );
}