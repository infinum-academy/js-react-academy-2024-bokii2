import { Card, CardBody, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface IShow {
    show: {
        title: string;
        description: string;
        averageRating: number;
        imageUrl: string;
    };
}

export const ShowDetails = (props: IShow) => {
    return (
        <Card width='920px' direction='column' borderRadius='10px' backgroundColor='white' color='#5935bc'>
            <Image alt="got" src={props.show.imageUrl} borderTopRadius='inherit' />
            <CardBody padding='30px' marginTop='20px' gap='8px'>
                <Heading as='h2' size='2xl'>{props.show.title}</Heading>
                <Text fontSize='sm' margin='15px 0'>{props.show.description}</Text>
                <Heading as='h5' size='sm'>{props.show.averageRating != 0 ? props.show.averageRating : "No rating yet"}</Heading>
            </CardBody>
        </Card>
    );
};