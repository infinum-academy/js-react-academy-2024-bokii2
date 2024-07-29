'use client'

import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { radius } from "@/styles/theme/foundations/radius";
import { IUser } from "@/typings/User.type";
import { Flex, Text, Image, Box } from "@chakra-ui/react";
import useSWR from "swr";

interface IMyprofile {
    user: IUser
}
    
export const Myprofile = () => {
    const {data} = useSWR(swrKeys.me, fetcher) as {data: IMyprofile};

    if (!data) return <div>Loading...</div>;

    return (
        <Flex direction='column' justifyContent='center' width='fit-content' gap={8} margin={5}>
            {data && 
                <>
                    <Text>Email</Text>
                    <Text>{data?.user.email}</Text>
                    <Image alt="avatar" src={data?.user.image_url ? data?.user.image_url : 'https://i.pravatar.cc/260'} borderRadius={radius.full} />
                </>
            }
        </Flex>
    )
}