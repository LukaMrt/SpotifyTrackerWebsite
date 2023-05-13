import {CountListening} from "../domain/model";

export {};

const api = "http://localhost:3003";

export const fetchListenings = async (group = "day"): Promise<CountListening[]> => {
    const response = await fetch(api + "/listening/count?group=" + group);
    return (await response.json()).listening;
};