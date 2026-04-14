import React, { Suspense, useState } from 'react'
import ErrorBoundary from '../../../../../common/components/error-boundary/error-boundary'
import { retryTenTimes } from '../../../../../common/utils/apiUtils'
import Select from '../../../tools/select/select'
import { WordLengthSearch } from '../../../tools/wordLengthSearch/wordLengthSearch'
import { onFocusHandler, onPhilosopherSelectChange } from '../../desktop/desktop-header/utils/utils'
import styles from '../../header-layout/header-layout.module.css'
import mobileMenuStyles from './mobile-header.module.css'
const MobileMenu = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "MobileMenu" */ '../mobile-menu/mobile-menu')))
const Breadcrumb = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "Breadcrumb" */ '../../../analysis/breadcrumb/breadcrumb')))
const UnreadCounter = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "UnreadCounter" */ '../../../analysis/unread-counter/unread-counter')))
const QuotesFound = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "QuotesFound" */ '../../../analysis/quotes-found/quotes-found')))

import { useEffect, useRef } from 'react'

const ENABLE_DEV_LOGS =
  typeof window !== 'undefined' &&
  (
    new URLSearchParams(window.location.search).get('dev') === 'true' ||
    sessionStorage.getItem('devLogs') === 'true'
  )

// persist flag
if (typeof window !== 'undefined') {
  if (new URLSearchParams(window.location.search).get('dev') === 'true') {
    sessionStorage.setItem('devLogs', 'true')
  }
}

function useRenderOverlay(componentName, props) {
  const prevProps = useRef(props)
  const renderCount = useRef(0)
  const freq = useRef({})
  const overlayRef = useRef(null)

  useEffect(() => {
    if (!ENABLE_DEV_LOGS) return

    // create overlay once
    if (!overlayRef.current) {
      const div = document.createElement('div')
      div.style.position = 'fixed'
      div.style.bottom = '10px'
      div.style.right = '10px'
      div.style.zIndex = '99999'
      div.style.background = 'rgba(0,0,0,0.8)'
      div.style.color = '#00ff90'
      div.style.padding = '10px'
      div.style.fontSize = '11px'
      div.style.borderRadius = '8px'
      div.style.maxWidth = '200px'
      div.style.fontFamily = 'monospace'
      div.style.lineHeight = '1.4'
      div.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)'
      div.style.pointerEvents = 'none' // 👈 touch passes through

      document.body.appendChild(div)
      overlayRef.current = div
    }

    renderCount.current++

    const changed = []

    Object.keys({ ...prevProps.current, ...props }).forEach(key => {
      if (prevProps.current[key] !== props[key]) {
        freq.current[key] = (freq.current[key] || 0) + 1
        changed.push(key)
      }
    })

    // get top 3 most changed props
    const top = Object.entries(freq.current)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)

    // update UI
    overlayRef.current.innerHTML = `
      <div>🔄 ${componentName}</div>
      <div>Render: ${renderCount.current}</div>
      <div>Last: ${changed.join(', ') || '-'}</div>
      <div>🔥 Top:</div>
      ${top.map(([k, v]) => `<div>${k}: ${v}</div>`).join('')}
    `

    prevProps.current = props
  })
          }

function MobileHeader({ listRef, setSearchText, searchText, start, end, setStart, setEnd, isFetching, setIsFetching, markedMode, setMarkedMode, markedQuotes, currentData, setCurrentData, currentPhilosopher, originalData, setCurrentPhilosopher, options, setOptions, darkMode, setDarkMode, setSorting, sorting, isFetchingOptions, setIsFetchingOptions, originalOptions, setOriginalOptions, userName, setUserName, setMarkedQuotes, isLoggedIn, setIsLoggedIn, password, setPassword, scrollPosition, setRowsRendered, syncDate, setSyncDate, recentPhilosophers, setRecentPhilosophers, setLogs }) {
    useRenderOverlay('MobileHeader', props)

  const [visible, toggleVisible] = useState(false)
    
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
                    <QuotesFound  />
                    {markedMode && <UnreadCounter isFetching={isFetching} currentData={currentData} originalData={originalData} markedQuotes={markedQuotes} currentPhilosopher={currentPhilosopher} isFetchingOptions={isFetchingOptions} isLoggedIn={isLoggedIn}
                    />}
                </Breadcrumb>
            </Suspense>
        </div>
    )
}

export default MobileHeader
