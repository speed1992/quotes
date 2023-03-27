import { scrollToMemorizedRow } from '../../../common/utils/utils'
import { getPhilosopherQuotes, lazyLoadAllAssets, lazyLoadAsset } from '../../../static/utils/utils'
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

    if (philosopher.trim().toLowerCase() === 'all') lazyLoadAllAssets().then(callback)
    else {
        if (!getPhilosopherQuotes({ philosopher, options })) {
            lazyLoadAsset(philosopher, { options, setOptions }, setQuotesLoaded, []).then(callback)
        } else {
            callback()
        }
    }
}
