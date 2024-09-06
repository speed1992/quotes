import React, { Suspense, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import ErrorBoundary from '../../../../../common/components/error-boundary/error-boundary'
import { retryTenTimes } from '../../../../../common/utils/apiUtils'
import Select from '../../../tools/select/select'
import { WordLengthSearch } from '../../../tools/wordLengthSearch/wordLengthSearch'
import { onFocusHandler, onPhilosopherSelectChange } from '../../desktop/desktop-header/utils/utils'
import styles from '../../header-layout/header-layout.module.css'
import { setSearchTextRedux } from '../../home-page/homePageRedux/homePageRedux'
import mobileMenuStyles from './mobile-header.module.css'
const MobileMenu = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "MobileMenu" */ '../mobile-menu/mobile-menu')))
const Breadcrumb = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "Breadcrumb" */ '../../../analysis/breadcrumb/breadcrumb')))
const UnreadCounter = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "UnreadCounter" */ '../../../analysis/unread-counter/unread-counter')))
const QuotesFound = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "QuotesFound" */ '../../../analysis/quotes-found/quotes-found')))

function MobileHeader({ listRef, searchText, setStart, setEnd, isFetching, setIsFetching, markedMode, setMarkedMode, markedQuotes, currentData, setCurrentData, currentPhilosopher, originalData, setCurrentPhilosopher, options, setOptions, darkMode, setDarkMode, setSorting, sorting, isFetchingOptions, setIsFetchingOptions, originalOptions, setOriginalOptions, userName, setUserName, setMarkedQuotes, isLoggedIn, setIsLoggedIn, password, setPassword, scrollPosition, setRowsRendered, syncDate, setSyncDate, recentPhilosophers, setRecentPhilosophers, setLogs }) {
    const dispatch = useDispatch()
    const [visible, toggleVisible] = useState(false)
    const setSearchText = useCallback((value) => dispatch(setSearchTextRedux(value)), [dispatch])

    return (
        <div className={styles.header}>
            <div className={styles.mobileColumn}>
                {visible && (
                    <Suspense>
                        <ErrorBoundary>
                            <MobileMenu markedMode={markedMode} setMarkedMode={setMarkedMode} visible={visible} options={options} setOptions={setOptions} toggleVisible={toggleVisible} darkMode={darkMode} setDarkMode={setDarkMode} setSorting={setSorting} sorting={sorting} userName={userName} setUserName={setUserName} setMarkedQuotes={setMarkedQuotes} {...{ isLoggedIn, setIsLoggedIn, password, setPassword, setIsFetching }} />
                        </ErrorBoundary>
                    </Suspense>
                )}
                <div className={mobileMenuStyles.menu} onClick={() => toggleVisible(!visible)}>
                    ☰
                </div>
            </div>
            <div className={styles.mobileColumn}>
                <WordLengthSearch label={true} isStartFeatureEnabled={false} />
            </div>
            <div className={styles.mobileColumn}>
                <input name="search-text" data-testid="search-text" className={styles.wordSearch} type="text" placeholder="Search word" value={searchText} onChange={({ target: { value } }) => setSearchText(value)} />
            </div>
            <div className={styles.mobileColumn}>
                <Select markedMode={markedMode} recentPhilosophers={recentPhilosophers} isMobile={true} isFetchingOptions={isFetchingOptions} options={options} currentPhilosopher={currentPhilosopher} onFocusHandlerCallback={() => onFocusHandler({ options, setOptions, isLoggedIn, setSyncDate, isFetchingOptions, setIsFetchingOptions, originalOptions, setOriginalOptions, sorting, syncDate, setLogs })} onChangeHandler={({ target: { value: philosopher } }) => onPhilosopherSelectChange({ philosopher, listRef, setIsFetching, setStart, setEnd, setSearchText, setCurrentPhilosopher, setCurrentData, options, setOptions, scrollPosition, setRowsRendered, recentPhilosophers, setRecentPhilosophers })} darkMode={darkMode} />
            </div>
            <Suspense fallback={''}>
                <Breadcrumb>
                    <QuotesFound />
                    {markedMode && <UnreadCounter isFetching={isFetching} currentData={currentData} originalData={originalData} markedQuotes={markedQuotes} currentPhilosopher={currentPhilosopher} isFetchingOptions={isFetchingOptions} />}
                </Breadcrumb>
            </Suspense>
        </div>
    )
}

export default MobileHeader
