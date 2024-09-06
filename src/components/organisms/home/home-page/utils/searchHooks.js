import { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPhilosopherQuotes } from '../../../../../common/static/utils/utils'
import { applyFilters } from '../../../../../common/utils/searchUtils'
import { setCurrentDataRedux, setMarkedQuotesRedux } from '../homePageRedux/homePageRedux'

export const useSearchHooks = () => {
    const { searchText, start, end, currentPhilosopher, currentData, options, searchFilters, markedMode, markedQuotes } = useSelector((state) => state?.philosophersData)
    const dispatch = useDispatch()
    const setCurrentData = useCallback((data) => dispatch(setCurrentDataRedux(data)), [dispatch])
    const setMarkedQuotes = useCallback((data) => dispatch(setMarkedQuotesRedux(data)), [dispatch])

    const originalData = useMemo(() => getPhilosopherQuotes({ philosopher: currentPhilosopher, options }), [currentPhilosopher, options])

    useEffect(() => {
        if (originalData) {
            debugger
            applyFilters({ searchText, start, end, currentPhilosopher, currentData, originalData, setCurrentData, options, searchFilters }, { markedMode, markedQuotes, setMarkedQuotes })
        }
    }, [start, end, searchText, markedMode, currentPhilosopher, searchFilters.exclusions, searchFilters.inclusions, originalData, setCurrentData, options, searchFilters, markedQuotes, setMarkedQuotes])
}
