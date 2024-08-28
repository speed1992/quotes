import { search } from './utils.js'

export async function applyFilters({ searchText, start, end, currentPhilosopher, originalData, setCurrentData, searchFilters }, { markedMode = false, markedQuotes, setMarkedQuotes }) {
    await search({ searchText, start, end, currentData: originalData, searchFilters, markedMode, markedQuotes, setMarkedQuotes, setCurrentData, originalData, currentPhilosopher })
}
