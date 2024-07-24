import { IShow } from "@/typings/Show.type";
import { Card, CardBody, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface IShowProps {
    show: IShow;
}

export const ShowDetails = ({show}: IShowProps) => {
    console.log('Avg', show.average_rating)
    console.log('No', show.no_of_reviews)

    return (
        <Card variant="showDetails" direction='column' width={{base: '1053px', mob: '343px'}}>
            <Image alt="showImg" src={show.image_url} height='439px' borderTopRadius='inherit' />
            <CardBody paddingLeft='30px' gap='8px'>
                <Flex direction="column">
                    <Heading as='h2' size='2xl'>{show.title}</Heading>
                    <Heading as='h5' size='sm'>{ show.average_rating ? show.average_rating.toFixed(2) + " / 5" : "No rating yet"}</Heading>
                </Flex>
                
                <Text fontSize='sm' margin='15px 0'>{show.description}</Text>
            </CardBody>
        </Card>
    );
};