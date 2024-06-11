import { API_ENDPOINTS } from '../../../../../../common/apis/apiEndpoints'
import CACHE_IN_DAYS from '../../../../../../common/settings/cache.json'
import { MAX_RECENT_PHILOSOPHERS } from '../../../../../../common/settings/constants'
import { getPhilosopherQuotes, lazyLoadAsset } from '../../../../../../common/static/utils/utils'
import { retryTenTimes } from '../../../../../../common/utils/apiUtils'
import { isCacheExpired } from '../../../../../../common/utils/dateUtils'
import { addResponseOptionsDataIntoRedux } from '../../../../../../common/utils/lazyLoadUtils'
import { checkQueryParams } from '../../../../../../common/utils/urlUtils'
import { changeQuotesData } from '../../../quotes-list/utils/utils'
export function onPhilosopherSelectChange({ philosopher, listRef, setIsFetching, setStart, setEnd, setSearchText, setCurrentPhilosopher, currentData, setCurrentData, options, setOptions, markedMode, markedQuotes, setMarkedQuotes, scrollPosition, setRowsRendered, recentPhilosophers, setRecentPhilosophers }) {
    function callback() {
        if (recentPhilosophers) setRecentPhilosophers([...new Set([philosopher, ...recentPhilosophers.slice(0, MAX_RECENT_PHILOSOPHERS - 1)])])
        setCurrentPhilosopher(philosopher)
        changeQuotesData({ philosopher, currentData, setCurrentData, options }, { markedMode, markedQuotes, setMarkedQuotes })
        setIsFetching(false)
    }
    setStart(1)
    setEnd('')
    setSearchText('')
    setIsFetching(true)

    if (!getPhilosopherQuotes({ philosopher, options })) {
        lazyLoadAsset(philosopher, { options, setOptions }, []).then(callback)
    } else {
        callback()
    }
}

export const onFocusHandler = async ({ options, setOptions, isLoggedIn, setSyncDate, isFetchingOptions, setIsFetchingOptions, originalOptions, setOriginalOptions, sorting, syncDate, setLogs }) => {
    if (checkQueryParams('dev')) {
        const today = new Date()
        setLogs?.('inside onFocusHandler')
        setLogs?.('isCacheExpired(syncDate, CACHE_IN_DAYS.ASSET_GRAPH, setLogs) || options.length === 1 ' + isCacheExpired(syncDate, CACHE_IN_DAYS.ASSET_GRAPH, setLogs) || options.length === 1)
        setLogs?.('options.length ' + options.length)
        setLogs?.('current time ' + today)
        setLogs?.('syncDate ' + new Date(syncDate))
    }
    if (isCacheExpired(syncDate, CACHE_IN_DAYS.ASSET_GRAPH, setLogs) || options.length === 1) {
        setIsFetchingOptions?.(true)
        let response = await retryTenTimes(() => fetch(API_ENDPOINTS.STATIC_DATA.STATIC_ASSET_GRAPH))
        response = await response.json()
        if (checkQueryParams('dev')) setLogs?.('api response ' + response)
        addResponseOptionsDataIntoRedux({ newOptions: response, oldOptions: options, oldOriginalOptions: originalOptions, setOptions, setOriginalOptions, sorting })
        setIsFetchingOptions?.(false)
        setSyncDate?.(Date.now())
    }
}
