import { IShowList } from "@/typings/Show.type";
import { fetcher } from "./fetcher";

export function getShowsList() {
    return fetcher<IShowList>(`/api/shows`);
}