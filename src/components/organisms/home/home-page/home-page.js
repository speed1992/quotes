/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import { doesPhilosopherDataExist } from '../../../../common/static/utils/utils'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
import { LazyLoadQuoteList } from '../lazy-load-quote-list/lazy-load-quote-list'
import styles from './home-page.module.css'
import { useHomePageHooks } from './utils/hooks'
import { useSearchHooks } from './utils/searchHooks'
import { useSortingHooks } from './utils/sortingHook'
const Loader = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "Loader" */ '../../../../common/components/loader/loader')))
const Header = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "Header" */ '../header-layout/header-layout')))

const HomePage = () => {
    const { options, sorting, setSorting } = useSortingHooks()
    let propsToSend = useHomePageHooks()
    const { currentPhilosopher, isFetching, minMode } = propsToSend
    propsToSend = { ...propsToSend, setSorting, sorting }
    useSearchHooks()

    if (!doesPhilosopherDataExist(currentPhilosopher, options)) return <></>

    return (
        <div className={styles.homepage}>
            {isFetching ? (
                <Loader />
            ) : (
                <>
                    {!minMode && <Header {...propsToSend} />}
                    <div className={!minMode ? styles.content : styles.contentMinMode}>
                        <AutoSizer>{({ height, width }) => <LazyLoadQuoteList {...propsToSend} width={width} height={height} />}</AutoSizer>
                    </div>
                </>
            )}
        </div>
    )
}

export default HomePage
