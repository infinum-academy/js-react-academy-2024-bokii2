import { IReview } from "@/typings/Review.type";
import { fetcher } from "./fetcher";

export function createReview(url: string, { arg }: { arg: IReview }) {
	return fetcher(url, {
		method: 'POST',
		body: JSON.stringify(arg),
	});
}