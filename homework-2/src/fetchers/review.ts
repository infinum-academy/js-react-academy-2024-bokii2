import { IReview } from "@/typings/Review.type";
import { fetcher } from "./fetcher";

export function createReview(url: string, { arg }: { arg: IReview }) {
	return fetcher(url, {
		method: 'POST',
		body: JSON.stringify(arg),
	});
}

export function deleteReview(url: string, { arg }: { arg: IReview }) {
	return fetcher(url, {
		method: 'DELETE'
	});
}

export function updateReview(url: string, { arg }: { arg: IReview }) {
	const review = {
		comment: arg.comment,
		rating: arg.rating
	}

	return fetcher(url, {
		method: 'PATCH',
		body: JSON.stringify(review),
	});
}