/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useSelector } from 'react-redux'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
import { LazyLoadQuoteList } from '../lazy-load-quote-list/lazy-load-quote-list'
import styles from './home-page.module.css'
import { useSearchHooks } from './utils/searchHooks'
const Loader = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "Loader" */ '../../../../common/components/loader/loader')))
const Header = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "Header" */ '../header-layout/header-layout')))

const HomePage = () => {
    const { minMode, isFetchingPhilosopher } = useSelector((state) => state?.philosophersData)

    useSearchHooks()

    return (
        <div className={styles.homepage}>
            {isFetchingPhilosopher ? (
                <Loader />
            ) : (
                <>
                    {!minMode && <Header />}
                    <div className={!minMode ? styles.content : styles.contentMinMode}>
                        <LazyLoadQuoteList />
                    </div>
                </>
            )}
        </div>
    )
}

export default HomePage
