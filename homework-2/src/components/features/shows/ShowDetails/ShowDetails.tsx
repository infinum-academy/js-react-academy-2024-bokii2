import { sizes } from "@/styles/theme/foundations/font";
import { IShow } from "@/typings/Show.type";
import { Card, CardBody, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface IShowProps {
    show: IShow;
}

export const ShowDetails = ({show}: IShowProps) => {
    return (
        <Card variant="showDetails" direction='column' width={{base: '343px', xl: '1053px'}} height='fit-content'>
            <Image alt="showImg" src={show.image_url} height='439px' borderTopRadius='inherit' />
            <CardBody paddingLeft='30px' gap='8px' height='fit-content'>
                <Flex direction={{base: 'column', xl: 'row'}} alignItems={{xl: 'center'}}>
                    <Flex direction="column" gap={2}>
                        <Heading fontSize={{base: sizes.headline.mobile, xl: sizes.headline.web}}>{show.title}</Heading>
                        <Heading fontSize={{base: sizes.body.mobile, xl: sizes.body.web}}>{show.average_rating ? show.average_rating.toFixed(2) + " / 5" : "No rating yet"}</Heading>
                    </Flex>
                    
                    <Text fontSize={{base: sizes.body.mobile, xl: sizes.body.web}} margin='15px 0' marginLeft={{xl: 20}}>{show.description}</Text>
                </Flex>
            </CardBody>
        </Card>
    );
};