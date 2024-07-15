import { IShow } from "@/typings/Show.type";
import { StarIcon } from "@chakra-ui/icons";
import { Card, CardBody, CardHeader, Heading, Image } from "@chakra-ui/react";
import NextLink from 'next/link';

interface IShowCardProps {
    show: IShow;
}

export const ShowCard = ({show}: IShowCardProps) => {
    return (
        <Card size='sm'  width='200px' margin='10px 0' borderRadius={15} height='fit-content'>
            <Image alt='title' src={show.image_url} width='100%' height='auto' borderTopRadius='inherit' />
            <CardBody color='#2e1e8b'>
                <Heading as={NextLink} href={`/all-shows/${show.id}`} size='md'>{show.title}</Heading>
                <Heading as='h5' size='sm'mt={1} >
                    {show.average_rating ? 
                        (<>
                            <StarIcon mr={2} boxSize={4} />{show.average_rating + "/5"} </>
                        ) : "No rating yet"}
                </Heading>
            </CardBody>
        </Card>
    );
}