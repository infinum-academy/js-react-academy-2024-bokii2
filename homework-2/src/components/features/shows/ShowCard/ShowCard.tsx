import { IShow } from "@/typings/Show.type";
import { Card, CardBody, CardHeader, Heading, Image } from "@chakra-ui/react";
import NextLink from 'next/link';

interface IShowCardProps {
    show: IShow;
}

// {imageUrl, title, rating}: IShowCardProps

export const ShowCard = ({show}: IShowCardProps) => {
    return (
        <Card>
            <CardHeader>
                <Image alt='title' src={show.imageUrl} />
            </CardHeader>
            <CardBody>
                <Heading as={NextLink} href={`/all-shows/${show.id}`} size='md'>{show.title}</Heading>
                <Heading as='h5' size='sm'>{show.averageRating}</Heading>
            </CardBody>
        </Card>
    );
}