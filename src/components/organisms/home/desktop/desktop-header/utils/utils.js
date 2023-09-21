import { API_ENDPOINTS } from '../../../../../../common/apis/apiEndpoints'
import { getPhilosopherQuotes, lazyLoadAsset } from '../../../../../../common/static/utils/utils'
import { retryTenTimes } from '../../../../../../common/utils/apiUtils'
import { isCacheExpired } from '../../../../../../common/utils/dateUtils'
import { addResponseOptionsDataIntoRedux } from '../../../../../../common/utils/lazyLoadUtils'
import { changeQuotesData } from '../../../quotes-list/utils/utils'

export function onPhilosopherSelectChange({ philosopher, listRef, setIsFetching, setStart, setEnd, setSearchText, setCurrentPhilosopher, currentData, setCurrentData, options, setOptions, markedMode, markedQuotes, setMarkedQuotes, scrollPosition, setRowsRendered }) {
    function callback() {
        setCurrentPhilosopher(philosopher)
        changeQuotesData({ philosopher, currentData, setCurrentData, options }, { markedMode, markedQuotes, setMarkedQuotes })
        setIsFetching(false)
        setRowsRendered(false)
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

export const onFocusHandler = async ({ options, setOptions, isLoggedIn, setSyncDate, isFetchingOptions, setIsFetchingOptions, originalOptions, setOriginalOptions, sorting, syncDate }) => {
    if (isCacheExpired(syncDate) || options.length === 1) {
        if (isLoggedIn !== true) {
            setSyncDate?.(Date.now())
        }
        setIsFetchingOptions?.(true)
        let response = await retryTenTimes(() => fetch(API_ENDPOINTS.STATIC_DATA.STATIC_ASSET_GRAPH))
        response = await response.json()
        addResponseOptionsDataIntoRedux({ newOptions: response, oldOptions: options, oldOriginalOptions: originalOptions, setOptions, setOriginalOptions, sorting })
        setIsFetchingOptions?.(false)
    }
}
