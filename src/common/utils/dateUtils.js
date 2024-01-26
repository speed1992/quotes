import { checkQueryParams } from './urlUtils'

const CACHE_TIME_IN_DAYS = 1

export const isCacheExpired = (startDate, setLogs = null) => {
    startDate = new Date(startDate)
    const endDate = new Date()
    const dateDifferenceInMilliSeconds = endDate.getTime() - startDate.getTime()
    const dateDifferenceInDays = Math.floor(dateDifferenceInMilliSeconds / (1000 * 60 * 60 * 24))
    if (setLogs && checkQueryParams('dev')) {
        setLogs('inside isCacheExpired ' + endDate)
        setLogs('startDate ' + startDate)
        setLogs('endDate ' + endDate)
        setLogs('dateDifferenceInMilliSeconds endDate.getTime() - startDate.getTime() ' + dateDifferenceInMilliSeconds)
        setLogs('dateDifference In hours ' + Math.floor((dateDifferenceInMilliSeconds / (1000 * 60 * 60)) % 24))
        setLogs('dateDifferenceInDays ' + dateDifferenceInDays)
        setLogs('dateDifferenceInDays >= CACHE_TIME_IN_DAYS ' + dateDifferenceInDays >= CACHE_TIME_IN_DAYS)
        setLogs('CACHE_TIME_IN_DAYS ' + CACHE_TIME_IN_DAYS)
    }
    return dateDifferenceInDays >= CACHE_TIME_IN_DAYS
}

export const getDifferenceFromCurrentDate = (date2) => {
    const date1 = new Date()
    return date2.getTime() - date1.getTime()
}
