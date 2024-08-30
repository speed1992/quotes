import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useSearchHooks = () => {
    const { searchText, start, end, currentPhilosopher, currentData, originalData, setCurrentData, options, searchFilters, markedMode, markedQuotes, setMarkedQuotes } = useSelector((state) => state?.philosophersData)

    useEffect(() => {
        if (originalData) {
            applyFilters({ searchText, start, end, currentPhilosopher, currentData, originalData, setCurrentData, options, searchFilters }, { markedMode, markedQuotes, setMarkedQuotes })
        }
    }, [start, end, searchText, markedMode, currentPhilosopher, markedQuotes?.[currentPhilosopher]?.quotes?.length, searchFilters?.exclusions, searchFilters?.inclusions])
}
