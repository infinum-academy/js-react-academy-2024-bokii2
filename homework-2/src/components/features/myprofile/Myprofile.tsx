'use client'

import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { radius } from "@/styles/theme/foundations/radius";
import { IUser } from "@/typings/User.type";
import { Flex, Text, Image, Box } from "@chakra-ui/react";
import { useContext } from "react";
import useSWR from "swr";
import { StepperContext } from "../stepper/components/StepperContextProvider";
import { Spin } from "@/components/shared/Spinner/Spinner";

interface IMyprofile {
    user: IUser
}
    
export const Myprofile = () => {
    const {data} = useSWR(swrKeys.me, fetcher) as {data: IMyprofile};
    const { selectedShows } = useContext(StepperContext);

    if (!data) return <Spin message="Loading the data..." />;

    return (
        <Flex direction='column' justifyContent='center' width='fit-content' gap={8} margin={5}>
            {data && 
                <>
                    <Text>Email</Text>
                    <Text>{data?.user.email}</Text>
                    <Image alt="avatar" src={data?.user.image_url ? data?.user.image_url : 'https://i.pravatar.cc/260'} borderRadius={radius.full} />

                    <Text>Selected shows:</Text>
                    <Flex direction="column">
                        {selectedShows.map((show, index) => {
                            return (
                                <Flex key={index} justifyContent="space-between">
                                    <Text>{show.title}</Text>
                                </Flex>
                            );
                        })}
                    </Flex>
                </>
            }
        </Flex>
    )
}