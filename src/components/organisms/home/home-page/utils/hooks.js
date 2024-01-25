/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useSnackbar from '../../../../../common/components/snackbar/useSnackbar'
import { doesPhilosopherDataExist, getPhilosopherQuotes } from '../../../../../common/static/utils/utils'
import { onFocusHandler } from '../../desktop/desktop-header/utils/utils'
import { setCurrentDataRedux, setCurrentPhilosopherRedux, setDarkModeRedux, setEndRedux, setIsLoggedInRedux, setLogsRedux, setMarkedModeRedux, setMarkedQuotesRedux, setMinModeRedux, setOptionsRedux, setOriginalOptionsRedux, setPasswordRedux, setRecentPhilosophersRedux, setScheduledPostsRedux, setScrollPositionRedux, setSearchTextRedux, setStartRedux, setSyncDateRedux, setUserNameRedux } from '../homePageRedux/homePageRedux'
import { compareWithServerSyncDatesAndMakeAnAPICall, getClientSyncDates } from './utils'

export function useHomePageHooks() {
    const [openSnackbar] = useSnackbar()
    const listRef = useRef()
    const dispatch = useDispatch()
    const start = useSelector((state) => state?.philosophersData?.start)
    const end = useSelector((state) => state?.philosophersData?.end)
    const searchText = useSelector((state) => state?.philosophersData?.searchText)
    const currentPhilosopher = useSelector((state) => state?.philosophersData?.currentPhilosopher)
    const currentData = useSelector((state) => state?.philosophersData?.currentData)
    const markedMode = useSelector((state) => state?.philosophersData?.markedMode)
    const options = useSelector((state) => state?.philosophersData?.options)
    const markedQuotes = useSelector((state) => state?.philosophersData?.markedQuotes)
    const scheduledPosts = useSelector((state) => state?.philosophersData?.scheduledPosts)
    const darkMode = useSelector((state) => state?.philosophersData?.darkMode)
    const scrollPosition = useSelector((state) => state?.philosophersData?.scrollPosition)
    const originalData = getPhilosopherQuotes({ philosopher: currentPhilosopher, options })
    const originalOptions = useSelector((state) => state?.philosophersData?.originalOptions)
    const userName = useSelector((state) => state?.philosophersData?.userName)
    const isLoggedIn = useSelector((state) => state?.philosophersData?.isLoggedIn)
    const password = useSelector((state) => state?.philosophersData?.password)
    const syncDate = useSelector((state) => state?.philosophersData?.syncDate)
    const sorting = useSelector((state) => state.philosophersData.sorting)
    const voiceSpeed = useSelector((state) => state.philosophersData.voiceSpeed)
    const recentPhilosophers = useSelector((state) => state.philosophersData.recentPhilosophers)
    const minMode = useSelector((state) => state.philosophersData.minMode)

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
    const setRecentPhilosophers = useCallback((value) => dispatch(setRecentPhilosophersRedux(value)), [])
    const setMinMode = useCallback((value) => dispatch(setMinModeRedux(value)), [])
    const setLogs = useCallback((value) => dispatch(setLogsRedux(value)), [])

    useEffect(() => {
        if (isLoggedIn) {
            ;(async () => {
                const markedQuoteClientCount = Object.values(markedQuotes).flat().length
                let { currentClientDate, lastSyncClientDate } = getClientSyncDates(syncDate)

                if (currentClientDate > lastSyncClientDate) {
                    await compareWithServerSyncDatesAndMakeAnAPICall(userName, markedQuotes, openSnackbar, setMarkedQuotes, setSyncDate, markedQuoteClientCount, currentClientDate)
                }
            })()
        }
    }, [isLoggedIn])

    useEffect(() => {
        if (!doesPhilosopherDataExist(currentPhilosopher, options)) {
            onFocusHandler({ options, setOptions, isLoggedIn, setSyncDate, isFetchingOptions, setIsFetchingOptions, originalOptions, setOriginalOptions, sorting })
        }
    }, [currentPhilosopher])

    return { listRef, dispatch, start, end, searchText, currentPhilosopher, currentData, markedMode, options, markedQuotes, scheduledPosts, darkMode, scrollPosition, originalData, isFetching, setIsFetching, setStart, setEnd, setSearchText, setMarkedMode, setCurrentPhilosopher, setCurrentData, setOptions, setMarkedQuotes, setScheduledQuotes, setDarkMode, setScrollPosition, originalOptions, setOriginalOptions, userName, setUserName, isLoggedIn, setIsLoggedIn, password, setPassword, isFetchingOptions, setIsFetchingOptions, rowsRendered, setRowsRendered, syncDate, setSyncDate, voiceSpeed, recentPhilosophers, setRecentPhilosophers, minMode, setMinMode, setLogs }
}
