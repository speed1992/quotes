/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import { combinedSearch } from '../../common/utils/searchUtils'
import { Layout } from '../layout/layout'
import { LazyLoadQuoteList } from '../lazy-load-quote-list/lazy-load-quote-list'
import { Loader } from '../loader/loader'
import styles from './home-page.module.css'
import { useHomePageUtils } from './utils/hooks'
import { setDarkModeClassOnHTMLTag } from './utils/utils'

const HomePage = () => {
    const propsToSend = useHomePageUtils()

    const { start, end, searchText, currentPhilosopher, currentData, markedMode, options, quotesLoaded, markedQuotes, darkMode, originalData, isFetching, setCurrentData, setMarkedQuotes } = propsToSend

    useEffect(() => {
        if (originalData) {
            combinedSearch({ searchText, start, end, currentPhilosopher, currentData, originalData, setCurrentData, options }, { markedMode, markedQuotes, setMarkedQuotes })
        }
    }, [start, end, searchText, markedMode, quotesLoaded, currentPhilosopher, currentData.length, markedQuotes[currentPhilosopher]?.quotes?.length])

    useEffect(() => {
        setDarkModeClassOnHTMLTag(darkMode)
    }, [darkMode])

    const renderList = () => <AutoSizer>{({ height, width }) => <LazyLoadQuoteList {...propsToSend} width={width} height={height} />}</AutoSizer>

    return (
        <div className={styles.homepage}>
            {isFetching ? (
                <Loader />
            ) : (
                <>
                    {' '}
                    <Layout {...propsToSend} /> <div className={styles.content}>{renderList()}</div>
                </>
            )}
        </div>
    )
}

export default HomePage
