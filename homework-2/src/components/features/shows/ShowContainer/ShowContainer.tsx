'use client'

import { useEffect, useState } from "react"
import { ShowDetails } from "../ShowDetails/ShowDetails"
import { ShowReviewSection } from "../ShowReviewSection/ShowReviewSection"
import { Flex } from "@chakra-ui/react"
import useSWR, { mutate } from "swr"
import { useParams } from "next/navigation"
import { swrKeys } from "@/fetchers/swrKeys"
import { fetcher } from "@/fetchers/fetcher"
import { IShow } from "@/typings/Show.type"
import { mutator } from "@/fetchers/mutators"

interface IShowResp {
    show: IShow;
}

export const ShowContainer = () => {
    const params = useParams();

    const id = params.id as string;

    const { data, error, isLoading } = useSWR<IShowResp>(swrKeys.showdetails(id), fetcher);

    const refetchShowDetails = async () => {
        await mutate(swrKeys.showdetails(id));
    };

    if (isLoading) return <div>loading...</div>
    
    if (error) return <div>failed to load</div>

    return (
        <Flex flexDirection='column' alignItems='flex-start'
            width={{base: '343px', xl: '1053px'}}
            overflow='hidden'
            gap={8}
            margin={['0 16px', '0 31px']}
        >
            {data && <ShowDetails show={data.show}/>}
            <ShowReviewSection id={Number(id)} refetchShowDetails={refetchShowDetails} />
        </Flex>
    )
}