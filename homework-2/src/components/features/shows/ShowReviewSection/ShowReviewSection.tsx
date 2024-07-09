'use client'

import { Flex, Heading } from "@chakra-ui/react"
import { ReviewForm } from "../ReviewForm/ReviewForm"
import { ReviewList } from "../../review/ReviewList/ReviewList"
import { IReview, IReviewList } from "@/typings/Review.type"
import { useEffect, useState } from "react"

interface IShowReviewSectionProps {
    setAvgRating: (avg: number) => void;
}

export const ShowReviewSection = ({setAvgRating}: IShowReviewSectionProps) => {
    const [reviewsList, setReviewsList] = useState([]);

    useEffect(() => {
        const loadedFromLS = loadFromLocalStorage();

        setReviewsList(loadedFromLS);
        setAvgRating(calcAvgRating(loadedFromLS));
    }, []);

    const saveToLocalStorage = (reviewsList: IReviewList) => {
        if(reviewsList.length > 0){
            localStorage.setItem('review-list', JSON.stringify(reviewsList));
        } else {
            localStorage.removeItem('review-list');
        }
    };

    const loadFromLocalStorage = () => {
        const reviewListString = localStorage.getItem('review-list');
        return reviewListString ? JSON.parse(reviewListString) : [];
    }

    const onAddReview = (review: IReview) => {
        const newList = [...reviewsList, review];

        setReviewsList(newList);
        saveToLocalStorage(newList);
        setAvgRating(calcAvgRating(newList));
    }

    const onDeleteReview = (reviewToRemove: IReview) => {
        const newList = reviewsList.filter((review) => review !== reviewToRemove);
        setReviewsList(newList);
        saveToLocalStorage(newList);
        setAvgRating(calcAvgRating(newList));
    }

    let calcAvgRating = (reviews: IReview[]) => {
        let sum = 0;

        reviews.forEach((review) => {
            sum += review.rating;
        });

        return Number((sum / reviews.length).toFixed(2));
    }

    return (
        <Flex backgroundColor='inherit' max-width='920px' direction='column' align='left' margin='10px 0' gap={10}>
            <Heading as='h3' size='lg' color='white' alignItems='left'>
                Reviews
            </Heading>
            <ReviewForm addShowReview={onAddReview} />
            <ReviewList reviewList={reviewsList} deleteReview={onDeleteReview} />
        </Flex>

    )
}