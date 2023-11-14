import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'
import React, { Suspense, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentModalName } from '../../../../../common/components/modal/modalRedux'
import useSnackbar from '../../../../../common/components/snackbar/useSnackbar'
import { retryTenTimes } from '../../../../../common/utils/apiUtils'
import Select from '../../../tools/select/select'
import { WordLengthSearch } from '../../../tools/wordLengthSearch/wordLengthSearch'
import styles from '../../header-layout/header-layout.module.css'
import LoginRegister from '../../mobile/login-register/login-register'
import { onFocusHandler, onPhilosopherSelectChange } from './utils/utils'
const Breadcrumb = React.lazy(() => retryTenTimes(() => import('../../../analysis/breadcrumb/breadcrumb')))
const UnreadCounter = React.lazy(() => retryTenTimes(() => import('../../../analysis/unread-counter/unread-counter')))
const QuotesFound = React.lazy(() => retryTenTimes(() => import('../../../analysis/quotes-found/quotes-found')))

function DesktopHeader({ listRef, setSearchText, searchText, start, end, setStart, setEnd, setIsFetching, markedMode, setMarkedMode, currentPhilosopher, setCurrentPhilosopher, options, setOptions, setCurrentData, isFetchingOptions, setIsFetchingOptions, originalOptions, setOriginalOptions, currentData, isFetching, originalData, markedQuotes, sorting, setRowsRendered, setUserName, userName, isLoggedIn, setIsLoggedIn, setMarkedQuotes, password, setPassword, syncDate, setSyncDate }) {
    const propsToSend = { start, end, setStart, setEnd, setSearchText }
    const [openSnackbar] = useSnackbar()
    const dispatch = useDispatch()
    return (
        <div className={`${styles.header} ${styles.customFont}`}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <WordLengthSearch listRef={listRef} {...propsToSend} />
                </div>
                <div className={styles.column}>
                    <TextField className={styles.wordSearch} id="outlined-search" label="Search" type="search" size="small" value={searchText} onChange={({ target: { value } }) => setSearchText(value)} />
                </div>
                <div className={styles.column}>
                    <Select isFetchingOptions={isFetchingOptions} options={options} currentPhilosopher={currentPhilosopher} onFocusHandlerCallback={useCallback(() => onFocusHandler({ options, setOptions, isLoggedIn, setSyncDate, isFetchingOptions, setIsFetchingOptions, originalOptions, setOriginalOptions, sorting, syncDate }), [isFetchingOptions, isLoggedIn, options, originalOptions, setIsFetchingOptions, setOptions, setOriginalOptions, setSyncDate, sorting, syncDate])} onChangeHandler={useCallback((_, { value: philosopher }) => onPhilosopherSelectChange({ philosopher, listRef, setIsFetching, setStart, setEnd, setSearchText, setCurrentPhilosopher, setCurrentData, options, setOptions, setRowsRendered }), [listRef, options, setCurrentData, setCurrentPhilosopher, setEnd, setIsFetching, setOptions, setRowsRendered, setSearchText, setStart])} />
                </div>
                <div className={styles.column}>
                    <span>
                        <span className={styles.vertically}></span> Marked Mode
                        <Switch
                            checked={markedMode}
                            onChange={({ target: { checked } }) => {
                                if (checked) {
                                    setMarkedMode(true)
                                } else {
                                    setMarkedMode(false)
                                }
                            }}
                        />
                    </span>
                </div>
                <div className={styles.column}>
                    <button onClick={useCallback(() => dispatch(setCurrentModalName('Report')), [])} className={styles.report}>
                        Open Report
                    </button>
                </div>
                <div className={styles.column}>
                    <LoginRegister {...{ setUserName, userName, openSnackbar, isLoggedIn, setIsLoggedIn, setMarkedQuotes, markedQuotes, password, setPassword, setIsFetching }} />
                </div>
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

export default DesktopHeader
