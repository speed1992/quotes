import { changeQuotesData, searchByWordLength } from '../../components/quotes-list/utils/utils.js'
import { search } from './utils.js'

export function combinedSearch({ searchText, start, end, currentPhilosopher, currentData, originalData, setCurrentData, options }, { markedMode = false, markedQuotes, setMarkedQuotes }) {
    debugger
    let dataForSearch = []
    // eslint-disable-next-line
    if (searchText === '' && start == 1 && end == '') changeQuotesData({ currentPhilosopher, currentData: originalData, setCurrentData, options }, { markedMode, markedQuotes, setMarkedQuotes })
    else {
        dataForSearch = search({ searchText, currentData: originalData, setCurrentData, currentPhilosopher, options })
        if (dataForSearch) searchByWordLength(start, end, dataForSearch, { markedMode, markedQuotes, setMarkedQuotes }, { currentData, setCurrentData, originalData, currentPhilosopher })
    }
}
