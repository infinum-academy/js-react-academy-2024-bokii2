import { IShow } from "@/typings/Show.type";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

interface IShowProps {
    show: IShow;
    avgRating: number;
}

export const ShowDetails = ({show, avgRating}: IShowProps) => {
    return (
        <Card width='920px' direction='column' borderRadius='10px' backgroundColor='white' color='#5935bc'>
            <Image alt="got" src={show.imageUrl} borderTopRadius='inherit' />
            <CardBody padding='30px' marginTop='20px' gap='8px'>
                <Heading as='h2' size='2xl'>{show.title}</Heading>
                <Text fontSize='sm' margin='15px 0'>{show.description}</Text>
                <Heading as='h5' size='sm'>{show.averageRating ? avgRating + " / 5" : "No rating yet"}</Heading>
            </CardBody>
        </Card>
    );
};