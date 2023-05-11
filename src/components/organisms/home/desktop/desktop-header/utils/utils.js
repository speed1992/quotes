import { getPhilosopherQuotes, lazyLoadAsset } from '../../../../../../common/static/utils/utils'
import { retryTenTimes } from '../../../../../../common/utils/apiUtils'
import { addResponseOptionsDataIntoRedux } from '../../../../../../common/utils/lazyLoadUtils'
import { scrollToMemorizedRow } from '../../../../../../common/utils/utils'
import { changeQuotesData } from '../../../quotes-list/utils/utils'

export function onPhilosopherSelectChange({ philosopher, listRef, setIsFetching, setStart, setEnd, setSearchText, setCurrentPhilosopher, currentData, setCurrentData, options, setOptions, setQuotesLoaded, markedMode, markedQuotes, setMarkedQuotes }) {
    function callback() {
        setCurrentPhilosopher(philosopher)
        changeQuotesData({ philosopher, currentData, setCurrentData, options }, { markedMode, markedQuotes, setMarkedQuotes })
        scrollToMemorizedRow(listRef, currentData, philosopher)
        setIsFetching(false)
    }
    setStart(1)
    setEnd('')
    setSearchText('')
    setIsFetching(true)

    if (!getPhilosopherQuotes({ philosopher, options })) {
        lazyLoadAsset(philosopher, { options, setOptions }, setQuotesLoaded, []).then(callback)
    } else {
        callback()
    }
}

export const onFocusHandler = async ({ options, setOptions, isFetchingOptions, setIsFetchingOptions, originalOptions, setOriginalOptions, sorting }) => {
    // if (options.length === 1) {
    setIsFetchingOptions(true)
    let response = await retryTenTimes(() => fetch('https://cdn.jsdelivr.net/gh/speed1992/quotes/src/common/static/philosophers-data.json'))
    response = await response.json()
    addResponseOptionsDataIntoRedux({ newOptions: response, oldOptions: options, oldOriginalOptions: originalOptions, setOptions, setOriginalOptions, sorting })
    setIsFetchingOptions(false)
    // }
}
