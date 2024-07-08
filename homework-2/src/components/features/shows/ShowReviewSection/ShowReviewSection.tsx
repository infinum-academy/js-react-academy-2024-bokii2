'use client'

import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react"
import { ReviewForm } from "../ReviewForm/ReviewForm"
import { ReviewList } from "../../review/ReviewList/ReviewList"
import { IReview, IReviewList } from "@/typings/Review.type"
import { useEffect, useState } from "react"

const reviewList: IReviewList = {
    reviews: []
}

export const ShowReviewSection = () => {
    const [reviewsList, setReviewsList] = useState(reviewList);

    useEffect(() => {
        const loadedFromLS = loadFromLocalStorage();
        setReviewsList(loadedFromLS);
    }, []);

    const saveToLocalStorage = (reviewsList: IReviewList) => {
        localStorage.setItem('review-list', JSON.stringify(reviewsList));
    };

    const loadFromLocalStorage = () => {
        const reviewListString = localStorage.getItem('review-list');
        if(!reviewListString) {
            return reviewListString;
        }
        return JSON.parse(reviewListString);
    }

    const onAddReview = (review: IReview) => {
        const newList = {
            reviews: [...reviewsList.reviews, review]
        }
        setReviewsList(newList);
        saveToLocalStorage(newList);
    }

    const onDeleteReview = (reviewToRemove: IReview) => {
        const newList = {
            reviews: reviewsList.reviews.filter((review) => review !== reviewToRemove)
        };
        setReviewsList(newList);
        saveToLocalStorage(newList);
    }

    const calcAvgRating = (reviews: IReview[]) => {
        let sum = 0;

        reviews.forEach((review) => {
            sum += review.rating;
        });

        return (sum / reviews.length).toFixed(2);
    }

    calcAvgRating(reviewsList.reviews);

    return (
        <Card backgroundColor='inherit'>
            <CardHeader>
                <Heading as='h3' size='lg' color='white'>
                    Reviews
                </Heading>
            </CardHeader>
            <CardBody>
                <ReviewForm addShowReview={onAddReview} />
                <ReviewList reviewList={reviewsList} deleteReview={onDeleteReview} />
            </CardBody>
        </Card>
    )
}