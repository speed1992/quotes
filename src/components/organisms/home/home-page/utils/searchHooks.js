import { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPhilosopherQuotes } from '../../../../../common/static/utils/utils'
import { applyFilters } from '../../../../../common/utils/searchUtils'
import { setCurrentDataRedux } from '../homePageRedux/homePageRedux'

export const useSearchHooks = () => {
    const { searchText, start, end, currentPhilosopher, currentData, options, searchFilters, markedMode, markedQuotes, setMarkedQuotes } = useSelector((state) => state?.philosophersData)
    const dispatch = useDispatch()
    const setCurrentData = useCallback((data) => dispatch(setCurrentDataRedux(data)), [])

    const originalData = useMemo(() => getPhilosopherQuotes({ philosopher: currentPhilosopher, options }), [currentPhilosopher, options])

    useEffect(() => {
        if (originalData) {
            applyFilters({ searchText, start, end, currentPhilosopher, currentData, originalData, setCurrentData, options, searchFilters }, { markedMode, markedQuotes, setMarkedQuotes })
        }
    }, [start, end, searchText, markedMode, currentPhilosopher, markedQuotes?.[currentPhilosopher]?.quotes?.length, searchFilters?.exclusions, searchFilters?.inclusions])
}
