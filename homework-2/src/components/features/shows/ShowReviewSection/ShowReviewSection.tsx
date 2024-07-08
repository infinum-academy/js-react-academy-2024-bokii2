'use client'

import { Card, CardBody, CardHeader, Flex, Heading } from "@chakra-ui/react"
import { ReviewForm } from "../ReviewForm/ReviewForm"
import { ReviewList } from "../../review/ReviewList/ReviewList"
import { IReview, IReviewList } from "@/typings/Review.type"
import { useEffect, useState } from "react"

interface IShowReviewSectionProps {
    setAvgRating: (avg: number) => void;
}

const reviewList: IReviewList = {
    reviews: []
}

export const ShowReviewSection = ({setAvgRating}: IShowReviewSectionProps) => {
    const [reviewsList, setReviewsList] = useState(reviewList);

    useEffect(() => {
        const loadedFromLS = loadFromLocalStorage();
        setReviewsList(loadedFromLS);
    }, []);

    useEffect(() => {
        setAvgRating(calcAvgRating(reviewsList.reviews));
    }, [reviewsList, setAvgRating]);

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

    let calcAvgRating = (reviews: IReview[]) => {
        let sum = 0;

        reviews.forEach((review) => {
            sum += review.rating;
        });

        return Number((sum / reviews.length).toFixed(2));
    }

    return (
        <Flex backgroundColor='inherit' max-width='920px' direction='column' align='left' margin='10px 0' gap={10}>
            {/* <CardHeader> */}
                <Heading as='h3' size='lg' color='white' alignItems='left'>
                    Reviews
                </Heading>
            {/* </CardHeader> */}
            {/* <CardBody> */}
                <ReviewForm addShowReview={onAddReview} />
                <ReviewList reviewList={reviewsList} deleteReview={onDeleteReview} />
            {/* </CardBody> */}
        </Flex>
        // <Card backgroundColor='inherit'>
        //     <CardHeader>
        //         <Heading as='h3' size='lg' color='white'>
        //             Reviews
        //         </Heading>
        //     </CardHeader>
        //     <CardBody>
        //         <ReviewForm addShowReview={onAddReview} />
        //         <ReviewList reviewList={reviewsList} deleteReview={onDeleteReview} />
        //     </CardBody>
        // </Card>
    )
}