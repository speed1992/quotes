/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import { doesPhilosopherDataExist } from '../../../../common/static/utils/utils'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
import { isDesktop } from '../../../../common/utils/utils'
import { LazyLoadQuoteList } from '../lazy-load-quote-list/lazy-load-quote-list'
import styles from './home-page.module.css'
import { useHomePageHooks } from './utils/hooks'
import { useSortingHooks } from './utils/sortingHook'
const Loader = React.lazy(() => retryTenTimes(() => import('../../../../common/components/loader/loader')))
const Header = React.lazy(() => retryTenTimes(() => import('../header-layout/header-layout')))

const HomePage = () => {
    const { options, sorting, setSorting } = useSortingHooks()
    let propsToSend = useHomePageHooks()
    const { currentPhilosopher, isFetching, minMode, setMinMode } = propsToSend
    propsToSend = { ...propsToSend, setSorting, sorting }

    if (!doesPhilosopherDataExist(currentPhilosopher, options)) return <></>

    return (
        <div className={styles.homepage}>
            {isFetching ? (
                <Loader />
            ) : (
                <>
                    {!minMode && <Header {...propsToSend} />}
                    {!isDesktop() && (
                        <button className={styles.minMode} onClick={() => setMinMode(!minMode)}>
                            Toggle Min Mode
                        </button>
                    )}
                    <div className={!minMode ? styles.content : styles.contentMinMode}>
                        <AutoSizer>{({ height, width }) => <LazyLoadQuoteList {...propsToSend} width={width} height={height} />}</AutoSizer>
                    </div>
                </>
            )}
        </div>
    )
}

export default HomePage
