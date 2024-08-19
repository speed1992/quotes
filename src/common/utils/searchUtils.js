import { searchByWordLength } from '../../components/organisms/home/quotes-list/utils/utils.js'
import { search } from './utils.js'

export async function applyFilters({ searchText, start, end, currentPhilosopher, currentData, originalData, setCurrentData, options, searchFilters }, { markedMode = false, markedQuotes, setMarkedQuotes }) {
    let filteredData = []

    filteredData = await search({ searchText, currentData: originalData, setCurrentData, currentPhilosopher, options, searchFilters })
    if (filteredData) {
        await searchByWordLength(start, end, filteredData, { markedMode, markedQuotes, setMarkedQuotes }, { currentData, setCurrentData, originalData, currentPhilosopher })
    }
}
