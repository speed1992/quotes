const CACHE_TIME_IN_DAYS = 1

export const isCacheExpired = (startDate) => {
    startDate = new Date(startDate)
    const endDate = new Date()
    const dateDifferenceInMilliSeconds = endDate.getTime() - startDate.getTime()
    const dateDifferenceInDays = Math.floor(dateDifferenceInMilliSeconds / (1000 * 60 * 60 * 24))
    return dateDifferenceInDays >= CACHE_TIME_IN_DAYS
}
