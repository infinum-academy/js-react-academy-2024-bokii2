import { Heading, Image } from "@chakra-ui/react";

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
        <div>
            <Image alt="got" src={props.show.imageUrl} />
            <Heading as="h2">{props.show.title}</Heading>
            <p>{props.show.description}</p>
            <Heading as="h3">{props.show.averageRating != 0 ? props.show.averageRating : "No rating yet"}</Heading>
        </div>
    );
};