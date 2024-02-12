/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useSnackbar from '../../../../../common/components/snackbar/useSnackbar'
import { doesPhilosopherDataExist, getPhilosopherQuotes } from '../../../../../common/static/utils/utils'
import { isCacheExpired } from '../../../../../common/utils/dateUtils'
import { debounce } from '../../../../../common/utils/debounce'
import { applyFilters } from '../../../../../common/utils/searchUtils'
import { isDesktop } from '../../../../../common/utils/utils'
import { onFocusHandler } from '../../desktop/desktop-header/utils/utils'
import { getPhilosopherFullName } from '../../quotes-list/utils/utils'
import { setCurrentDataRedux, setCurrentPhilosopherRedux, setDarkModeRedux, setEndRedux, setIsLoggedInRedux, setLogsRedux, setMarkedModeRedux, setMarkedQuotesRedux, setMinModeRedux, setOptionsRedux, setOriginalOptionsRedux, setPasswordRedux, setRecentPhilosophersRedux, setRestoreQuotesFromServerCachedDateRedux, setScheduledPostsRedux, setScrollPositionRedux, setSearchTextRedux, setStartRedux, setSyncDateRedux, setUserNameRedux } from '../homePageRedux/homePageRedux'
import { compareWithServerSyncDatesAndMakeAnAPICall, setThemeClassNameOnHTMLTag } from './utils'

export function useHomePageHooks() {
    const [isFirstLoad, setIsFirstLoad] = useState(true)
    const [openSnackbar] = useSnackbar()
    const listRef = useRef()
    const dispatch = useDispatch()
    const { start, end, searchText, currentPhilosopher, currentData, markedMode, options, markedQuotes, scheduledPosts, darkMode, scrollPosition, originalData = getPhilosopherQuotes({ philosopher: currentPhilosopher, options }), originalOptions, userName, isLoggedIn, password, syncDate, restoreQuotesFromServerCachedDate, sorting, voiceSpeed, recentPhilosophers, minMode } = useSelector((state) => state.philosophersData)

    const [isFetching, setIsFetching] = useState(false)
    const [isFetchingOptions, setIsFetchingOptions] = useState(false)
    const [rowsRendered, setRowsRendered] = useState(false)

    const setStart = useCallback((value) => dispatch(setStartRedux(value)), [])
    const setEnd = useCallback((value) => dispatch(setEndRedux(value)), [])
    const setSearchText = useCallback((value) => dispatch(setSearchTextRedux(value)), [])
    const setMarkedMode = useCallback((value) => dispatch(setMarkedModeRedux(value)), [])
    const setCurrentPhilosopher = useCallback((name) => dispatch(setCurrentPhilosopherRedux(name)), [])
    const setCurrentData = useCallback((data) => dispatch(setCurrentDataRedux(data)), [])
    const setOptions = useCallback((value) => dispatch(setOptionsRedux(value)), [])
    const setMarkedQuotes = useCallback((value) => dispatch(setMarkedQuotesRedux(value)), [])
    const setScheduledQuotes = useCallback((value) => dispatch(setScheduledPostsRedux(value)), [])
    const setDarkMode = useCallback((value) => dispatch(setDarkModeRedux(value)), [])
    const setScrollPosition = useCallback((value) => dispatch(setScrollPositionRedux(value)), [])
    const setOriginalOptions = useCallback((value) => dispatch(setOriginalOptionsRedux(value)), [])
    const setUserName = useCallback((value) => dispatch(setUserNameRedux(value)), [])
    const setIsLoggedIn = useCallback((value) => dispatch(setIsLoggedInRedux(value)), [])
    const setPassword = useCallback((value) => dispatch(setPasswordRedux(value)), [])
    const setSyncDate = useCallback((value) => dispatch(setSyncDateRedux(value)), [])
    const setRestoreQuotesFromServerCachedDate = useCallback((value) => dispatch(setRestoreQuotesFromServerCachedDateRedux(value)), [])
    const setRecentPhilosophers = useCallback((value) => dispatch(setRecentPhilosophersRedux(value)), [])
    const setMinMode = useCallback((value) => dispatch(setMinModeRedux(value)), [])
    const setLogs = useCallback((value) => dispatch(setLogsRedux(value)), [])

    const debouncedApplyFilters = debounce(applyFilters, 1000)

    useEffect(() => {
        if (isLoggedIn) {
            ;(async () => {
                const markedQuoteClientCount = Object.values(markedQuotes).flat().length

                if (isCacheExpired(restoreQuotesFromServerCachedDate)) {
                    await compareWithServerSyncDatesAndMakeAnAPICall(userName, markedQuotes, openSnackbar, setMarkedQuotes, setRestoreQuotesFromServerCachedDate, markedQuoteClientCount)
                }
            })()
        }
    }, [isLoggedIn])

    useEffect(() => {
        if (!doesPhilosopherDataExist(currentPhilosopher, options)) {
            onFocusHandler({ options, setOptions, isLoggedIn, setSyncDate, isFetchingOptions, setIsFetchingOptions, originalOptions, setOriginalOptions, sorting })
        }
    }, [currentPhilosopher])

    useEffect(() => {
        if (originalData) {
            if (!isFirstLoad) {
                debouncedApplyFilters({ searchText, start, end, currentPhilosopher, currentData, originalData, setCurrentData, options }, { markedMode, markedQuotes, setMarkedQuotes })
            } else {
                applyFilters({ searchText, start, end, currentPhilosopher, currentData, originalData, setCurrentData, options }, { markedMode, markedQuotes, setMarkedQuotes })
                setIsFirstLoad(false)
            }
        }
    }, [start, end, searchText, markedMode, currentPhilosopher, currentData?.length, markedQuotes[currentPhilosopher]?.quotes?.length])

    useEffect(() => {
        setThemeClassNameOnHTMLTag(darkMode)
    }, [darkMode])

    useEffect(() => {
        if (isDesktop()) {
            setDarkMode(false)
            setThemeClassNameOnHTMLTag(false)
        }
    }, [darkMode])

    useEffect(() => {
        document.title = `${getPhilosopherFullName({ currentPhilosopher, options })} Quotes`
    }, [currentPhilosopher])

    return { listRef, dispatch, start, end, searchText, currentPhilosopher, currentData, markedMode, options, markedQuotes, scheduledPosts, darkMode, scrollPosition, originalData, isFetching, setIsFetching, setStart, setEnd, setSearchText, setMarkedMode, setCurrentPhilosopher, setCurrentData, setOptions, setMarkedQuotes, setScheduledQuotes, setDarkMode, setScrollPosition, originalOptions, setOriginalOptions, userName, setUserName, isLoggedIn, setIsLoggedIn, password, setPassword, isFetchingOptions, setIsFetchingOptions, rowsRendered, setRowsRendered, syncDate, setSyncDate, voiceSpeed, recentPhilosophers, setRecentPhilosophers, minMode, setMinMode, setLogs, restoreQuotesFromServerCachedDate, setRestoreQuotesFromServerCachedDate, setIsFirstLoad }
}
