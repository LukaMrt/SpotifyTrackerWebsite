export const parseInt = (value: any, defaultValue: number): number => {
    if (value === undefined) {
        return defaultValue;
    }
    const parsedValue = Number(value);
    if (isNaN(parsedValue)) {
        return defaultValue;
    }
    return parsedValue;
}