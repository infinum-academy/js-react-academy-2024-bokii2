import { IShow } from "@/typings/Show.type";
import { Card, CardBody, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface IShowProps {
    show: IShow;
    avgRating: number;
}

export const ShowDetails = ({show, avgRating}: IShowProps) => {
    return (
        <Card variant="showDetails" direction='column' margin='10px 0'>
            <Image alt="showImg" src={show.image_url} height='439px' borderTopRadius='inherit' />
            <CardBody paddingLeft='30px' gap='8px'>
                <Flex direction="column">
                    <Heading as='h2' size='2xl'>{show.title}</Heading>
                    <Heading as='h5' size='sm'>{ show.average_rating ? show.average_rating + " / 5" : "No rating yet"}</Heading>
                </Flex>
                
                <Text fontSize='sm' margin='15px 0'>{show.description}</Text>
            </CardBody>
        </Card>
    );
};