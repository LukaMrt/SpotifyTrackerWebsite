import {CountListening} from "../listening/listening.entity";

export interface DatedObject {
    date: Date;
}

const genericGroupBy = (objects: DatedObject[], buildKey: (date: Date) => string): CountListening[] => {
    const groups = new Map<string, number>();
    objects.forEach(object => {
        const key = buildKey(object.date);
        const value = groups.get(key) || 0;
        groups.set(key, value + 1);
    });
    return Array.from(groups.entries()).map(([date, count]) => ({date: date, count: Math.round(count / 2)}));
};

export const groupByDay = (objects: DatedObject[]): CountListening[] => {
    const buildKey = date => date.toISOString().split("T")[0];
    return genericGroupBy(objects, buildKey);
};

export const groupByWeek = (objects: DatedObject[]): CountListening[] => {
    const buildKey = date => getFirstDayOfWeek(date);
    return genericGroupBy(objects, buildKey);
};

export const groupByMonth = (objects: DatedObject[]): CountListening[] => {
    const buildKey = date => date.toISOString().split("-").slice(0, 2).join("-");
    return genericGroupBy(objects, buildKey);
};

export const groupByYear = (objects: DatedObject[]): CountListening[] => {
    const buildKey = date => date.getFullYear().toString();
    return genericGroupBy(objects, buildKey);
};

const getFirstDayOfWeek = (date: Date): string => {
    const startOfWeek = date.setUTCDate(date.getUTCDate() - date.getUTCDay() + 1);
    return new Date(startOfWeek).toISOString().split("T")[0];
};
