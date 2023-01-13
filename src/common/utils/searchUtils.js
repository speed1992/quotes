import { changeQuotesData, searchByWordLength } from '../../components/quotes-list/utils/utils.js'
import { search } from './utils.js'

export function combinedSearch({ searchText, start, end, philosopher, currentData, setCurrentData, options }, { markedMode = false, markedQuotes, setMarkedQuotes }) {
    let dataForSearch = []
    // eslint-disable-next-line
    if (searchText === '' && start == 1 && end == '') 
    changeQuotesData({ philosopher, currentData, setCurrentData, options }, { markedMode, markedQuotes, setMarkedQuotes })
    else {
        dataForSearch = search({ searchText, philosopher, options })
        if (dataForSearch) searchByWordLength(start, end, dataForSearch, { markedMode, markedQuotes, setMarkedQuotes }, { currentData, setCurrentData })
    }
}
