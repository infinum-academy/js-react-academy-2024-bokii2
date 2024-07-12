import { IShow } from "@/typings/Show.type";
import { Card, CardBody, CardHeader, Heading, Image } from "@chakra-ui/react";
import NextLink from 'next/link';

interface IShowCardProps {
    show: IShow;
}

export const ShowCard = ({show}: IShowCardProps) => {
    return (
        <Card size='sm'  width='200px' >
            {/* <CardHeader> */}
                <Image alt='title' src={show.image_url} width='100%' height='auto' />
            {/* </CardHeader> */}
            <CardBody>
                <Heading as={NextLink} href={`/all-shows/${show.id}`} size='md'>{show.title}</Heading>
                <Heading as='h5' size='sm'>{show.average_rating}</Heading>
            </CardBody>
        </Card>
    );
}