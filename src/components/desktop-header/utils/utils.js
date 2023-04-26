import { retryTenTimes } from '../../../common/utils/apiUtils'
import { addOptionsDataIntoRedux } from '../../../common/utils/lazyLoadUtils'
import { scrollToMemorizedRow } from '../../../common/utils/utils'
import { getPhilosopherQuotes, lazyLoadAsset } from '../../../static/utils/utils'
import { changeQuotesData } from '../../quotes-list/utils/utils'

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

    // if (philosopher.trim().toLowerCase() === 'all') lazyLoadAllAssets().then(callback)
    // else {
    if (!getPhilosopherQuotes({ philosopher, options })) {
        lazyLoadAsset(philosopher, { options, setOptions }, setQuotesLoaded, []).then(callback)
    } else {
        callback()
    }
    // }
}

export const onFocusHandler = async ({ options, setOptions, isFetchingOptions, setIsFetchingOptions, originalOptions, setOriginalOptions }) => {
    console.log(options.length)
    console.log('isFetchingOptions', isFetchingOptions)
    if (options.length === 1) {
        setIsFetchingOptions(true)
        console.log('Calling dynamic import')
        const response = await retryTenTimes(() => import('../../../static/philosophers-data.json'))
        addOptionsDataIntoRedux({ newOptions: response?.default, oldOptions: options, oldOriginalOptions: originalOptions, setOptions, setOriginalOptions })
        setIsFetchingOptions(false)
    }

    console.log('Inside onFocusHandler')
}
