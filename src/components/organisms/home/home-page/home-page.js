/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import { doesPhilosopherDataExist } from '../../../../common/static/utils/utils'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
import { LazyLoadQuoteList } from '../lazy-load-quote-list/lazy-load-quote-list'
import styles from './home-page.module.css'
import { useHomePageHooks } from './utils/hooks'
import { useSortingHooks } from './utils/sortingHook'
const Loader = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "Loader" */ '../../../../common/components/loader/loader')))
const Header = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "Header" */ '../header-layout/header-layout')))
const ToggleMinMode = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "ToggleMinMode" */ '../mobile/toggle-min-mode/toggleMinMode')))

const HomePage = () => {
    const { options, sorting, setSorting } = useSortingHooks()
    let propsToSend = useHomePageHooks()
    const { currentPhilosopher, isFetching, minMode } = propsToSend
    propsToSend = { ...propsToSend, setSorting, sorting }

    if (!doesPhilosopherDataExist(currentPhilosopher, options)) return <></>

    return (
        <div className={styles.homepage}>
            {isFetching ? (
                <Loader />
            ) : (
                <>
                    {!minMode && <Header {...propsToSend} />}
                    <ToggleMinMode />
                    <div className={!minMode ? styles.content : styles.contentMinMode}>
                        <AutoSizer>{({ height, width }) => <LazyLoadQuoteList {...propsToSend} width={width} height={height} />}</AutoSizer>
                    </div>
                </>
            )}
        </div>
    )
}

export default HomePage
