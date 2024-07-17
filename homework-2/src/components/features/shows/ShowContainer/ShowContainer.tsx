'use client'

import { useEffect, useState } from "react"
import { ShowDetails } from "../ShowDetails/ShowDetails"
import { ShowReviewSection } from "../ShowReviewSection/ShowReviewSection"
import { Flex } from "@chakra-ui/react"
import useSWR from "swr"
import { useParams } from "next/navigation"
import { swrKeys } from "@/fetchers/swrKeys"
import { fetcher } from "@/fetchers/fetcher"
import { IShow } from "@/typings/Show.type"
import { IReview } from "@/typings/Review.type"

export const ShowContainer = () => {
    const [averageRating, setAverageRating] = useState(0);
    const [reviewsList, setReviewsList] = useState<IReview[]>([]);

    const params = useParams();

    const id = params.id as string;

    

    const { data, error, isLoading } = useSWR<IShow>(swrKeys.showdetails(id), fetcher);
    
    useEffect(() => {
        console.log("useEffect triggered");
        const loadedFromLS = loadFromLocalStorage(id);

        setAverageRating(calcAvgRating(loadedFromLS));
        setReviewsList(loadedFromLS);
        setAverageRating(calcAvgRating(loadedFromLS));
    }, []);

    useEffect(() => {
        console.log(id)
        console.log("useSWR data:", data);  
    }, [data, params]);
        
    const saveToLocalStorage = (reviewsList: IReview[], id: string) => {
        if(reviewsList.length > 0){
            localStorage.setItem(`review-list-${id}`, JSON.stringify(reviewsList));
        } else {
            localStorage.removeItem(`review-list-${id}`);
        }
    };
    
    const loadFromLocalStorage = (id: string) => {
        const reviewListString = localStorage.getItem(`review-list-${id}`);
        return reviewListString ? JSON.parse(reviewListString) : [];
    }
    
    const onAddReview = (review: IReview) => {
        const newList = [...reviewsList, review];
        
        setReviewsList(newList);
        saveToLocalStorage(newList, id);
        setAverageRating(calcAvgRating(newList));
    }
    
    const onDeleteReview = (reviewToRemove: IReview) => {
        const newList = reviewsList.filter((review) => review !== reviewToRemove);
        
        setReviewsList(newList);
        saveToLocalStorage(newList, id);
        setAverageRating(calcAvgRating(newList));
    }
    
    let calcAvgRating = (reviews: IReview[]) => {
        let sum = 0;
        
        reviews.forEach((review) => {
            sum += review.rating;
        });
        
        return Number((sum / reviews.length).toFixed(2));
    }
    
    if (isLoading) return <div>loading...</div>
    
    if (error) return <div>failed to load</div>

    if(!isLoading){
        if(!data)
            return null;    
    }

    return (
        <Flex flexDirection='column' alignItems='left' width='920px'>
            {data && <ShowDetails show={data} avgRating={averageRating} />}
            <ShowReviewSection onDeleteReview={onDeleteReview} onAddReview={onAddReview} reviewsList={reviewsList} />
        </Flex>
    )
}