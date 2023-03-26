import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPhilosopherQuotes } from '../../../static/utils/utils'
import { setCurrentDataRedux, setCurrentPhilosopherRedux, setDarkModeRedux, setEndRedux, setMarkedModeRedux, setMarkedQuotesRedux, setOptionsRedux, setQuotesLoadedRedux, setScrollPositionRedux, setSearchTextRedux, setStartRedux } from '../homePageRedux/homePageRedux'

export function useHomePageUtils() {
    const listRef = useRef()
    const dispatch = useDispatch()
    const start = useSelector((state) => state.philosophersData.start)
    const end = useSelector((state) => state.philosophersData.end)
    const searchText = useSelector((state) => state.philosophersData.searchText)
    const currentPhilosopher = useSelector((state) => state.philosophersData.currentPhilosopher)
    const currentData = useSelector((state) => state.philosophersData.currentData)
    const markedMode = useSelector((state) => state.philosophersData.markedMode)
    const options = useSelector((state) => state.philosophersData.options)
    const quotesLoaded = useSelector((state) => state.philosophersData.quotesLoaded)
    const markedQuotes = useSelector((state) => state.philosophersData.markedQuotes)
    const darkMode = useSelector((state) => state.philosophersData.darkMode)
    const scrollPosition = useSelector((state) => state.philosophersData.scrollPosition)
    const originalData = getPhilosopherQuotes({ philosopher: currentPhilosopher, options })
    const [isFetching, setIsFetching] = useState(false)

    const setStart = (value) => dispatch(setStartRedux(value))
    const setEnd = (value) => dispatch(setEndRedux(value))
    const setSearchText = (value) => dispatch(setSearchTextRedux(value))
    const setMarkedMode = (value) => dispatch(setMarkedModeRedux(value))
    const setCurrentPhilosopher = (name) => dispatch(setCurrentPhilosopherRedux(name))
    const setCurrentData = (data) => dispatch(setCurrentDataRedux(data))
    const setOptions = (value) => dispatch(setOptionsRedux(value))
    const setQuotesLoaded = (value) => dispatch(setQuotesLoadedRedux(value))
    const setMarkedQuotes = (value) => dispatch(setMarkedQuotesRedux(value))
    const setDarkMode = (value) => dispatch(setDarkModeRedux(value))
    const setScrollPosition = (value) => dispatch(setScrollPositionRedux(value))

    return { listRef, dispatch, start, end, searchText, currentPhilosopher, currentData, markedMode, options, quotesLoaded, markedQuotes, darkMode, scrollPosition, originalData, isFetching, setIsFetching, setStart, setEnd, setSearchText, setMarkedMode, setCurrentPhilosopher, setCurrentData, setOptions, setQuotesLoaded, setMarkedQuotes, setDarkMode, setScrollPosition }
}
