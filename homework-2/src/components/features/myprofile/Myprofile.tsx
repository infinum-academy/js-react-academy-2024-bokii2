'use client'

import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { IUser } from "@/typings/User.type";
import { Flex, Text, Image } from "@chakra-ui/react";
import useSWR from "swr";

interface IMyprofile {
    user: IUser
}
    
export const Myprofile = () => {
    const {data} = useSWR(swrKeys.me, fetcher) as {data: IMyprofile};

    if (!data) return <div>Loading...</div>;

    return (
        <Flex>
            {data && 
                <>
                    <Text>Email: {data?.user.email}</Text>
                    <Image alt="avatar" src={data?.user.image_url} />
                </>
            }
        </Flex>
    )
}