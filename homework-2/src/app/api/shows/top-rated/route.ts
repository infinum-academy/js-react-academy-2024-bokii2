import { IShow } from "@/typings/Show.type";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const showsJson = require('@/shows.json');

export async function GET() {
	const tmpJson = { ...showsJson };
	const topRated = tmpJson.shows.filter((show:IShow) => show.average_rating >= 4);

	tmpJson.shows = topRated;

	return Response.json(tmpJson);
}
