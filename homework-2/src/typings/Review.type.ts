import { IUser } from "./User.type";

export interface IReview {
    id?: string;
    rating: number;
    comment: string;
    show_id: number;
    user?: IUser;
}

export interface IReviewList {
    reviews: IReview[];
}