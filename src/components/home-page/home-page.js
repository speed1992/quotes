/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import { applyFilters } from '../../common/utils/searchUtils'
import { isDesktop } from '../../common/utils/utils'
import { Header } from '../header-layout/header-layout'
import { LazyLoadQuoteList } from '../lazy-load-quote-list/lazy-load-quote-list'
import { Loader } from '../loader/loader'
import styles from './home-page.module.css'
import { useHomePageHooks } from './utils/hooks'
import { useSortingHooks } from './utils/sortingHook'
import { setDarkModeClassOnHTMLTag } from './utils/utils'

const HomePage = () => {
    const [isFetchingOptions, setIsFetchingOptions] = useState(false)
    console.log('HomePage isFetchingOptions', isFetchingOptions)

    let propsToSend = useHomePageHooks()
    const { options, sorting, setSorting } = useSortingHooks()

    const { start, end, searchText, currentPhilosopher, currentData, markedMode, quotesLoaded, markedQuotes, darkMode, setDarkMode, originalData, isFetching, setCurrentData, setMarkedQuotes } = propsToSend

    propsToSend = { ...propsToSend, setSorting, sorting, isFetchingOptions, setIsFetchingOptions }

    useEffect(() => {
        if (originalData) {
            applyFilters({ searchText, start, end, currentPhilosopher, currentData, originalData, setCurrentData, options }, { markedMode, markedQuotes, setMarkedQuotes })
        }
    }, [start, end, searchText, markedMode, quotesLoaded, currentPhilosopher, currentData.length, markedQuotes[currentPhilosopher]?.quotes?.length])

    useEffect(() => {
        setDarkModeClassOnHTMLTag(darkMode)
    }, [darkMode])

    useEffect(() => {
        if (isDesktop()) {
            setDarkMode(false)
            setDarkModeClassOnHTMLTag(false)
        }
    }, [darkMode])

    const renderList = () => <AutoSizer>{({ height, width }) => <LazyLoadQuoteList {...propsToSend} width={width} height={height} />}</AutoSizer>

    return (
        <div className={styles.homepage}>
            {isFetching ? (
                <Loader />
            ) : (
                <>
                    {' '}
                    <Header {...propsToSend} /> <div className={styles.content}>{renderList()}</div>
                </>
            )}
        </div>
    )
}

export default HomePage
