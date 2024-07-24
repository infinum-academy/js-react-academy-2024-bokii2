export interface IShow {
    id: string;
    title: string;
    description: string;
    average_rating: number;
    image_url: string;
    no_of_reviews: number;
}

export interface IShowList {
    shows: Array<IShow>;
}