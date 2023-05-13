export function parseStringEnum(group: string, values: string[], defaultValue: string): string {
    if (group === undefined) {
        return defaultValue;
    }
    if (values.includes(group)) {
        return group;
    }
    return defaultValue;
}

export function parseDate(value: string, defaultValue: Date): Date {
    if (value === undefined) {
        return defaultValue;
    }
    const parsedValue = Date.parse(value);
    if (isNaN(parsedValue)) {
        return defaultValue;
    }
    return new Date(parsedValue);
}

export const parseInt = (value: string, defaultValue: number): number => {
    if (value === undefined) {
        return defaultValue;
    }
    const parsedValue = Number(value);
    if (isNaN(parsedValue)) {
        return defaultValue;
    }
    return parsedValue;
};