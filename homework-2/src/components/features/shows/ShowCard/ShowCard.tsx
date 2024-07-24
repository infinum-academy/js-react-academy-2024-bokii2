import { sizes } from "@/styles/theme/foundations/font";
import { IShow } from "@/typings/Show.type";
import { StarIcon } from "@chakra-ui/icons";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import NextLink from 'next/link';

interface IShowCardProps {
    show: IShow;
}

export const ShowCard = ({show}: IShowCardProps) => {
    return (
        <Card variant="showCard" as={NextLink} href={`/all-shows/${show.id}`} margin='10px 0'>
            <Image alt={show.title} src={show.image_url} height='300px' borderTopRadius='inherit' />
            <CardBody alignItems='center' padding="13px 18px">
                <Heading size={sizes.body.web}>{show.title}</Heading>
                <Heading size={sizes.smallCaption.web} >
                    {show.average_rating ? 
                        (<>
                            <StarIcon mr={2} boxSize="16px" />{show.average_rating + "/5"} </>
                        ) : "No rating yet"}
                </Heading>
            </CardBody>
        </Card>
    );
}