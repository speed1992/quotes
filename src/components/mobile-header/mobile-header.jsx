import React, { Suspense, useState } from 'react'
import { retryTenTimes } from '../../common/utils/apiUtils'
import { onFocusHandler, onPhilosopherSelectChange } from '../desktop-header/utils/utils'
import { QuotesFound } from '../quotes-found/quotes-found'
import Select from '../select/select'
import { WordLengthSearch } from '../wordLengthSearch/wordLengthSearch'
const MobileMenu = React.lazy(() => retryTenTimes(() => import('../mobile-menu/mobile-menu')))
const Breadcrumb = React.lazy(() => retryTenTimes(() => import('../breadcrumb/breadcrumb')))
const UnreadCounter = React.lazy(() => retryTenTimes(() => import('../unread-counter/unread-counter')))

function MobileHeader({ listRef, setSearchText, searchText, start, end, setStart, setEnd, isFetching, setIsFetching, markedMode, setMarkedMode, markedQuotes, currentData, setCurrentData, currentPhilosopher, originalData, setCurrentPhilosopher, options, setOptions, setQuotesLoaded, darkMode, setDarkMode, setSorting, sorting, isFetchingOptions, setIsFetchingOptions, originalOptions, setOriginalOptions }) {
    const propsToSend = { start, end, setStart, setEnd, setSearchText, setCurrentData }
    const [visible, toggleVisible] = useState(false)

    return (
        <div className="header">
            <div className="mobile-column">
                {visible && (
                    <Suspense fallback={''}>
                        <MobileMenu markedMode={markedMode} setMarkedMode={setMarkedMode} visible={visible} options={options} setOptions={setOptions} toggleVisible={toggleVisible} darkMode={darkMode} setDarkMode={setDarkMode} setSorting={setSorting} sorting={sorting} />
                    </Suspense>
                )}
                <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }} onClick={() => toggleVisible(!visible)}>
                    ☰
                </div>
            </div>
            <div className="mobile-column">
                <WordLengthSearch isMobile={true} listRef={listRef} {...propsToSend} />
            </div>
            <div className="mobile-column">
                <input className="wordSearch" type="text" placeholder="Search word" value={searchText} onChange={({ target: { value } }) => setSearchText(value)} />
            </div>
            <div className="mobile-column">
                <Select isMobile={true} isFetchingOptions={isFetchingOptions} options={options} currentPhilosopher={currentPhilosopher} onFocusHandlerCallback={() => onFocusHandler({ options, setOptions, isFetchingOptions, setIsFetchingOptions, originalOptions, setOriginalOptions })} onChangeHandler={({ target: { value: philosopher } }) => onPhilosopherSelectChange({ philosopher, listRef, setIsFetching, setStart, setEnd, setSearchText, setCurrentPhilosopher, setCurrentData, options, setOptions, setQuotesLoaded })} />
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
