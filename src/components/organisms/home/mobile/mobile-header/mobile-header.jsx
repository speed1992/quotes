import React, { Suspense, useState } from 'react'
import ErrorBoundary from '../../../../../common/components/error-boundary/error-boundary'
import { retryTenTimes } from '../../../../../common/utils/apiUtils'
import Select from '../../../tools/select/select'
import { WordLengthSearch } from '../../../tools/wordLengthSearch/wordLengthSearch'
import { onFocusHandler, onPhilosopherSelectChange } from '../../desktop/desktop-header/utils/utils'
import styles from '../../header-layout/header-layout.module.css'
const MobileMenu = React.lazy(() => retryTenTimes(() => import('../mobile-menu/mobile-menu')))
const Breadcrumb = React.lazy(() => retryTenTimes(() => import('../../../analysis/breadcrumb/breadcrumb')))
const UnreadCounter = React.lazy(() => retryTenTimes(() => import('../../../analysis/unread-counter/unread-counter')))
const QuotesFound = React.lazy(() => retryTenTimes(() => import('../../../analysis/quotes-found/quotes-found')))

function MobileHeader({ listRef, setSearchText, searchText, start, end, setStart, setEnd, isFetching, setIsFetching, markedMode, setMarkedMode, markedQuotes, currentData, setCurrentData, currentPhilosopher, originalData, setCurrentPhilosopher, options, setOptions, darkMode, setDarkMode, setSorting, sorting, isFetchingOptions, setIsFetchingOptions, originalOptions, setOriginalOptions, userName, setUserName, setMarkedQuotes, isLoggedIn, setIsLoggedIn, password, setPassword, scrollPosition, setRowsRendered, syncDate, setSyncDate, recentPhilosophers, setRecentPhilosophers }) {
    const propsToSend = { start, end, setStart, setEnd, setSearchText, setCurrentData }
    const [visible, toggleVisible] = useState(false)

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
                <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }} onClick={() => toggleVisible(!visible)}>
                    ☰
                </div>
            </div>
            <div className={styles.mobileColumn}>
                <WordLengthSearch isMobile={true} listRef={listRef} {...propsToSend} />
            </div>
            <div className={styles.mobileColumn}>
                <input name="search-text" data-testid="search-text" className={styles.wordSearch} type="text" placeholder="Search word" value={searchText} onChange={({ target: { value } }) => setSearchText(value)} />
            </div>
            <div className={styles.mobileColumn}>
                <Select recentPhilosophers={recentPhilosophers} isMobile={true} isFetchingOptions={isFetchingOptions} options={options} currentPhilosopher={currentPhilosopher} onFocusHandlerCallback={() => onFocusHandler({ options, setOptions, isLoggedIn, setSyncDate, isFetchingOptions, setIsFetchingOptions, originalOptions, setOriginalOptions, sorting, syncDate })} onChangeHandler={({ target: { value: philosopher } }) => onPhilosopherSelectChange({ philosopher, listRef, setIsFetching, setStart, setEnd, setSearchText, setCurrentPhilosopher, setCurrentData, options, setOptions, scrollPosition, setRowsRendered, recentPhilosophers, setRecentPhilosophers })} darkMode={darkMode} />
            </div>
            <Suspense fallback={''}>
                <Breadcrumb>
                    <QuotesFound markedMode={markedMode} found={currentData.length} />
                    {markedMode && <UnreadCounter isFetching={isFetching} currentData={currentData} originalData={originalData} markedQuotes={markedQuotes} currentPhilosopher={currentPhilosopher} isFetchingOptions={isFetchingOptions} />}
                </Breadcrumb>
            </Suspense>
        </div>
    )
}

export default MobileHeader
