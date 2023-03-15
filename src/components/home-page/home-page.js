/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import { combinedSearch } from '../../common/utils/searchUtils'
import { setCurrentDataRedux, setCurrentPhilosopherRedux, setDarkModeRedux, setEndRedux, setMarkedModeRedux, setMarkedQuotesRedux, setOptionsRedux, setOrginalDataRedux, setQuotesLoadedRedux, setScrollPositionRedux, setSearchTextRedux, setStartRedux, setTranslateRedux } from '../../components/home-page/homePageRedux/homePageRedux'
import { Layout } from '../layout/layout'
import { LazyLoadQuoteList } from '../lazy-load-quote-list/lazy-load-quote-list'
import { Loader } from '../loader/loader'
import styles from './home-page.module.css'
import { setDarkModeClassOnHTMLTag } from './utils/utils'

const HomePage = () => {
    const listRef = useRef()
    const dispatch = useDispatch()
    const start = useSelector((state) => state.philosophersData.start)
    const end = useSelector((state) => state.philosophersData.end)
    const searchText = useSelector((state) => state.philosophersData.searchText)
    const currentPhilosopher = useSelector((state) => state.philosophersData.currentPhilosopher)
    const currentData = useSelector((state) => state.philosophersData.currentData)
    const originalData = useSelector((state) => state.philosophersData.originalData)
    const markedMode = useSelector((state) => state.philosophersData.markedMode)
    const options = useSelector((state) => state.philosophersData.options)
    const quotesLoaded = useSelector((state) => state.philosophersData.quotesLoaded)
    const translateKey = useSelector((state) => state.philosophersData.translate)
    const markedQuotes = useSelector((state) => state.philosophersData.markedQuotes)
    const darkMode = useSelector((state) => state.philosophersData.darkMode)
    const scrollPosition = useSelector((state) => state.philosophersData.scrollPosition)

    const [isFetching, setIsFetching] = useState(false)

    const setStart = (value) => dispatch(setStartRedux(value))
    const setEnd = (value) => dispatch(setEndRedux(value))
    const setSearchText = (value) => dispatch(setSearchTextRedux(value))
    const setMarkedMode = (value) => dispatch(setMarkedModeRedux(value))
    const setCurrentPhilosopher = (name) => dispatch(setCurrentPhilosopherRedux(name))
    const setCurrentData = (data) => dispatch(setCurrentDataRedux(data))
    const setOriginalData = (data) => dispatch(setOrginalDataRedux(data))
    const setTranslateKey = (value) => dispatch(setTranslateRedux(value))
    const setOptions = (value) => dispatch(setOptionsRedux(value))
    const setQuotesLoaded = (value) => dispatch(setQuotesLoadedRedux(value))
    const setMarkedQuotes = (value) => dispatch(setMarkedQuotesRedux(value))
    const setDarkMode = (value) => dispatch(setDarkModeRedux(value))
    const setScrollPosition = (value) => dispatch(setScrollPositionRedux(value))

    useEffect(() => {
        combinedSearch({ searchText, start, end, currentPhilosopher, currentData, originalData, setCurrentData, options }, { markedMode, markedQuotes, setMarkedQuotes })
    }, [start, end, searchText, markedMode, quotesLoaded, currentData.length, markedQuotes[currentPhilosopher]?.quotes?.length])

    useEffect(() => {
        setDarkModeClassOnHTMLTag(darkMode)
    }, [darkMode])

    const propsToSend = { setSearchText, searchText, listRef, start, setStart, end, setEnd, setIsFetching, isFetching, translateKey, setTranslateKey, markedMode, setMarkedMode, currentPhilosopher, setCurrentPhilosopher, setCurrentData, currentData, options, setOptions, setQuotesLoaded, markedQuotes, setMarkedQuotes, originalData, setOriginalData, darkMode, setDarkMode, scrollPosition, setScrollPosition }

    const renderList = () => <AutoSizer>{({ height, width }) => <LazyLoadQuoteList {...propsToSend} width={width} height={height} />}</AutoSizer>

    return (
        <div className={styles.homepage}>
            {isFetching ? (
                <Loader />
            ) : (
                <>
                    <Layout {...propsToSend} /> <div className={styles.content}>{renderList()}</div>
                </>
            )}
        </div>
    )
}

export default HomePage
