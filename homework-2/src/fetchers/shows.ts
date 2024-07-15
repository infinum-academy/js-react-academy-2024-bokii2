import { IShow, IShowList } from "@/typings/Show.type";
import { fetcher } from "./fetcher";

export function getShowsList() {
    return fetcher<IShowList>('/api/shows');
}

export function getShowDetails(id: string) {
    return fetcher<IShow>(`/api/shows/${id}`);
}

export function getTopRated() {
    return fetcher<IShowList>('/api/shows/top-rated')
}