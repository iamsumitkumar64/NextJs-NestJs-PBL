//filtered objects for undefined values field
export const filterObj = (obj: Record<string, any>) => {
    const inVaildValues = [undefined, null];

    return Object.fromEntries(
        Object.entries(obj).filter(
            ([key, value]) => {
                return !inVaildValues.includes(value);
            }
        )
    )
}