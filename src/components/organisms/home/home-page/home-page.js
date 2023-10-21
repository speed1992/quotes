/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import { doesPhilosopherDataExist } from '../../../../common/static/utils/utils'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
import { applyFilters } from '../../../../common/utils/searchUtils'
import { isDesktop } from '../../../../common/utils/utils'
import { LazyLoadQuoteList } from '../lazy-load-quote-list/lazy-load-quote-list'
import { getPhilosopherFullName } from '../quotes-list/utils/utils'
import styles from './home-page.module.css'
import { useHomePageHooks } from './utils/hooks'
import { useSortingHooks } from './utils/sortingHook'
import { setThemeClassNameOnHTMLTag } from './utils/utils'
const Loader = React.lazy(() => retryTenTimes(() => import('../../../../common/components/loader/loader')))
const Header = React.lazy(() => retryTenTimes(() => import('../header-layout/header-layout')))

const HomePage = () => {
    let propsToSend = useHomePageHooks()
    const { options, sorting, setSorting } = useSortingHooks()

    const { start, end, searchText, currentPhilosopher, currentData, markedMode, markedQuotes, darkMode, setDarkMode, originalData, isFetching, setCurrentData, setMarkedQuotes, isFetchingOptions, setIsFetchingOptions, minMode, setMinMode } = propsToSend

    propsToSend = { ...propsToSend, setSorting, sorting, isFetchingOptions, setIsFetchingOptions }

    useEffect(() => {
        if (originalData) {
            applyFilters({ searchText, start, end, currentPhilosopher, currentData, originalData, setCurrentData, options }, { markedMode, markedQuotes, setMarkedQuotes })
        }
    }, [start, end, searchText, markedMode, currentPhilosopher, currentData.length, markedQuotes[currentPhilosopher]?.quotes?.length])

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

    if (!doesPhilosopherDataExist(currentPhilosopher, options)) return <></>

    return (
        <div className={styles.homepage}>
            {isFetching ? (
                <Loader />
            ) : (
                <>
                    {!minMode && <Header {...propsToSend} />}
                    <button className={styles.minMode} onClick={() => setMinMode(!minMode)}>
                        Toggle Min Mode
                    </button>
                    <div className={!minMode ? styles.content : styles.contentMinMode}>
                        <AutoSizer>{({ height, width }) => <LazyLoadQuoteList {...propsToSend} width={width} height={height} />}</AutoSizer>
                    </div>
                </>
            )}
        </div>
    )
}

export default HomePage
